describe("Logout function", () => {
  beforeEach(() => {
    localStorage.setItem("token", "sample-token");
    localStorage.setItem("profile", JSON.stringify({ name: "Test User" }));
    cy.visit("/");
  });

  it("should log the user out and reload the page", () => {
    cy.get('button[data-auth="logout"]').click();

    cy.window().then((window) => {
      expect(window.localStorage.getItem("token")).to.be.null;
      expect(window.localStorage.getItem("profile")).to.be.null;
    });

    cy.url().should("eq", `${window.location.origin}/`);

    cy.get('button[data-auth="login"]').should("be.visible");
  });
});
