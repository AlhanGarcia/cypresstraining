/// <reference types="Cypress" />

describe("Second test suite", function () {

    it("Test written on my own", function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(2000)
        cy.get('.products').as('allProducts')
        cy.get('@allProducts').find('.product').each(function ($el, index, $list) {
           const textProduct = $el.find('h4.product-name').text()
           if(textProduct.includes('Brocolli')){
            cy.wrap($el).find('button').click()
           } 
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    });
});