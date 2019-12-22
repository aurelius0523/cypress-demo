/// <reference types="Cypress" />

describe("Showing how .get() works for dynamic element", () => {
    it("Should wait until dynamic element appears instead of throwing error", () => {
        cy.visit("http://localhost:3000");

        cy.get('#showButton').click();

        cy.contains('This content is dynamically added on click!');
    });

    it("Should not be able to click disabled button but JQuery probably will not throw this error", () => {
        cy.visit("http://localhost:3000");

        cy.get("#disabledButton").click();

        cy.not().contains("The button is now Clickable!")
    });

    it("Should be able to click buttons that are not disabled", () => {
        cy.visit("http://localhost:3000");

        cy.get("#disabledButtonToggle").click();

        cy.get("#disabledButton").click();

        cy.contains("The button is now Clickable!")
    });

    it("Should not be able to click on a button that is blocked by an absolutely positioned element", () => {
        cy.visit("http://localhost:3000");

        cy.get("#blockedButton").click();
    });

    it("Should be able to click disabled button by forcing it using Cypress", () => {
        cy.visit("http://localhost:3000");

        cy.get("#blockedButton").click({ force: true });
    });

    it("Should wait for classname 'active' that is added to div 2 seconds later", () => {
        cy.visit("http://localhost:3000");

        cy.get("div").should("have.class", "active");
    });

    it("Should wait until element vanishes after some time", () => {
        cy.visit("http://localhost:3000");

        cy.get("#vanishingElement").should("not.exist");
    });
});