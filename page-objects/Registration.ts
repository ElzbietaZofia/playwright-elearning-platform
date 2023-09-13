import { expect, Page } from '@playwright/test'
import { BasePage } from './BasePage'
import { LoginPage } from './Login'
import { MainMenuComponent } from '../components/navigation.components'


export class RegistrationUser {
    constructor(private page: Page) { }

    loginPage = new LoginPage(this.page)
    mainMenuComponent = new MainMenuComponent(this.page)
    basePage = new BasePage(this.page)

    loginButton = this.page.getByRole('button', { name: 'Log in' })
    createAccountTextButton = this.page.getByRole('link', { name: 'Create Account' })
    usernameInput = this.page.getByLabel('Username*')
    passwordInput = this.page.getByLabel('Password*', { exact: true })
    repeatPasswordInput = this.page.getByLabel('Repeat Password*')
    emailInput = this.page.getByLabel('Email Address*')
    termsCheckbox = this.page.getByLabel('I agree to terms and conditions*Read more here')
    nextButton = this.page.getByRole('button', { name: 'Next' })
    firstnameInput = this.page.getByLabel('First name*')
    lastnameInput = this.page.getByLabel('Last name*')
    createAccountSubmit = this.page.getByRole('button', { name: 'Create the account' })

    cityInput = this.page.getByLabel('City')
    zipInput = this.page.getByLabel('Zip/Postal Code')
    address1Input = this.page.getByLabel('Address 1')
    phoneInput = this.page.getByLabel('Phone Number')

    resetFormButton = this.page.getByRole('button', { name: 'Reset Form' })

    popupSuccessfulAccountCreation = this.page.getByText('Check your email and use the sent link to confirm registration.')

    userNameValidationMsg = this.page.locator('#input-55-messages').getByText('Value is required')
    passwordValidationMsg = this.page.locator('#input-57-messages').getByText('Value is required')
    repeatedPasswordValidationMsg = this.page.getByText('Passwords must match')
    regiesteredEmailValidationMsg = this.page.getByText('The email has already been taken.')

    firstNameValidationMsg = this.page.locator('#input-64-messages').getByText('Value is required')
    lastNameValidationMsg = this.page.locator('#input-66-messages').getByText('Value is required')
    jobValidationMsg = this.page.locator('#input-68-messages').getByText('Value is required')


    async visitAccountCreation() {
        await this.loginButton.click()
        await this.createAccountTextButton.click()
    }


    async fillLoginInfo(email: string, password: string, repeatPassword: string) {
        await this.emailInput.type(email)
        await this.passwordInput.type(password)
        await this.repeatPasswordInput.type(repeatPassword)
        await this.nextButton.click()
    }

    async fillPersonalInfoRegularUser(firstname: string, lastname: string) {

        await this.firstnameInput.type(firstname)
        await this.lastnameInput.type(lastname)
        await this.createAccountSubmit.click()
    }

    async fillPersonalInfoUserOrganization(firstname: string, lastname: string) {

        await this.firstnameInput.type(firstname)
        await this.lastnameInput.type(lastname)
        await this.nextButton.click()
    }


    async fillAdditionalInfo(city: string, zip: string, address1: string, phone: string) {

        await this.cityInput.type(city)
        await this.zipInput.type(zip)
        await this.address1Input.type(address1)
        await this.phoneInput.type(phone)
    }

    async resetForm() {
        await this.resetFormButton.click()
    }


    async assertSuccessfulAccountCreation() {
        await this.page.waitForTimeout(5000)
        await expect(this.popupSuccessfulAccountCreation).toBeVisible()
    }

    async assertEmptyFormAccountCreation() {
        await expect(this.userNameValidationMsg).toContainText('Value is required')
        await expect(this.passwordValidationMsg).toContainText('Value is required')
    }

    async assertWrongPasswordRepeatAccountCreation() {
        await expect(this.repeatedPasswordValidationMsg).toContainText('Passwords must match')
    }

    async assertRegiesteredEmailAccountCreatiom() {
        await this.page.waitForTimeout(5000)
        await expect(this.regiesteredEmailValidationMsg).toContainText('The email has already been taken')
    }

    async assertEmptyFormPersonalAccountCreation() {
        await expect(this.firstNameValidationMsg).toContainText('Value is required')
        await expect(this.lastNameValidationMsg).toContainText('Value is required')
        await expect(this.jobValidationMsg).toContainText('Value is required')
    }


}
