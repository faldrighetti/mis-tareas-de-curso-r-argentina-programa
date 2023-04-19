/// <reference types ="Cypress" />

const URL = "http://192.168.0.23:8080/tareas-clase-6-7/ej-grupo-familiar/index-grupo-familiar.html";

describe('Grupo familiar', () => {
  before(() => {
    cy.visit(URL);
  });

  it('Testea el funcionamiento del programa', () => {
    let inputCantidad = cy.get('#cantidad-integrantes');
    inputCantidad.type('3');
    let botonProcesar = cy.get('#procesar');
    botonProcesar.click();
    cy.get('.edades-integrantes').eq(0).type('20');
    cy.get('.edades-integrantes').eq(1).type('30');
    cy.get('.edades-integrantes').eq(2).type('40');

    cy.get('#boton-calcular').click();
    cy.get('#edad-mayor').should('have.text', '40')/*.and('be.greaterThan', '0')*/;
    cy.get('#edad-menor').should('have.text', '20')/*.and('be.lessThan', '110')*/;
    cy.get('#edad-promedio').should('have.text', '30.00');

    /*let integrantes = cy.find('.edades-integrantes');
    let validezEdades = testearEdadesIntegrantes(integrantes);
    expect(validezEdades).to.equal(true);*/
  });
  
});


function testearEdadesIntegrantes(edades){
  let validez = true;
  for(let i = 0; i < edades.length; i++){
    if(edades[i] > 110 || edades[i] <= 0){
      validez = false;
    }
  }
  return validez;
}
//Validar integrantes (entre 1 y 10) y edades (no vacío, entre 1 y 110, solo números)
