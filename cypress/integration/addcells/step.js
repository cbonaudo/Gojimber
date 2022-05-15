import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("I am on the main page", () => {
  cy.visit("http://localhost:8080/");
});

When("I click on {}", (id) => {
  cy.get("#" + id).click();
});

Then("I should see {} cells", (number) => {
  cy.hasNumberOfCells(number);
});
