declare namespace Cypress {
    interface Chainable {
      [x: string]: any;
      loginUI(): Chainable<void>;
    }
  }

Cypress.Commands.add('loginUI', () => {
  // Add your login logic here
  cy.visit('/w/index.php?title=Special:UserLogin');
  cy.get('#wpName1').type(Cypress.env('username'));
  cy.get('#wpPassword1').type(Cypress.env('password'));
  cy.get('#wpLoginAttempt').click();
});