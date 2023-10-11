class ProyectoUno_Po{
  

    visitHome(){
        let tiempo=1000  
        //Cypress.config("defaultCommandTimeout",15000)      
        before(()=>{    
          cy.visit('https://demoqa.com/automation-practice-form'),
         cy.title().should('eq','DEMOQA')
          cy.wait(tiempo)
        })
    }
/*
    SeccionUno(name,last_name,email,t){
        let tiempo=t
        cy.xpath("//input[contains(@name,'first_name')]").clear().should('be.visible').type(name)
        cy.wait(tiempo)
        cy.screenshot("Campo nombre")
        cy.xpath("//input[contains(@name,'last_name')]").clear().should('be.visible').type(last_name)
        cy.wait(tiempo)
        cy.screenshot("Campo Last_name")
        cy.xpath("//input[contains(@name,'email')]").clear().should('be.visible').type(email)
        cy.wait(tiempo)
    }

    SeccionDos(tel,dir1,ciudad,estado,t){
        let tiempo=t
        cy.xpath("//input[contains(@name,'phone')]").clear().should('be.visible').type(tel)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'address')]").clear().should('be.visible').type(dir1)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'city')]").clear().should('be.visible').type(ciudad)
        cy.wait(tiempo)
        cy.xpath("//select[contains(@name,'state')]").select(estado, { force: true })
        cy.wait(tiempo)
    }

    SeccionTres(cp,web,proyecto,t){
        let tiempo=t
        cy.xpath("//input[contains(@name,'zip')]").clear().should('be.visible').type(cp)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@name,'website')]").clear().should('be.visible').type(web)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@value,'yes')]").check().should('be.checked')
        cy.wait(tiempo)
        cy.xpath("//textarea[contains(@class,'form-control')]").clear().should('be.visible').type(proyecto)
        cy.wait(tiempo)
        cy.xpath("//button[@type='submit'][contains(.,'Send')]").should('be.visible').click({force: true})
        cy.wait(tiempo) 
    }
*/
// Metodos creados por mi 

Seccion1(first_name,last_name,email,t){
    let tiempo=t
    cy.get("#firstName").clear().should('be.visible').type(first_name)
    cy.wait(tiempo)
    cy.screenshot("Primera captura")
    cy.get("#lastName").clear().should('be.visible').type(last_name)
    cy.wait(tiempo)
    cy.get("#userEmail").clear().should('be.visible').type(email)
    cy.wait(tiempo)
}

Seccion2(gender,mobile,date_of_birth,subject,t){
    let tiempo=t
    cy.xpath("//input[contains(@value,'"+gender+"')]").check({force: true}).should('be.checked')
    cy.wait(tiempo)
    cy.get("#userNumber").clear().should('be.visible').type(mobile)
    cy.wait(tiempo)
   /* cy.get("#dateOfBirthInput").clear().should('be.visible').type(date_of_birth)
    cy.wait(tiempo)
    cy.get(".react-datepicker__month-container").type("{esc}")
    cy.wait(tiempo) */
    cy.get("#subjectsInput").click().type(subject).type("{enter}");
    cy.wait(tiempo)
    cy.get("#hobbies-checkbox-1").click({ force: true })
    cy.wait(tiempo)
}

Seccion3(current_address,state,city,t){
    let tiempo=t
    const ruta='img1.jpg'
    cy.get('[type="file"]').attachFile(ruta)
    cy.wait(tiempo)
    cy.get("#currentAddress").clear().should('be.visible').type(current_address)
    cy.wait(tiempo)
    cy.get("#react-select-3-input").click({ force: true }).type(state).type("{enter}");
    cy.wait(tiempo)
    cy.get("#react-select-4-input").click({ force: true }).type(city).type("{enter}");
    cy.wait(tiempo)

}


}//final

export default ProyectoUno_Po;