describe('Perfil de usuario', () => {
  it('debería mostrar información del perfil', () => {
    cy.visit('/profile/me')

    cy.contains('Editar Perfil').should('exist')
  })

  it('botón editar perfil cambia estado', () => {
    cy.visit('/profile/me')

    cy.contains('Editar Perfil').click()
    cy.contains('Guardar').should('exist')
  })
})