/// <reference types="Cypress" />

require('cypress-xpath')

describe("Tipos de Selectores  ", () =>{

    it("Selector por id ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userName").should("be.visible", {timeout:5000}).type("Carlos")
        cy.get("#userEmail").should("be.visible").type("demo@gmail.com")
    })


    it("Selector por Atributo ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

       cy.get("[placeholder='Full Name']").should("be.visible").type("Juan Perez Chavez")
    })


    it("Selector por Xpath ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Juan Perez")
        cy.wait(1000)
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should("be.visible").type("demoarvb@gmail.com")
        cy.wait(1000)
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("Demo de la dirección")
    })


    it("Selector por contains ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

       cy.get(".custom-control-label").contains("Female").click()
       cy.wait(1000)
       cy.get(".custom-control-label").contains("Other").click()
    })


    it("Selector por copy_selector ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

        cy.get("#userNumber").should("be.visible").type("465654654")

      
    })

    it.only("Selector por within ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA') 
        cy.wait(1000)

/*      Pareciera mal planteado el ejercicio y la funcionalidad de within .. la parte no comentada
        tiene otro ejemplo

        cy.get("#userForm").within(()=>{
            cy.get("#firstName").should("have.attr", "placeholder", "First Name")
        }).then(
            cy.get("#firstName").should("have.attr", "placeholder", "First Name").type("Juan")
        )
 */     
        cy.get('#userForm').within(($form) => {
            // tiene acceso al formulario encontrado a través de
            // el formulario $ del objeto jQuery si lo necesita
            
            // cy.get () solo buscará elementos dentro del formulario,
            // no dentro de todo el documento
            cy.get("#firstName").should("have.attr", "placeholder", "First Name").type("Juan")
            cy.root().submit()
          })


    })


})//Cierre de describe