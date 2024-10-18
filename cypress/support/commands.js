Cypress.Commands.add("showRegisterForm", () => {
  cy.get("#registerForm").should("be.visible");
});

Cypress.Commands.add("showLoginForm", () => {
  cy.get("#registerForm").find('button[data-auth="login"]').click();
  cy.get("#loginForm").should("be.visible");
  cy.wait(500);
});

Cypress.Commands.add("login", (email, password) => {
  cy.get("#loginForm").find("input[name=email]").type(email, { log: false });
  cy.get("#loginForm")
    .find("input[name=password]")
    .type(password, { log: false });
  cy.get("#loginForm").submit();
  cy.wait(1500);
});

Cypress.Commands.add("loginWithTestUser", () => {
  const email = Cypress.env("email");
  const password = Cypress.env("password");
  cy.login(email, password);
});

Cypress.Commands.add("loginWithInvalidCredentials", () => {
  cy.login("invalidUser@stud.noroff.no", "wrongPassword123");
});

Cypress.Commands.add("isLoggedIn", () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem("token")).to.be.a("string");
  });
});

Cypress.Commands.add("logout", () => {
  cy.get('button[data-auth="logout"]').click();
  cy.wait(500);
});

Cypress.Commands.add("isLoggedOut", () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem("token")).to.be.null;
  });
});
