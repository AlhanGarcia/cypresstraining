/// <reference types="Cypress" />

describe('My First Test', () => {

    it('First test', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      // Get invisible products as well
      cy.get('.product').should('have.length', 5)
      // In cypress get acts as findElement in Selenium (get visible products only)
      cy.get('.product:visible').should('have.length', 4)
      // Parent child chaining
      cy.get('.products').find('.product').should('have.length', 4)
      // Look for specific elements based on the index (hardcoded index)
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

      // Iterate over array of products with EACH
      cy.get('.products')
      .find('.product')
      .each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
          cy.wrap($el).find('button').click()
        }
      }) 

      // Resolve a promise before assigning it to a variable, otherwise it will break
      // Promise has to be resolved manually with .then() method
      cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text())
      })

      // This won't work because the promise hasn't been resolved yet
      // const logo = cy.get('.brand')
      // cy.log(logo.text())

    })

  })