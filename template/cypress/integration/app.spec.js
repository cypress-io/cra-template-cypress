describe("App", function() {
  beforeEach(function() {
    cy.visit("/");
  });

  it("renders the app", function() {
    cy.get(".App-link").should("contain", "Learn React");
  });
});
