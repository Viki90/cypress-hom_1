/// <reference types="Cypress" />

describe("registration test", () => {
    it("registration with an insufficient number of characters in the password", () => {
        cy.visit("/");
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Viki");
        cy.get("#last-name").type("Developer");
        cy.get("#email").type("master222@gmail.com");
        cy.get("#password").type("1234");
        cy.get("#password-confirmation").type("1234");
        cy.get('input[type="checkbox"]').check();
        cy.get("button").click();
    });

    it("registration with empty fields", () => {
        cy.visit("/");
        cy.get("a[href='/register']").click();
        cy.get("#first-name");
        cy.get("#last-name");
        cy.get("#email");
        cy.get("#password");
        cy.get("#password-confirmation");
        cy.get('input[type="checkbox"]');
        cy.get("button").click();
    });

    it("registration with invalid email adress", () => {
        cy.visit("/");
        cy.get("a[href='/register']").click();
        cy.get("#first-name").type("Viki");
        cy.get("#last-name").type("Developer");
        cy.get("#email").type("marci");
        cy.get("#password").type("12341234");
        cy.get("#password-confirmation").type("12341234");
        cy.get('input[type="checkbox"]').check();
        cy.get("button").click();
    });
});