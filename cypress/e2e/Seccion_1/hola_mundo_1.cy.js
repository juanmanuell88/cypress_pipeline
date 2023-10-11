describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://testingqarvn.com.es/datos-personales/')
     
    cy.get("#wsf-1-field-21").type("Juan Manuel")
    cy.get("#wsf-1-field-22").type("Ludueña")
    cy.get("#wsf-1-field-23").type("juan@gmail.com")
    cy.get("#wsf-1-field-24").type("78568687")
    cy.get("#wsf-1-field-28").type("check")
    cy.get("#wsf-1-field-27").click()
   
  })
})