/// <reference types="Cypress" />

describe("login test", () => {
    it("login with empty email field", () => {
        cy.visit("/");
        cy.get('a[class="nav-link nav-buttons"]').first().click();
        cy.get("#email");
        cy.get("#password").type("12341234");
        cy.get("button").click();
    });

    it("login with less then 8 characters in password", () => {
        cy.visit("/");
        cy.get('a[class="nav-link nav-buttons"]').first().click();
        cy.get("#email").type("marci@gmail.com");
        cy.get("#password").type("1234");
        cy.get("button").click();
    });

    it("login with invalid credentials", () => {
        cy.visit("/");
        cy.get('a[class="nav-link nav-buttons"]').first().click();
        cy.get("#email").type("marci2222222@gmail.com");
        cy.get("#password").type("12341234");
        cy.get("button").click();
    });

    it("login with invalid email format", () => {
        cy.visit("/");
        cy.get('a[class="nav-link nav-buttons"]').first().click();
        cy.get("#email").type("marci.com");
        cy.get("#password").type("12341234");
        cy.get("button").click();
    });

    it("invalid email address without domain", () => {
        cy.visit("/");
        cy.get('a[class="nav-link nav-buttons"]').first().click();
        cy.get("#email").type("marci@");
        cy.get("#password").type("12341234");
        cy.get("button").click();
    });
});