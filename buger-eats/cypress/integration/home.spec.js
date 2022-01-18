
describe('Validar texto 1', ()=> {
it('app deve estar online' , ()=> {
    cy.visit('https://buger-eats.vercel.app')
    cy.viewport(1440,900)
    cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
})

it('Validar texto 2' , ()=> {
    cy.visit('https://buger-eats.vercel.app')
    cy.viewport(1440,900)
    cy.get('p').should('have.text', 'Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.')
})

it('Clicar no botão' , ()=> {
    cy.visit('https://buger-eats.vercel.app')
    cy.viewport(1440,900)
    cy.get('a').click() 
})


})