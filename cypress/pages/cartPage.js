class CartPage{
    getTotalValue(){
        return cy.get('#totalp');
    }

    getProductsTab(){
        return cy.get('tr.success');
    }
}

export default CartPage;