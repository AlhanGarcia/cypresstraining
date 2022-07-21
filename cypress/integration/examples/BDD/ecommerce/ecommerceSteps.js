import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../../support/pageObjects/HomePage';
import ProductsPage from '../../../../support/pageObjects/ProductsPage';

const homePage = new HomePage()
const productsPage = new ProductsPage()
let name;

Given('the user opens the ecommerce page', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

When('the user adds items to cart', function()  
{
    productsPage.getShopButton().click()
    cy.selectProduct('Blackberry')
    cy.selectProduct('iphone X')
    cy.selectProduct('Nokia Edge')

    this.data.productName.forEach(element => {
        cy.selectProduct(element)
    });
    productsPage.getCheckoutButton().click()
})

Then('the total should match the sum of the individual items', () => {
    let sum = 0;
    cy.get('tr td:nth-child(4) > strong').each(function (el, index, list) {
        let textNumber = el.text()
        let numberFromText = textNumber.match(/\d+/)
        sum += parseInt(numberFromText)
    })
      .then(function () {
            cy.log(sum)
        })
    cy.get('h3 > strong').then(el => {
        const grandTotal = parseInt(el.text().match(/\d+/))
        expect(grandTotal).to.equal(sum)
    })
})

Then('the thank you message should be displayed', () => {
    cy.contains('Checkout').click()
    cy.get('#country').type('ind')
    cy.get('.suggestions > :nth-child(1) > li > a').click()
    cy.get('#checkbox2').check({ force: true }).should('be.checked')
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function (response) {

        const actualText = response.text()
        expect(actualText.includes('Success! Thank you! Your order will be delivered in next few weeks :-)')).to.be.true
    })
})

When('the user fills the form details', function(dataTable) {
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('the form behaviour should be correct', function() {
    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.getFormControl().should('have.attr', 'minlength', 2)
    homePage.getEnterpreneur().should('be.disabled')
})

Given('the user selects the shop page', () => {
    homePage.getShopTab().click()
})