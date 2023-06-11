describe('Load Login', ()=>{
    it('Load Login', ()=>{
        //The issue was solved by adding the chromeWebSecurity: false to the config file
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
    })
})