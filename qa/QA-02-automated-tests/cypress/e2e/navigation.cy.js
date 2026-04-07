describe('Navegación desde Navbar', () => {
  it('debería navegar entre páginas principales', () => {
    cy.visit('/')

    cy.contains('Feed').click()
    cy.url().should('include', '/feed')

    cy.contains('Perfil').click()
    cy.url().should('include', '/profile/me')

    cy.contains('Login').click()
    cy.url().should('include', '/login')
  })
})
