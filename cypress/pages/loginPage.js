class LoginPage{
    getModalTitle(){
        return cy.get('#logInModalLabel');
    }

    getUserNameField(){
        return cy.get('#loginusername');
    }

    getPasswordFiedl(){
        return cy.get('#loginpassword');
    }

    getLoginButton(){
        return cy.get('[onclick="logIn()"]');
    }
}

export default LoginPage;