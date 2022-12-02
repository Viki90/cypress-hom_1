/// <reference types="Cypress" />

describe("login test", () => {
    it("login with empty email field", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get('a[class="nav-link nav-buttons"]').first().click();
    });
});