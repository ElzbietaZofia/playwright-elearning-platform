
import { test } from '@playwright/test';
import { AdminLoginPage } from '../../page-objects/AdminLoginPage';
import { adminLoginData } from '../../test-data/login.data';
import { AddModulesToCourse, AdminCourse, AdminCourseSearchBox } from '../../page-objects/ManagingCourses';
import { getRandomString, getRandomNumber, getRandomName, getRandomEmail, getRandomTitle } from '../../utils/data-helpers'
import { BasePage } from '../../page-objects/BasePage';


test.describe("Course Creation and Editing", () => {
    let adminLoginPage: AdminLoginPage
    let adminCourse: AdminCourse
    let basePage: BasePage

    const randomTitle = getRandomTitle()
    const randomCourseLength = getRandomNumber(2, 6);
    const randomSubscriptionLenght = getRandomNumber(3,8)
    const randomPrice = getRandomNumber(200, 400)
    const randomName = getRandomName()
    const randomEmail = getRandomEmail()
    const randomString = getRandomString()
    const videoFilePath = '/home/Videos/MP4.mp4'
    const thumbnailFilePath = '/home/Pictures/thumbnail.jpg'

    test.beforeEach(async ({ page }) => {
        adminLoginPage = new AdminLoginPage(page)
        adminCourse = new AdminCourse(page)
        basePage = new BasePage(page)

        await basePage.visitAdminPanelLogin()
        await adminLoginPage.login(adminLoginData.adminEmailValid, adminLoginData.passwordValid)
    })


    test('Positive Course Creation', async ({ page }) => {

        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm(randomTitle, randomCourseLength.toString(), randomSubscriptionLenght.toString(), randomPrice.toString(), randomPrice.toString(), randomName, randomEmail, randomString, randomString, randomString, videoFilePath, thumbnailFilePath)
        await adminCourse.assertCourseCreation()
    })

    test('Negative Course Creation - Empty Form', async ({ page }) => {

        await adminCourse.goToCourseCreation()
        await adminCourse.emptyCreateCourseForm()
        await adminCourse.assertEmptyCreateCourseForm()
    })

    test('Negative Course Creation - Course title left blank', async ({ page }) => {

        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm('', randomCourseLength.toString(), randomSubscriptionLenght.toString(), randomPrice.toString(), randomPrice.toString(), randomName, randomEmail, randomString, randomString, randomString, videoFilePath, thumbnailFilePath)
        await adminCourse.assertCourseTitleBlank()
    })

    test('Negative Course Creation - Course length left blank', async ({ page }) => {
 
        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm(randomTitle, '', randomSubscriptionLenght.toString(), randomPrice.toString(), randomPrice.toString(), randomName, randomEmail, randomString, randomString, randomString, videoFilePath, thumbnailFilePath)
        await adminCourse.assertCourseLengthBlank()
    })

    test('Negative Course Creation - Course Subscription left blank', async ({ page }) => {
  
        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm(randomTitle, randomCourseLength.toString(), '', randomPrice.toString(), randomPrice.toString(), randomName, randomEmail, randomString, randomString, randomString, videoFilePath, thumbnailFilePath)
        await adminCourse.assertCourseSubscriptionBlank()
    })

    test('Negative Course Creation - Course Price left blank', async ({ page }) => {

        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm(randomTitle, randomCourseLength.toString(), randomSubscriptionLenght.toString(), '', randomPrice.toString(), randomName, randomEmail, randomString, randomString, randomString, videoFilePath, thumbnailFilePath)
        await adminCourse.assertCoursePriceBlank()
    })

    test('Negative Course Creation - Course Instructor left blank', async ({ page }) => {
 
        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm(randomTitle, randomCourseLength.toString(), randomSubscriptionLenght.toString(), randomPrice.toString(), randomPrice.toString(), '', randomEmail, randomString, randomString, randomString, videoFilePath, thumbnailFilePath)
        await adminCourse.assertInstructorsNameBlank()
    })


    test('Negative Course Creation - What You Learn left blank', async ({ page }) => {

        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm(randomTitle, randomCourseLength.toString(), randomSubscriptionLenght.toString(), randomPrice.toString(), randomPrice.toString(), randomName, randomEmail, '', randomString, randomString, videoFilePath, thumbnailFilePath)
        await adminCourse.assertWhatYouLearnBlank()
    })


    test('Negative Course Creation - Prerequisities left blank', async ({ page }) => {

        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm(randomTitle, randomCourseLength.toString(), randomSubscriptionLenght.toString(), randomPrice.toString(), randomPrice.toString(), randomName, randomEmail, randomString, randomString, '', videoFilePath, thumbnailFilePath)
        await adminCourse.assertPrerequisitiesBlank()
    })

    test('Negative Course Creation - Video field left blank', async ({ page }) => {
 
        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm(randomTitle, randomCourseLength.toString(), randomSubscriptionLenght.toString(), randomPrice.toString(), randomPrice.toString(), randomName, randomEmail, randomString, randomString, randomString, '', thumbnailFilePath)
        await adminCourse.assertVideoFieldBlank()
    })

    test('Negative Course Creation - Thumbnail field left blank', async ({ page }) => {

        await adminCourse.goToCourseCreation()
        await adminCourse.fillCreateCourseForm(randomTitle, randomCourseLength.toString(), randomSubscriptionLenght.toString(), randomPrice.toString(), randomPrice.toString(), randomName, randomEmail, randomString, randomString, randomString, videoFilePath, '')
        await adminCourse.assertThumbnailBlank()
    })

    test('Positive Course Editing', async ({page}) => {
        await adminCourse.goToCourseEdit()
        await adminCourse.fillEditCourseForm(randomCourseLength.toString())
        await adminCourse.assertCourseEditing()
    })

    test('Negative Course Editing - Negative number in Course Length field', async ({page}) => {
        await adminCourse.goToCourseEdit()
        await adminCourse.fillEditCourseForm('-1')
        await adminCourse.assertNegativeCourseEditing()
    })
    
})


