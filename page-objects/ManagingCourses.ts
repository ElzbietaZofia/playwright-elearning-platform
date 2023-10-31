import { expect, Page } from '@playwright/test'
import { AdminPanelComponent } from '../components/admin-panel.components';


export class AdminCourse {
  constructor(private page: Page) { }

  adminPanelComponent = new AdminPanelComponent(this.page)

  // Create
  createCourseButton = this.page.getByRole('button', { name: 'Create Course' })
  courseTitleInput = this.page.getByLabel('Enter course title')
  subscriptionLenghtInput = this.page.getByLabel('Enter subscription length')
  coursePriceInput = this.page.getByTestId('price_field').getByLabel('Enter price')
  instructorsNameInput = this.page.getByLabel('Instructor\'s full name')
  categoryDropList = this.page.getByTestId('category_field')
  courseCategory = this.page.getByTestId('category_course')
  whatYouLearnTextField = this.page.getByTestId('you_will_learn_field').locator('div').first()
  aboutCourseTextField = this.page.getByTestId('about_field').locator('div').first()
  prerequisitiesTextField = this.page.getByTestId('prerequisities_field').locator('div').first()
  tagsDropList = this.page.getByTestId('dropdown_tags')
  tagFormDropList = this.page.getByText('Success Architecture')
  eBooksDropList = this.page.getByRole('textbox').filter({ hasText: 'Select eBooksSelect eBooks' }).locator('i').nth(1)
  eBookFromDropList = this.page.getByTestId('drop_ebook_list-42')

  courseVideoFileEnter = this.page.getByLabel('Enter video course', { exact: true })
  courseVideoThumbnailEnter = this.page.getByLabel('Enter video thumbnail', { exact: true })
  addYourCourseButton = this.page.getByTestId('submit_button')

  emptyTitleMsg = this.page.getByText('Title is required')
  emptyCourseLengthMsg = this.page.getByText('The minimum value allowed is 1')
  emptySubscriptionLengthMsg = this.page.getByTestId('info_field_22')
  emptyCoursePriceMsg = this.page.getByTestId('info_field_24')
  emptyInstructorsNameMsg = this.page.getByText('Name is required')
  emptyInstructorsEmailMsg = this.page.getByText('Email is required')
  emptyWhatYouLearnMsg = this.page.getByTestId('info_field_26')
  emptyAboutCourseMsg = this.page.getByTestId('info_field_32')
  emptyPrerequisitiesMsg = this.page.getByTestId('info_field_34')
  emptyVideoMsg = this.page.getByTestId('info_field_41')
  emptyThumbnailMsg = this.page.getByText('Thumbnail is required')

  //Edit
  coursesListHeader = this.page.getByText('Courses Course')
  tooltipPCIe = this.page.locator('[data-test-id="options-button-2"]')
  editLabelTooltip = this.page.getByText('Edit')
  saveYourCourseButton = this.page.getByRole('button', { name: 'Save your course' })
  toastSuccessEdit = this.page.getByText('You have successfully edited a course.')
  toastUnsuccessfulEdit = this.page.getByText('Unable to edit the resource. Double check the validity of data.')

  toastEmpty = this.page.getByText('Unable to edit the resource. Double check the validity of data.')

  async goToCourseCreation() {
    await this.adminPanelComponent.coursesIcon.click()
    await this.createCourseButton.click()
  }

  async fillCreateCourseForm(
    courseTitle: string,
    subscriptionLength: string,
    coursePrice: string,
    instructorName: string,
    whatYouLearn: string,
    aboutCourse: string,
    prerequisites: string,
    videoFilePath: string,
    thumbnailFilePath: string
  ) {

    await this.courseTitleInput.type(courseTitle)

    if (subscriptionLength) {
      await this.subscriptionLenghtInput.click();
      await this.subscriptionLenghtInput.press('Backspace')
      await this.subscriptionLenghtInput.type(subscriptionLength)
    }

    if (coursePrice) {
      await this.coursePriceInput.click();
      await this.coursePriceInput.press('Backspace')
      await this.coursePriceInput.type(coursePrice)
    }

    if (instructorName) {
      await this.instructorsNameInput.type(instructorName)
    }

    await this.categoryDropList.click()
    await this.courseCategory.click()


    if (whatYouLearn) {
      await this.whatYouLearnTextField.type(whatYouLearn)
    }

    if (aboutCourse) {
      await this.aboutCourseTextField.type(aboutCourse)
    }

    if (prerequisites) {
      await this.prerequisitiesTextField.type(prerequisites)
    }

    await this.tagsDropList.click()
    await this.tagFormDropList.click()
    await this.eBooksDropList.click()
    await this.eBookFromDropList.click()

    if (videoFilePath) {
      await this.courseVideoFileEnter.click();
      await this.courseVideoFileEnter.setInputFiles(videoFilePath)
    }

    if (thumbnailFilePath) {
      await this.courseVideoThumbnailEnter.setInputFiles(thumbnailFilePath)
    }

    await this.addYourCourseButton.click()
  }


  async assertCourseCreation() {
    await this.page.waitForTimeout(5000)
    await expect(this.page).toHaveURL('/admin/elearning-course')
  }

  async emptyCreateCourseForm() {
    await this.addYourCourseButton.click()
  }

  async assertEmptyCreateCourseForm() {
    await expect(this.toastEmpty).toBeVisible()
  }

  async assertCourseTitleBlank() {
    await expect(this.emptyTitleMsg).toContainText('Value is required')
  }

