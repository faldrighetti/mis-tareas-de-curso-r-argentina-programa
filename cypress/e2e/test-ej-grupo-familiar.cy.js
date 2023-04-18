const URL = "http://192.168.0.23:8080/tareas-clase-6-7/ej-grupo-familiar/index-grupo-familiar.html";

describe('Grupo familiar', () => {
  it('passes', () => {
    cy.visit(URL);
  });
});