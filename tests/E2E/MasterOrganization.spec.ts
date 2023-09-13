import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/Login';
import { masterUserLoginData, userToBeDeleted } from '../../test-data/login.data';
import { getRandomLastName, getRandomEmail, getRandomFirstName, getRandomJob} from '../../utils/data-helpers';
import { BasePage } from '../../page-objects/BasePage';
import { MasterOrganization } from '../../page-objects/MasterOrganization';


test.describe("Managing Users", () => {
	let loginPage: LoginPage
	let basePage: BasePage
	let masterOrganization: MasterOrganization

	const randomEmail = getRandomEmail()
	const randomFirstName = getRandomFirstName()
	const randomLastName = getRandomLastName()
	const randomJob = getRandomJob()

	test.beforeEach(async ({ page }) => {
    	loginPage = new LoginPage(page)
    	basePage = new BasePage(page)
    	masterOrganization = new MasterOrganization(page)

    	await basePage.visit()
    	await loginPage.login(masterUserLoginData.masterEmailValid, masterUserLoginData.masterPasswordValid)
   	 
	})


	test('Negative adding user to Organization - Empty form', async ({ page }) => {

    	await masterOrganization.goToMyOrganizationUsersList()
    	await masterOrganization.fillAddUserModal('', '', '', '')
    	await masterOrganization.assertEmptyForm()
	})

	test('Negative adding user to Organization - Empty Email', async ({ page }) => {

    	await masterOrganization.goToMyOrganizationUsersList()
    	await masterOrganization.fillAddUserModal('', randomFirstName, randomLastName, randomJob)
    	await masterOrganization.assertEmptyEmail()
	})

	test('Negative adding user to Organization - Empty First Name', async ({ page }) => {

    	await masterOrganization.goToMyOrganizationUsersList()
    	await masterOrganization.fillAddUserModal(randomEmail, '', randomLastName, randomJob)
    	await masterOrganization.assertEmptyFirstName()
	})

	test('Negative adding user to Organization - Empty Last Name', async ({ page }) => {

    	await masterOrganization.goToMyOrganizationUsersList()
    	await masterOrganization.fillAddUserModal(randomEmail, randomFirstName, '', randomJob)
    	await masterOrganization.assertEmptyLastName()
	})

	test('Negative adding user to Organization - Empty Job Title', async ({ page }) => {

    	await masterOrganization.goToMyOrganizationUsersList()
    	await masterOrganization.fillAddUserModal(randomEmail, randomFirstName, randomLastName, '')
    	await masterOrganization.assertEmptyJobTitle()
	})

	test('Promote and Demote User to Master', async ({page}) => {

    	await masterOrganization.goToMyOrganizationUsersList()
    	await masterOrganization.promoteUserToMaster()
    	await masterOrganization.demoteUserFromMaster()
    	await masterOrganization.assertUserDemotion()
	})

	test('Adding and Deleting User to Organization', async ({page}) => {
		await masterOrganization.goToMyOrganizationUsersList()
		await masterOrganization.fillAddUserModal(userToBeDeleted.userToBeDeletedEmail, userToBeDeleted.firstNameToBeDeleted, userToBeDeleted.lastNameToBeDeleted, userToBeDeleted.jobToBeDeleted)
		await masterOrganization.assertAddingUserToOrganization()

		await masterOrganization.deletingUserFromOrganization()
	})

})

test.describe("Organization Users Search Box Tests", () => {
	let loginPage: LoginPage
	let basePage: BasePage
	let masterOrganization: MasterOrganization

	const validQuery = 'example'
	const validQueryCaseSensitivity = 'eXamplE'
	const validComplexQuery = 'Example Sample'
	const invalidQuery = 'kuchnia'

	test.beforeEach(async ({ page }) => {
    	loginPage = new LoginPage(page)
    	basePage = new BasePage(page)
    	masterOrganization = new MasterOrganization(page)

    	await basePage.visit()
    	await loginPage.login(masterUserLoginData.masterEmailValid, masterUserLoginData.masterPasswordValid)
    	await masterOrganization.goToMyOrganizationUsersList()
	})


	test('Positive Search Result', async ({ page }) => {

    	await masterOrganization.fillSearchBoxInput(validQuery)
    	await masterOrganization.assertPositiveSearchResult()
	})

	test('Positive Search Result - Case Sensitivity Test', async ({ page }) => {

    	await masterOrganization.fillSearchBoxInput(validQueryCaseSensitivity)
    	await masterOrganization.assertPositiveSearchResult()
	})

	test('Positive Search Result - Complex Query', async ({ page }) => {

    	await masterOrganization.fillSearchBoxInput(validComplexQuery)
    	await masterOrganization.assertPositiveSearchResult()
	})

	test('Negative Search Result - No results', async ({ page }) => {

    	await masterOrganization.fillSearchBoxInput(invalidQuery)
    	await masterOrganization.assertNegativeSearchResult()
	})


})
