describe('Registro de Usuario', () => {
  it('debería registrar usuario y redirigir a login', () => {
    cy.visit('/register')

    cy.get('#name').type('Magally Test')
    cy.get('#email').type('magally@test.com')
    cy.get('#password').type('12345678')
    cy.get('#confirmPassword').type('12345678')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/login')
  })
})