test.describe("Courses Search Box Tests", () => {
    let adminLoginPage: AdminLoginPage
    let adminCourse: AdminCourse
    let adminCourseSearchBox: AdminCourseSearchBox
    let basePage: BasePage

    const positiveQuery = 'agile'
    const positiveQueryCaseSensitivity = 'aGilE'
    const negativeQuery = 'kalimera'


    test.beforeEach(async ({ page }) => {
        adminLoginPage = new AdminLoginPage(page)
        adminCourse = new AdminCourse(page)
        adminCourseSearchBox = new AdminCourseSearchBox(page)
        basePage = new BasePage(page)

        await basePage.visitAdminPanelLogin()
        await adminLoginPage.login(adminLoginData.adminEmailValid, adminLoginData.passwordValid)
        await adminCourseSearchBox.goToCoursesList()
    })

    test('Positive Search Results', async ({ page }) => {

        await adminCourseSearchBox.fillSearchBox(positiveQuery)
        await adminCourseSearchBox.assertPositiveSearchResult()
    })

    test('Positive Search Results - Case Sensitivity Test', async ({ page }) => {

        await adminCourseSearchBox.fillSearchBox(positiveQueryCaseSensitivity)
        await adminCourseSearchBox.assertPositiveSearchResult()
    })

    test('Negative Search Result - No results', async ({ page }) => {

        await adminCourseSearchBox.fillSearchBox(negativeQuery)
        await adminCourseSearchBox.assertNegativeSearchResult()
    })

    test('Negative Search Result - Empty query', async ({ page }) => {

        await adminCourseSearchBox.fillSearchBox('')
        await adminCourseSearchBox.assertEmptySearchQuery()
    })


})

test.describe("Adding Modules to the Courses", () => {
    let adminLoginPage: AdminLoginPage
    let adminCourse: AdminCourse
    let adminCourseSearchBox: AdminCourseSearchBox
    let addModulesToCourse: AddModulesToCourse
    let basePage: BasePage

    test.beforeEach(async ({ page }) => {
        adminLoginPage = new AdminLoginPage(page)
        adminCourse = new AdminCourse(page)
        adminCourseSearchBox = new AdminCourseSearchBox(page)
        addModulesToCourse = new AddModulesToCourse(page)
        basePage = new BasePage(page)

        await basePage.visitAdminPanelLogin()
    })

    test('Add and Delete New Module to the Course', async ({ page }) => {

        await adminLoginPage.login(adminLoginData.adminEmailValid, adminLoginData.passwordValid)
        await adminCourseSearchBox.goToCoursesList()
        await addModulesToCourse.addNewModuleToCourse()
        await addModulesToCourse.assertAddedModule()
        await addModulesToCourse.deleteModuleFromCourse()
        await addModulesToCourse.assertDeletedModule()
    })

})

