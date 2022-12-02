/// <reference types="Cypress" />

describe("login test", () => {
    it.only("login with empty email field", () => {
        cy.visit("/");
        cy.get('a[class="nav-link nav-buttons"]').first().click();
    });
});