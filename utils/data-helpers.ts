import * as crypto from "crypto"

export function getRandomString() {
    return crypto.randomBytes(10).toString("hex")
}

export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const firstNameList = ["Alice", "Bob", "Charlie", "David", "Eve", "Anna", "Norma", "John", "Michael", "Camila", "Mary", "Ben"];
const lastNameList = ["Smith", "Johnson", "Brown", "Lee", "Wilson", "Cosgrowe", "Campbell", "Whitman"];

export function getRandomName(): string {
    const randomFirstName = firstNameList[Math.floor(Math.random() * firstNameList.length)];
    const randomLastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];
    return `${randomFirstName} ${randomLastName}`;
}

const domainList = ["example.com", "test.com", "domain.com", "sample.com", "super.com", "smooth.com", "address.com", "cool.com"]

export function getRandomEmail(): string {
    const randomUsername = getRandomString()
    const randomDomain = domainList[Math.floor(Math.random() * domainList.length)]
    return `${randomUsername}@${randomDomain}`
}

const courseCategoryList = ["Lean", "XP", "Core"]

export function getRandomCategory(): string {
    const randomCategory = Math.floor(Math.random() * courseCategoryList.length);
    return courseCategoryList[randomCategory];
}

const moduleCategoryList = ["Scrum", "XP"]

export function getRandomModuleCategory(): string {
    const randomModuleCategory = Math.floor(Math.random() * moduleCategoryList.length);
    return courseCategoryList[randomModuleCategory];
}

const testList = ["Alpha", "Charles", "Parrot", "Paul Gauguin"]

export function getRandomTest(): string {
    const randomTest = Math.floor(Math.random() * testList.length);
    return testList[randomTest];
}

const URLsList = ["https://en.wikipedia.org/wiki/Doncaster", "https://en.wikipedia.org/wiki/Castra", "https://en.wikipedia.org/wiki/Cornelius_Nepos", "https://en.wikipedia.org/wiki/Chair", "https://en.wikipedia.org/wiki/Ivory"]

export function getRandomURL(): string {
    const randomURL = Math.floor(Math.random() * URLsList.length);
    return URLsList[randomURL];
}

const firstTitlePart = ["Lama", "Bear", "Hen", "Tortoise", "Hedgehog", "Gorilla", "Goose", "Dog", "Sparrow", "Monkey", "Owl", "Cat", "Blackbird", "Bug", "Otter", "Bunny", "Rat", "Rabbit", "Squirrel", "Dove", "Pigeon"];
const secondTitlePart = ["Huge", "Bold", "Brown", "Wise", "Clever", "Independent", "Smart", "Reckless", "Sneaky", "Fast", "Slow", "Magnificent", "Active", "Alert", "Brilliant", "White", "Black"];

export function getRandomTitle(): string {
    const randomFirstTitlePart = firstTitlePart[Math.floor(Math.random() * firstTitlePart.length)];
    const randomSecondTitlePart = secondTitlePart[Math.floor(Math.random() * secondTitlePart.length)];
    return `${randomFirstTitlePart} ${randomSecondTitlePart}`;
}

const firstModuleTitlePart = ["Daisy", "Rose", "Bluebell", "Dahlia", "Begonia", "Iris", "Orchid", "Peony", "Sunflower", "Tulip", "Iris", "Begonia", "Lavender", "Lilly", "Wisteria", "Violet"];
const secondModuleTitlePart = ["Beautiful", "Delicate", "Pretty", "Amazing", "Terrific", "Lovely", "Brilliant", "Divine", "Grand", "Superb", "Gorgeus"];

export function getRandomModuleTitle(): string {
    const randomFirstModuleTitlePart = firstModuleTitlePart[Math.floor(Math.random() * firstModuleTitlePart.length)];
    const randomSecondModuleTitlePart = secondModuleTitlePart[Math.floor(Math.random() * secondModuleTitlePart.length)];
    return `${randomFirstModuleTitlePart} ${randomSecondModuleTitlePart}`;
}


const firstQuizTitlePart = ["Pudding", "Soup", "Nuggets", "Burger", "Fries", "Salad", "Bread", "Pasta", "Oat", "Barley"];
const secondQuizTitlePart = ["Delicious", "Tasty", "Light", "Strong", "Bitter", "Dry", "Frozen", "Mouldy", "Raw"];

export function getRandomQuizTitle(): string {
    const randomFirstQuizTitlePart = firstQuizTitlePart[Math.floor(Math.random() * firstQuizTitlePart.length)];
    const randomSecondQuizTitlePart = secondQuizTitlePart[Math.floor(Math.random() * secondQuizTitlePart.length)];
    return `${randomFirstQuizTitlePart} ${randomSecondQuizTitlePart}`;
}

const firstName = ["Maria", "Charles", "Steven", "Paul", "Ringo", "Max", "Walt", "Carmen", "Monica", "Jerry", "Cody", "Raul", "Ron", "Evan", "Arnold"]

