/// <reference types="Cypress" />
//* Import classes from files in the directory specified
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'

describe('My second test suite', () => {
    before(() => {

        cy.fixture('example').then(function(data)  {
            this.data = data
        })
      })
    
    xit('Sample test case', function () {
        //* Allocate memory for a new HomePage instance
        const homePage = new HomePage()
    
        //* Hardcoded url can be removed using environment variable
        //* base url can be concatenated to reach subdomains
        cy.visit(Cypress.env('url') + '/angularpractice/')


        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getFormControl().should('have.attr', 'minlength', 2)
        homePage.getEnterpreneur().should('be.disabled')
    });

    it('Navigate to shop and add items', function() {
        //* Allocate memory for a new HomePage instance
        const productsPage = new ProductsPage()
        
        //* Hardcoded url can be removed using environment variable
        //* base url can be concatenated to reach subdomains
        cy.visit(Cypress.env('url') + '/angularpractice/')

        productsPage.getShopButton().click()
        cy.selectProduct('Blackberry')
        cy.selectProduct('iphone X')
        cy.selectProduct('Nokia Edge')

        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });
        productsPage.getCheckoutButton().click()

        let sum = 0;
        // Validate grand total y looping through all prices 
        cy.get('tr td:nth-child(4) > strong').each(function(el, index, list) {
            let textNumber = el.text()
            let numberFromText = textNumber.match(/\d+/)
            sum += parseInt(numberFromText)
        })
        // Cypress is synchronous, but JS is asynchronous, so we need to resolve the promise 
        // so we can wait for the result and proceeding with the rest of the code 
        .then(function(){
            cy.log(sum)
        })
        // Compare sum of individual elements to grand total
        cy.get('h3 > strong').then(el => {
            const grandTotal = parseInt(el.text().match(/\d+/))
            expect(grandTotal).to.equal(sum)

        })



        cy.contains('Checkout').click()
        cy.get('#country').type('ind')
        // This command will fail because of the default timeout timeout
        // To solve this problem, we should change the default configuration settings (cypress.config.js)

        // Another option is to change the timeout time only for the selected spec file
        //* Cypress.config('pageLoadTimeout', 10000)

        cy.get('.suggestions > :nth-child(1) > li > a').click()

        // Select checkbox and click 'Purchase'
        cy.get('#checkbox2').check({force: true}).should('be.checked')
        cy.get('input[type="submit"]').click()
        // This doesn't work because there's extra text, use regular expressions to solve this problem
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(response) {

            const actualText = response.text()
            expect(actualText.includes('Success! Thank you! Your order will be delivered in next few weeks :-)')).to.be.true
        })


    })

});