describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
  });

  it("logs in a user using valid credentials", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
  });

  it("logs out the user when log out button is clicked", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
    cy.logout();
    cy.isLoggedOut();
    cy.showRegisterForm();
  });

  it("User logs in width wrong credentials (expected to fail)", () => {
    cy.showLoginForm();
    cy.loginWithInvalidCredentials();
    cy.isLoggedIn();
  });

  it("shows an error message when invalid credentials are used", () => {
    cy.showLoginForm();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.contains(
        "Either your username was not found or your password is incorrect",
      );
    });
    cy.loginWithInvalidCredentials();
  });
});
