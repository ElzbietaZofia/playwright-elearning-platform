import { test } from '@playwright/test';
import { AdminLoginPage } from '../../page-objects/AdminLoginPage';
import { adminLoginData } from '../../test-data/login.data';
import { getRandomString, getRandomEbookTitle, getRandomName} from '../../utils/data-helpers';
import { BasePage } from '../../page-objects/BasePage';
import { AdminEbooks } from '../../page-objects/ManagingEbooks';


test.describe("eBook CRUD and Search box tests", () => {
    let adminLoginPage: AdminLoginPage
    let basePage: BasePage
    let adminEbooks: AdminEbooks

    const randomEbookTitle = getRandomEbookTitle()
    const eBookTitleToBeDeleted = 'eBook to be deleted'
    const randomName = getRandomName()
    const publisher = 'Publisher'
    const retailPrice = '120'
    const eBookPrice = '100'
    const bookPrice = '110'
    const eBookBookPrice = '170'
    const pagesCount = '350'
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    const randomString = getRandomString()
    const pdfFilePath = '/home/Pictures/samplePDF.pdf'
    const coverFilePath = '/home/Pictures/full.jpg'

    const positiveQuery = 'Scrum'
    const positiveQueryCaseSensitivity = 'sCruM'
    const negativeQuery = 'obrigado'


    test.beforeEach(async ({ page }) => {
        adminLoginPage = new AdminLoginPage(page)
        basePage = new BasePage(page)
        adminEbooks = new AdminEbooks(page)


        await basePage.visitAdminPanelLogin()
        await adminLoginPage.login(adminLoginData.adminEmailValid, adminLoginData.passwordValid)
        await adminEbooks.goToEbooksList()
    })

    test('Positive eBook Creation', async ({ page }) => {

        await adminEbooks.goToEbookCreation()
        await adminEbooks.fillEbookCreationForm(randomEbookTitle, randomName, publisher, retailPrice, eBookPrice, bookPrice, eBookBookPrice, pagesCount, loremIpsum, loremIpsum, loremIpsum, loremIpsum, pdfFilePath, coverFilePath)
        await adminEbooks.assertEbookCreation()
    })

    test('Negative eBook Creation - empty form', async ({ page }) => {
        await adminEbooks.goToEbookCreation()
        await adminEbooks.fillEbookCreationForm('', '', '', '', '', '', '', '', '', '', '', '')
        await adminEbooks.assertEmptyFormEbookCreation()
    })

    test('eBook Creation and Delete', async ({page}) => {
        await adminEbooks.goToEbookCreation()
        await adminEbooks.fillEbookCreationForm(eBookTitleToBeDeleted, randomName, publisher, retailPrice, eBookPrice, bookPrice, eBookBookPrice, pagesCount, loremIpsum, loremIpsum, loremIpsum, loremIpsum, pdfFilePath, coverFilePath)
        await adminEbooks.deleteEbook()
        await adminEbooks.assertEbookDeletion()
    })

    test('Negative eBook Creation - empty eBook Name', async ({ page }) => {
        await adminEbooks.goToEbookCreation()
        await adminEbooks.fillEbookCreationForm('', randomName, publisher, retailPrice, eBookPrice, bookPrice, eBookBookPrice, pagesCount, loremIpsum, loremIpsum, loremIpsum, loremIpsum, pdfFilePath, coverFilePath)
        await adminEbooks.assertEmptyEbookName()
    })

    test('Negative eBook Creation - empty Authors', async ({ page }) => {
        await adminEbooks.goToEbookCreation()
        await adminEbooks.fillEbookCreationForm(randomEbookTitle, '', publisher, retailPrice, eBookPrice, bookPrice, eBookBookPrice, pagesCount, loremIpsum, loremIpsum, loremIpsum, loremIpsum, pdfFilePath, coverFilePath)
        await adminEbooks.assertEmptyAuthors()
    })

    test('Negative eBook Creation - empty Overview', async ({ page }) => {
        await adminEbooks.goToEbookCreation()
        await adminEbooks.fillEbookCreationForm(randomEbookTitle, randomName, publisher, retailPrice, eBookPrice, bookPrice, eBookBookPrice, pagesCount, '', loremIpsum, loremIpsum, loremIpsum, pdfFilePath, coverFilePath)
        await adminEbooks.assertEmptyOverview()
    })

    test('Negative eBook Creation - empty About Authors', async ({ page }) => {
        await adminEbooks.goToEbookCreation()
        await adminEbooks.fillEbookCreationForm(randomEbookTitle, randomName, publisher, retailPrice, eBookPrice, bookPrice, eBookBookPrice, pagesCount, loremIpsum, loremIpsum, '', loremIpsum, pdfFilePath, coverFilePath)
        await adminEbooks.assertEmptyAboutAuthors()
    })

    test('Negative eBook Creation - empty eBook File', async ({ page }) => {
        await adminEbooks.goToEbookCreation()
        await adminEbooks.fillEbookCreationForm(randomEbookTitle, randomName, publisher, retailPrice, eBookPrice, bookPrice, eBookBookPrice, pagesCount, loremIpsum, loremIpsum, loremIpsum, loremIpsum, '', coverFilePath)
        await adminEbooks.assertEmptyPDFFile()
    })

    test('Negative eBook Creation - empty eBook Cover', async ({ page }) => {
        await adminEbooks.goToEbookCreation()
        await adminEbooks.fillEbookCreationForm(randomEbookTitle, randomName, publisher, retailPrice, eBookPrice, bookPrice, eBookBookPrice, pagesCount, loremIpsum, loremIpsum, loremIpsum, loremIpsum, pdfFilePath, '')
        await adminEbooks.assertEmptyCover()
    })


    test('Positive Search Result', async ({ page }) => {
        await adminEbooks.fillSearchBoxInput(positiveQuery)
        await adminEbooks.assertPositiveSeach()
    })

    test('Positive Case Sensitivity Test', async ({ page }) => {
        await adminEbooks.fillSearchBoxInput(positiveQueryCaseSensitivity)
        await adminEbooks.assertPositiveSeach()
    })

    test('Negative Search Result', async ({ page }) => {
        await adminEbooks.fillSearchBoxInput(negativeQuery)
        await adminEbooks.assertNegativeSearch()
    })

    test('Positive eBook Editing', async ({page}) => {
        await adminEbooks.goToEbookEditing()
        await adminEbooks.fillEbookEditingForm(randomString)
        await adminEbooks.assertEbookEditing()
    })


})

