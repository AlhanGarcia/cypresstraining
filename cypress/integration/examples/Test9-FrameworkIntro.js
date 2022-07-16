/// <reference types="Cypress" />


// Hooks are methods that are executed before, after, before all or after all
// it blocks
describe('My second test suite', () => {

    // Fixtures can store data for tests
    // Fixture data is stored in JSON format and must be called in 
    // the before hook function
    //* Using () => instead of function() {} will cause this.[variable] to not work
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)  {
            // this.[varaibleName] initializes a global variable for the entire class
            this.data = data
        })
      })
    
    xit('Sample test case', function () {
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        // Validate if "Bob" is present in the two way text field
        // 'have.value' gets the value of the element
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)

        // Validate that the min length is 2
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', 2)

        // Validate that checkbox is disabled
        cy.get('#inlineRadio3').should('be.disabled')
    });

    it('Navigate to shop and add items', function() {
        
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('ul[class="navbar-nav"]').contains('Shop').click()
        //* Custom commands can be created and stored in cypress/support/commands.js
        // cy.selectProduct() is a custom command similar to a regular function
        cy.selectProduct('Blackberry')
        cy.selectProduct('iphone X')
        cy.selectProduct('Nokia Edge')

        // Loops can be used to optimize code
        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });
    })

});