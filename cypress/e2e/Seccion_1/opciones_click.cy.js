/// <reference types="Cypress" />

describe("Opciones de Click  ", () =>{

    it("Click Sencillo ", () =>{

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
    })

    it("Click Force true ", () =>{
 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.get("[name='username']").should("be.visible").type("Admin")
        cy.get("[name='password']").should("be.visible").type("admin123")
        cy.wait(1000)
        cy.get("[type='submit']").should("be.visible").click()
        cy.wait(1000)
        cy.get("[href='/web/index.php/time/viewTimeModule']").should("be.visible").click({force: true})
    })


    it.only("Click por coordenadas (x,y) ", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
        cy.title().should('eq','OrangeHRM')
        cy.get("[name='username']").should("be.visible").type("Admin")
        cy.get("[name='password']").should("be.visible").type("admin123")
        cy.wait(1000)

        cy.get("[type='submit']").should("be.visible").click()
        cy.wait(1500)
        cy.get("[alt='client brand banner']").should("be.visible").click(10,10)        
    })


})//Cierre de describe