/// <reference types="Cypress" />

describe('Handle child windows and get value from HTML attribute', () => {

    it('First test case', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Use jQuery object to get the attribute value
       // Cypress doesn't support cross domains, it only allows to test on the same domain
       // For example www.google.com ---> www.google.com/someotherthing is ok
       // www.google.com/ ---> www.bing.com won't work
        cy.get('#opentab').then(function (value) {
            let url = value.prop('href')
            // Mock url domain change
            url = 'www.google.com'
            cy.visit(url)
        })
        // Another method to get the attribute value that I came up with
        // cy.get('#opentab').invoke('prop', 'href').then((value) => {
        //     cy.log(value)
        // })

    });

});