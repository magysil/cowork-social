describe('Acceso sin autenticación', () => {
  it('permite acceso al feed sin login (bug)', () => {
    cy.visit('/feed')

    cy.url().should('include', '/feed')
  })

  it('permite acceso al perfil sin login (bug)', () => {
    cy.visit('/profile/me')

    cy.url().should('include', '/profile/me')
  })
})
