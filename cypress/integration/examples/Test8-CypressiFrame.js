/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Frames test', () => {

    it('Example', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Get frame ID and load it 
        cy.frameLoaded('#courses-iframe')
        // Switch to iframe
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        // Some times looks like there's a need to wait for the content to load or the assertion will fail
        cy.wait(3000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    });

    xit('Degug', () => {
        cy.visit('https://rahulshettyacademy.com')
        cy.get("a[href*='mentorship']").eq(0).click()
        cy.get("h1[class*='pricing-title']").should('have.length', 2)
    });
});