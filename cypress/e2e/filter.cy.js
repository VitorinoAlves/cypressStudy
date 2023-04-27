import HomePage from "../pages/homePage";

describe('Filter', () => {
    const homePage=new HomePage();
    let productList =[];

    before(()=>{
        cy.request('GET', `${Cypress.env('apiUrl')}/entries`).then((response) => {
            productList=productList.concat(response.body.Items);

            for(let i=0; i<2; i++){
                cy.request('POST', `${Cypress.env('apiUrl')}/pagination`, {id:productList[productList.length-1].id}).then((response) => {
                    productList=productList.concat(response.body.Items);
                });
            }
        });
    });

    it('Filter by Laptops', () =>{
        cy.visit('');
        const filteredProductList = productList.filter(product => product.cat==='notebook');

        homePage.getCategoryOptionByName('Laptops').click();

        for(let i=0; i<6; i++){
            homePage.getProductLink().eq(i).should('have.text', filteredProductList[i].title);
        }

    });
})