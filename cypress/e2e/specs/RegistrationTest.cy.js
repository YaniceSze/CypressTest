
describe ("registration scenario", function(){
    // Describe scenario for login test
    // Before writing the test, need to visit the page first (pre-requisite of test)
    beforeEach(()=>{
        cy.visit("https://thinking-tester-contact-list.herokuapp.com/")
        cy.get('#signup').click()
    })

    it(" Provode wrong registartion details", ()=> {
        // cy.get("[data-test=username]").type("yyoyo")
        cy.get('#firstName').type("yyy")
        cy.get('#lastName').type("sss")
        cy.get('#email').type("yoyo")
        cy.get('#password').type("hvgvj")
        cy.get('#submit').click()
        cy.get('#error').should('contain.text', 'User validation failed: email: Email is invalid, password: Path `password` (`hvgvj`) is shorter than the minimum allowed length (7).')
    })

    it.only(" Provode correct registartion details", ()=> {
        // cy.get("[data-test=username]").type("yyoyo")
        cy.get('#firstName').type("yyy")
        cy.get('#lastName').type("sss")
        cy.get('#email').type("yyoyo@gmail.com")
        cy.get('#password').type("hvgvj@4.u")
        cy.get('#submit').click()
        cy.get('h1').should('contain','Contact List')
    })

    
})