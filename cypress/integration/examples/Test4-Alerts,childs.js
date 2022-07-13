/// <reference types="Cypress" />

describe('Test 4 - Alerts, popups, child windows', function () {

    it('All tests', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('input[value="Confirm"]').click()    

        // Verify text of the alert/confirm button - Need to trigger the event with .on() method
        // window:alert will trigger (cypress event)
        // function(argument) {} === (argument) => {}
        cy.on('window:alert', (event) => {
            // Mocha assertion
            expect(event).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', function(event) {
            // Mocha assertion
            expect(event).to.equal('Hello , Are you sure you want to confirm?')
        })

        // Cypress cannot deal with child windows/tabs, a link has to be opened in the same tab
        // it's necessary to remove the attribute 'target' for the link to not open in a new tab
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy')

        // Browser navigation commands (back and forward)
        cy.go('back')
        

    })

})