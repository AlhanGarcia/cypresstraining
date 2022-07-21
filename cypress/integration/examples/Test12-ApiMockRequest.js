/// <reference types="Cypress" />

describe('Mock API tests', function() 
{
    it('First test API request', function() 
    {
        // Cypress can mock API requests
        //* THIS REQUEST IS SENT TO THE BACKEND
        cy.visit('https://www.rahulshettyacademy.com/angularAppdemo/')
        // This is only intercepting, 
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) =>
        {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            req.continue((res)=>
            {
                // expect(res.statusCode).to.equal(403)
                expect(res.statusCode).to.equal(404)
            })
        }).as('dummyUrl')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@dummyUrl')
    })
    
});