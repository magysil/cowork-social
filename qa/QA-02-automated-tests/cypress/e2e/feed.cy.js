describe('Feed', () => {
  it('debería cargar el feed correctamente', () => {
    cy.visit('/feed')

    cy.url().should('include', '/feed')
    cy.contains('Nueva Publicación').should('exist')
  })

  it('botones del feed están visibles', () => {
    cy.visit('/feed')

    cy.contains('Me gusta').should('exist')
    cy.contains('Comentar').should('exist')
    cy.contains('Compartir').should('exist')
  })
})