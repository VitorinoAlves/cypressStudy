import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import CartPage from "../pages/cartPage";
import ProductPage from "../pages/productPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const cartPage = new CartPage();
const productPage = new ProductPage();

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    loginPage.getUserNameField().type(username);
    loginPage.getPasswordFiedl().type(password);
    loginPage.getLoginButton().click();
});

//Add a product to the cart
Cypress.Commands.add('addProductCart', (productName) =>{
    productPage.getAddButton().should('be.visible');
    productPage.getProductName().should('have.text', productName);
    productPage.getAddButton().click();
    cy.on('window:alert', (text) => {
        expect(text).to.contains('Product added');
        return;
    });
});

//Verify a product in the cart
Cypress.Commands.add('verifyProductCart', (productName, productPrice) =>{
    homePage.getCartNavOption().click();
    cartPage.getProductsTab().should('be.visible');
    cartPage.getProductsTab().find('td').contains(productName);
    cartPage.getProductsTab().find('td').contains(productPrice);
});
