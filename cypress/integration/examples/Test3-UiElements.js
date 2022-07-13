/// <reference types="Cypress" />

describe("Cypress training test 3", function () {

    it('UI elements in webpage', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //Checkboxes
        
        // For behaviour assertions we use 'be.action'
        // For properties assertions we use 'have.property'
        // .and() can be used instead of 'multiple .should() methods
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // Get all checkboxes
        // .check() can take an array of CSS values
        cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')

        // Radio buttons
        cy.get('input[value="radio2"]').check().should('be.checked')

        // Dropdowns (dynamic and static)

        //Static
        // .select() takes either a CSS value or text value
        cy.get('select')
        .select('Option2')
        .should('have.value', 'option2')

        //Dynamic dropdowns
        cy.get('#autocomplete').type('ind')
        // Navigate from parent to child using class selector + space + html selector
        cy.get('.ui-menu-item div').each(function ($el, index, $list) {

            if($el.text() === 'India'){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        // Manipulating visible/invisible elements
        // Use hash + id selector
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
    });

});