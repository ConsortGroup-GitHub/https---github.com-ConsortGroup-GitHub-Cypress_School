export class LoginPage{

    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'
    errorMessage_text = '.oxd-alert-content > .oxd-text'

    enterUsername(username){
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
    }

    checkInvalidCredentialsErrorMessage(){
        cy.get(this.errorMessage_text)
        .should('be.visible')
        .and('contain','Invalid credentials')
    }
}