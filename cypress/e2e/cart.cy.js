import HomePage from "../pages/homePage";
import CartPage from "../pages/cartPage";

describe('Cart', () => {
    const homePage=new HomePage();
    const cartPage=new CartPage();
    let productList;

    before(()=>{
        cy.request('GET', `${Cypress.env('apiUrl')}/entries`).then((response) => {
            productList = response.body;
      });
    });

    it('Add two products to the cart and verify the total price', () =>{
        cy.visit('');

        homePage.getProductLink().eq(0).click();
        cy.addProductCart(productList.Items[0].title);
        cy.verifyProductCart(productList.Items[0].title, productList.Items[0].price);

        homePage.getHomeNavOption().click();

        homePage.getProductLink().eq(1).click();
        cy.addProductCart(productList.Items[1].title);
        cy.verifyProductCart(productList.Items[1].title, productList.Items[1].price);

        const totalPrice = parseFloat(productList.Items[0].price) + parseFloat(productList.Items[1].price);
        cartPage.getTotalValue().should('have.text', totalPrice.toString());

        //cy.get('#totalp').contains(totalPrice.toString());
        //contains is a selector, it's not a good practive to use it as an assertion
    });
})