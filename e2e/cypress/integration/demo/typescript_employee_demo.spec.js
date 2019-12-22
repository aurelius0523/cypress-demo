/// <reference types="Cypress" />

describe("Landing on the home page", () => {
    it("Loads the home page", () => {
        cy.visit("http://typescript-employee-demo.kltandev.com");
    });
});