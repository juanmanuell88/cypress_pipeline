/// <reference types="Cypress" />

describe("Introducción a los assert  ", () =>{

    it("Demo de los Asserts ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form") 
       cy.title().should('eq','DEMOQA')
        cy.wait(1000)

        cy.get("#firstName").should("be.visible").c
        cy.wait(1000)
        cy.get("#lastName").should("be.visible").type("Perez")
        cy.wait(1000)
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("juan@gmail.com")
    })


    it.only("Click", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)
        cy.get("[name='username']").should("be.visible").type("Admin")
        cy.wait(1000)
        cy.get("[name='password']").should("be.visible").type("admin123")
        cy.wait(1000)
        cy.get("[type='submit']").should("be.visible").click()
        cy.wait(1000)
        cy.get("[href='/web/index.php/admin/viewAdminModule']").should("be.visible").click()
        cy.wait(1000)
        cy.get("[href='/web/index.php/time/viewTimeModule']").should("be.visible").click()
        

    });



})//Cierre de describe