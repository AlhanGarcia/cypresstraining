class ProductsPage
{
    getShopButton()
    {
        return cy.get('ul[class="navbar-nav"]').contains('Shop')   
    }

    getCheckoutButton()
    {
        return cy.get('.nav-link.btn.btn-primary')
    }
}
export default ProductsPage
