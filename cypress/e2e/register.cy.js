describe('Registration Test', () => {
    it('Should load registration page', () => {
      cy.visit('/register');
      cy.get('input[name="email"]').should('exist');
      cy.get('input[name="password"]').should('exist');
    });
  
    it('Should allow a user to register', () => {
      cy.visit('/register');
      cy.get('input[name="email"]').type('newuser@example.com');
      cy.get('input[name="password"]').type('password');
      cy.get('form').submit();
      // Tambahkan assertion sesuai dengan behavior setelah registrasi berhasil atau gagal
    });
  });
  