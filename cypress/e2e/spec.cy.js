import data from '../fixtures/data.json'

describe('Login Test', () => {
  it('Visits the Login page', () => {
    cy.visit(data.url)

    cy.url().should('include', 'signin')

    cy.get('[name="email"]').type(data.email)
    cy.get('[name="password"]').type('invalid-test')
    cy.get('[type="submit"]').click()

    cy.get(".Mui-error").should('contain', 'Min 8 character and one Uppercase, Lowercase, Number and Special Character')
  })
})