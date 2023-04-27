class ProductPage{
    getAddButton(){
        return cy.get('.btn-success');
    }

    getProductName(){
        return cy.get('h2.name');
    }
}

export default ProductPage;