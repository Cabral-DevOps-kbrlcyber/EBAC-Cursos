/// <reference types="cypress" />


describe('Testes na agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve deletar um contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').first().click() 
        
    })
}) 