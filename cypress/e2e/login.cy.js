import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";

describe('Login Page', () => {
  const homePage=new HomePage();
  const loginPage=new LoginPage();
  beforeEach(() => {
    // root-level hook
    // runs before every test block
    cy.visit('');
    homePage.getLoginButton().click();
    loginPage.getModalTitle().should('have.text', 'Log in');
    cy.wait(500);
  })

  it('Login into the system with a active user', () => {
    cy.login(Cypress.env('userName'), Cypress.env('password'));
    homePage.getUserNameLabel().should('have.text', `Welcome ${Cypress.env('userName')}`);
  });

  it('Login into the system with the wrong password', () => {
    cy.login(Cypress.env('userName'), 'wrongPassword');
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Wrong password.');
    });
  });

  it('Login into the system with the wrong username', () => {
    cy.login('TestUsar45848', Cypress.env('password'));
    cy.on('window:alert', (text) => {
      expect(text).to.contains('User does not exist.');
    });
  });

  it('Login into the system with password field empty', () => {
    loginPage.getPasswordFiedl().type('TestPassword05');
    loginPage.getLoginButton().click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Please fill out Username and Password.');
    });
  });

  it('Login into the system with username field empty', () => {
    loginPage.getUserNameField().type('TestUser1104');
    loginPage.getLoginButton().click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Please fill out Username and Password.');
    });
  });
})