  async assertCourseLengthBlank() {
    await expect(this.toastEmpty).toBeVisible()
  }

  async assertCourseSubscriptionBlank() {
    await expect(this.toastEmpty).toBeVisible()
  }

  async assertCoursePriceBlank() {
    await expect(this.toastEmpty).toBeVisible()
  }

  async assertInstructorsNameBlank() {
    await expect(this.emptyInstructorsNameMsg).toContainText('Value is required')
  }

  async assertWhatYouLearnBlank() {
    await expect(this.emptyWhatYouLearnMsg).toContainText('Value is required')
  }

  async assertPrerequisitiesBlank() {
    await expect(this.emptyPrerequisitiesMsg).toContainText('Value is required')
  }

  async assertVideoFieldBlank() {
    await expect(this.emptyVideoMsg).toContainText('Value is required')
  }

  async assertThumbnailBlank() {
    await expect(this.emptyThumbnailMsg).toContainText('Value is required')
  }

  // Editing
  async goToCourseEdit() {
    await this.adminPanelComponent.coursesIcon.click()
    await this.coursesListHeader.click()
    await this.page.waitForTimeout(3000)
    await this.tooltipPCIe.click()
    await this.editLabelTooltip.click()
  }

  async fillEditCourseForm(
    subscriptionLength: string
  ) {

    if (subscriptionLength) {
      await this.subscriptionLenghtInput.click();
      await this.subscriptionLenghtInput.press('Backspace')
      await this.subscriptionLenghtInput.type(subscriptionLength)
    }

    await this.saveYourCourseButton.click()
  }

  async assertCourseEditing() {
    await expect(this.tooltipPCIe).toBeVisible()
  }

  async assertNegativeCourseEditing() {
    await expect(this.toastUnsuccessfulEdit).toBeVisible()
    await expect(this.page).toHaveURL('/admin/elearning-course/edit-2')
  }

}

export class AdminCourseSearchBox {
  constructor(private page: Page) { }

  adminPanelComponent = new AdminPanelComponent(this.page)

  searchBoxCoursesInput = this.page.getByLabel('Search', { exact: true })
  searchBoxCoursesIcon = this.page.getByRole('button', { name: 'Search appended action' })
  searchResultCourses1 = this.page.getByRole('cell', { name: 'Agile and Scrum in Practise' })
  searchResultCourses2 = this.page.getByRole('cell', { name: 'Lean Six Oparations' })
  searchResultContainer = this.page.locator('//*[@id="__nuxt"]/div/div/div/main/div/div/div[3]/div/table/tbody')
  paginationButtonPage2 = this.page.getByRole('button', { name: 'Goto Page 2' })


  async goToCoursesList() {
    await this.adminPanelComponent.coursesIcon.click()
    await this.page.waitForTimeout(5000)
  }

  async fillSearchBox(query: string) {
    await this.searchBoxCoursesInput.type(query)
    await this.searchBoxCoursesInput.press('Enter');
  }

  async assertPositiveSearchResult() {
    await expect(this.searchResultCourses1).toContainText('Scrum Team')
  }

  async assertNegativeSearchResult() {
    await expect(this.searchResultContainer).toBeEmpty()
  }

  async assertEmptySearchQuery() {
    await expect(this.searchResultCourses2).toBeVisible()
  }


}

export class AddModulesToCourse {
  constructor(private page: Page) { }

  adminPanelComponent = new AdminPanelComponent(this.page)

  eLearningCoursesHeader = this.page.getByText('eLearning CoursesCreate Course')
  toolTip = this.page.locator('[data-test-id="options-button-2"]')
  toolTipModulesLabelPCIe = this.page.getByText('Modules', { exact: true })

  addNewModuleButton = this.page.getByRole('button', { name: 'Add New Module' })
  modulesCategoryDropList = this.page.getByRole('textbox').filter({ hasText: 'Select Module CategorySelect Module Category' }).locator('i').nth(1)
  categoryLabel = this.page.getByText('PCI Modules')
  moduleSelectDropList = this.page.getByRole('textbox').filter({ hasText: 'Select ModuleSelect Module' }).locator('i').nth(1)
  moduleLabel = this.page.getByText('Scrum pitfalls (Common Signals)')
  modalHeader = this.page.getByRole('heading', { name: 'Add Modules to eLearning Course' })
  addModuleModalButton = this.page.getByRole('button', { name: 'Add', exact: true })
  headerModule = this.page.getByRole('link', { name: ' Work with your team' })
  binIconModule = this.page.locator('div:nth-child(3) > .flex > .ml-auto > .w-full > .v-btn')
  modalDeleteModule = this.page.getByRole('button', { name: 'Delete' })

  moduleContainer = this.page.locator('.smooth-dnd-container')
  toastSuccessDelete = this.page.getByText('You have successfully deleted a course module from the course. ×')



  async addNewModuleToCourse() {
    await this.eLearningCoursesHeader.click()
    await this.toolTip.click()
    await this.toolTipModulesLabelPCIe.click()
    await this.addNewModuleButton.click()
    await this.modulesCategoryDropList.click()
    await this.categoryLabel.click()
    await this.moduleSelectDropList.click()
    await this.moduleLabel.click()
    await this.addModuleModalButton.click()
  }

  async assertAddedModule() {
    await expect(this.headerModule).toBeVisible()
  }

  async deleteModuleFromCourse() {
    await this.binIconModule.click()
    await this.modalDeleteModule.click()
  }

  async assertDeletedModule() {
    await expect(this.toastSuccessDelete).toBeVisible()
  }


}

