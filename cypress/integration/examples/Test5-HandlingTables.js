/// <reference types="Cypress" />

describe('Handling tables', () => {

    it('Tables', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // Use each cycles to iterate over tables
        // Use tr td:nth-child(x) CSS selector to select only certain columns
        cy.get('tr td:nth-child(2)').each(function ($el, index, $list) {

            // index variable increases each iteration even if not used
            const textTable = $el.text()
            if(textTable.includes('Python')){
                // next() can only be applied to get() method
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    // Resolve promise to extract text
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }

        

        })

    })

})