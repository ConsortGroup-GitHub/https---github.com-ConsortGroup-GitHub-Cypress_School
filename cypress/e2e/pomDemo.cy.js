/// <reference types="cypress"/>

import { LoginPage } from "./pages/login_page"
import { HomePage } from "./pages/home_page"

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('All Login Tests', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Login with valid credentials and Leave - POM', () => {
  
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        homePage.Leave()
    })

    it('Login with invalid credentials - POM', () => {
        
        loginPage.enterUsername('Admin111')
        loginPage.enterPassword('admi23')
        loginPage.clickLogin()

        loginPage.checkInvalidCredentialsErrorMessage()
    })
})