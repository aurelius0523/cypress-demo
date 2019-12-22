/// <reference types="Cypress" />

const currentUser = {
    username : "drakzero",
    password: "onepiece"
}
describe("Logging into lowyat", () => {

    it("Loads the home page", () => {
        cy.visit("https://forum.lowyat.net/index.php");

        const {username, password} = currentUser;

        cy.get("#userlinksguest > p > a:nth-child(2)").click();

        cy.get("#ipbwrapper > form > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > fieldset > table > tbody > tr:nth-child(1) > td:nth-child(2) > input").type(username);

        cy.get("#ipbwrapper > form > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > fieldset > table > tbody > tr:nth-child(2) > td:nth-child(2) > input").type(password);

        cy.get("[name='submit']").click();

        cy.contains(username);
    });
});