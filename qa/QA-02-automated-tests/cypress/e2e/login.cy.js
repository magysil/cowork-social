describe("Login Flow", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("debería permitir login (mock) y redirigir al feed", () => {
    cy.get('#email').type("test@example.com");
    cy.get('#password').type("Password123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/feed");
  });
});
