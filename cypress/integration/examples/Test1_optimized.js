/// <reference types="Cypress" />

describe('My First Test', () => {

    it('First test', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      //Optimize .products with a variable
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').should('have.length', 4)
      // Resolve promise and then print output
      cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {

        console.log('test')

      })
      cy.get('@productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
          cy.wrap($el).find('button').click()
        }
      })

      // Assert if logo text is correctly displayed
      cy.get('.brand').should('have.text', 'GREENKART')

      // Print text from brand
      cy.get('.brand').then(function(logoText){
          cy.log(logoText.text())
      })

    })

  })