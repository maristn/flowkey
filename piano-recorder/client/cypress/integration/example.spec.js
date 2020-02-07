/// <reference types="Cypress" />

context('Example', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Enter song title', () => {
        cy.get('.song-title-input')
            .type('Test song title').should('have.value', 'Test song title')
    })
})
