import HomePage from "../pages/homePage";

describe('Login Page', () => {
    const homePage=new HomePage();
    


    it('Intercept filter request', () => {
        cy.intercept('POST', 'https://api.demoblaze.com/bycat', { fixture: 'productsList.json' }).as('filterByCategory');

        cy.visit('');
        cy.get('div.card.h-100').first().should('be.visible');
        homePage.getCategoryOptionByName('Laptops').click();

        //API validation
        cy.wait('@filterByCategory').then((interception) => {
            expect(interception.response.body.Items[0].title).to.equal('TARDIS');
        });
        cy.get('@filterByCategory').its('response.statusCode').should('eq', 200);

        //Validate the stub data is displayed in the front-end
        homePage.getProductLink().eq(0).should('have.text', 'TARDIS');

    });
});