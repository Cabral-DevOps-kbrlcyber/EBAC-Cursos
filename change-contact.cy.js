/// <reference types="cypress" />


describe('Testes na agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve alterar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Gian Souza')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('giansouzalima@gmail.com')
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type(' +55 11 99239-4908')

        cy.get('.alterar').first().click()
    })
}) 