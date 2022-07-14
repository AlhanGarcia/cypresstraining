/// <reference types="Cypress" />

describe('Handling Mouse Hover', () => {

    it('Visible elements test',function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Cypress doesn't support mouse hover events, instead they are handled
        // via the show() method
        // show() method is applied ONLY to child elements of the parent element
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

    })    

    it('Invisible elements test',function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Cypress has a method to click on hidden elements by interacting
        // directly with the DOM
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

    })

})