// cypress/integration/login.spec.js
describe('Login', () => {
    it('logs in with valid credentials', () => {
      cy.visit('/login');
      cy.get('input[type="email"]').type('your@email.com');
      cy.get('input[type="password"]').type('yourpassword');
      cy.get('button').contains('Log In').click();
      cy.url().should('eq', 'https://yourapp.com/home'); // Replace with your app's URL
    });
  });
  