export function getRandomFirstName(): string {
    const randomFirstName = Math.floor(Math.random() * firstName.length);
    return firstName[randomFirstName];
}

const lastName = ["Smith", "Johnson", "Hitchens", "McCartney", "Star", "Spider", "Corn", "Sousa", "Grace", "Nolan", "Jackson", "Monter", "Jonas", "Camaro", "Wood"]

export function getRandomLastName(): string {
    const randomLastName = Math.floor(Math.random() * lastName.length);
    return lastName[randomLastName];
}

const jobTitleList = ["carpenter", "designer", "writer", "CCO", "CEO", "CTO", "CVO", "pilot"]

export function getRandomJob(): string {
    const randomJob = Math.floor(Math.random() * jobTitleList.length);
    return jobTitleList[randomJob];
}

const firstTrainingNamePart = ["Lama", "Bear", "Hen", "Tortoise", "Hedgehog", "Gorilla", "Goose", "Dog", "Sparrow", "Monkey", "Owl", "Cat", "Blackbird", "Bug", "Otter", "Bunny", "Rat", "Rabbit", "Squirrel", "Dove", "Pigeon"];
const secondTrainingNamePart = ["Huge", "Bold", "Brown", "Wise", "Clever", "Independent", "Smart", "Reckless", "Sneaky", "Fast", "Slow", "Magnificent", "Active", "Alert", "Brilliant", "White", "Black"];

export function getRandomTrainingName(): string {
    const randomFirstOrgNamePart = firstTrainingNamePart[Math.floor(Math.random() * firstTitlePart.length)];
    const randomSecondOrgNamePart = secondTrainingNamePart[Math.floor(Math.random() * secondTitlePart.length)];
    return `${randomFirstOrgNamePart} ${randomSecondOrgNamePart}`;
}

const emaillist = [
    'weyifid590@edulena.com',
    'nabado7452@aaorsi.com',
    'wewiv86401@quipas.com',
    'ketih63235@akoption.com',
    'agttehae@fgvfsg.com',
    'pluto@example.com',
    'wpode@mailto.plus',
    'fred@example.com',
    'xogak99244@appxapi.com',
    'orange@example.com',
    'yosoma9613@akoption.com',
    'jakeyi7003@anomgo.com',
    'jakeyi7003@anomgo.com',
    'godip69275@nmaller.com',
    '83b0b1fd097485e97d89@super.com',
    'zarkagadra@gufum.com',
    'jepos31575@duscore.com',
    'przygodzkiwiktor@gmail.com',
    '8a48da3cbb6a2971cf11@super.com',
    'heweko9044@aaorsi.com',
    'kegak45199@anomgo.com',
    'eozgaq@mailto.plus',
    'erin@mindshare.com',
    'todat73680@devswp.com',
    'adres@email.com',
    'cavara3457@anwarb.com',
    'jitite7876@devswp.com',
    'yahar80070@akoption.com',
    '34c94922477@theeyeoftruth.com',
    'taxer26251@v1zw.com',
    'gekeb88181@sportrid.com',
    'wwww@www.com',
    'yecive1802@aaorsi.com',
    'axqox@mailto.plus',
    'fakidu89@02.tml.waw.pl',
    'yedrakurzi@gufum.com',
    'seyobaw976@weishu8.com',
    'example@example.com',
    'xekat30643@anomgo.com',
    'kenny@smth.com',
    'vopel72452@dronetz.com',
    'wayado7177@anwarb.com',
    'tomufo@mailto.plus',
    'email@email.com',
    'lejoy98516@aaorsi.com',
    'denel38657@dronetz.com'
]

export function getNextEmail(): string {
    if (emaillist.length === 0) {
        throw new Error('No more emails available')
    }
    const nextEmail = emaillist.shift() as string
    console.log(`Using email: ${nextEmail}`)
    console.log(`Remaining emails: ${emaillist}`)
    return nextEmail
}


const firstEbookTitlePart = ["Lama", "Bear", "Hen", "Tortoise", "Hedgehog", "Gorilla", "Goose", "Dog", "Sparrow", "Monkey", "Owl", "Cat", "Blackbird", "Bug", "Otter", "Bunny", "Rat", "Rabbit", "Squirrel", "Dove", "Pigeon"];
const secondEbookTitlePart = ["Daisy", "Rose", "Bluebell", "Dahlia", "Begonia", "Iris", "Orchid", "Peony", "Sunflower", "Tulip", "Iris", "Begonia", "Lavender", "Lilly", "Wisteria", "Violet"];

export function getRandomEbookTitle(): string {
    const randomFirstEbookTitlePart = firstEbookTitlePart[Math.floor(Math.random() * firstEbookTitlePart.length)];
    const randomSecondEbookTitlePart = secondEbookTitlePart[Math.floor(Math.random() * secondEbookTitlePart.length)];
    return `${randomFirstEbookTitlePart} ${randomSecondEbookTitlePart}`;
}

