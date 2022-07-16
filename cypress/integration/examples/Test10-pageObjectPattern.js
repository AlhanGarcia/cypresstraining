/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'

describe('My second test suite', () => {
    before(() => {

        cy.fixture('example').then(function(data)  {
            this.data = data
        })
      })
    
    it('Sample test case', function () {
        //* Allocate memory for a new HomePage instance
        const homePage = new HomePage()
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)


        homePage.getTwoWayDataBinding().should('have.value', this.data.name)


        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', 2)


        homePage.getEnterpreneur().should('be.disabled')
    });

    xit('Navigate to shop and add items', function() {
        
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('ul[class="navbar-nav"]').contains('Shop').click()
        cy.selectProduct('Blackberry')
        cy.selectProduct('iphone X')
        cy.selectProduct('Nokia Edge')

        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });
    })

});