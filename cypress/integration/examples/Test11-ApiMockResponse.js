/// <reference types="Cypress" />

describe('Mock API tests', function() 
{
    it('First test', function() 
    {
        // Cypress can mock API responses by entering the url request and then providing what the
        // response should be
        //* THIS RESPONSE IS SENT TO THE BACKEND (of cypress) INSTEAD OF THE ACTUAL RESPONSE
        cy.visit('https://www.rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, 
        {
            statusCode: 200,
            body: [{
                "book_name": "RobotFramework",
                "isbn": "144353",
                "aisle": "982053"
            }]
        }).as('bookRetrievals')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookRetrievals').should(({request,response})=> 
        {
            cy.get('tr').should('have.length', response.body.length + 1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    });
});