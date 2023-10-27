export class HomePage{

    leave_button = ':nth-child(3) > .oxd-main-menu-item > .oxd-text'

    Leave(){
        cy.get(this.leave_button).click()
    }

}