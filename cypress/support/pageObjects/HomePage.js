//* pageObject design pattern for simplicity of tests

class HomePage
{

getEditBox()
{
    return cy.get('input[name="name"]:nth-child(2)')
}

getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}

getGender()
{
    return cy.get('select')
}

getEnterpreneur()
{
    return cy.get('#inlineRadio3')
}

getShopTab()
{
    return cy.get('ul[class="navbar-nav"]').contains('Shop')
}

getFormControl()
{
    return cy.get(':nth-child(1) > .form-control')
}

}

//* export will make sure to make this class available to all other modules
export default HomePage;