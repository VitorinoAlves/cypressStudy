class HomePage{
    getHomeNavOption(){
        return cy.get('.active > .nav-link');
    }

    getCartNavOption(){
        return cy.get(':nth-child(4) > .nav-link');
    }

    getLoginButton() {
        return cy.get('[data-target="#logInModal"]');
    }

    getUserNameLabel(){
        return cy.get('#nameofuser');
    }

    getProductLink(){
        return cy.get('.hrefch');
    }

    getCategoryOptionByName(category){
        return cy.get('.list-group-item').contains(category);
    }
}

export default HomePage