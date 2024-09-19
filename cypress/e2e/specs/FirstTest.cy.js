
describe ("login scenario", function(){
    // Describe scenario for login test
    // Before writing the test, need to visit the page first (pre-requisite of test)
    beforeEach(()=>{
        cy.visit("https://thinking-tester-contact-list.herokuapp.com/")
    })

    it("Fill in wrong login details", ()=> {
        // cy.get("[data-test=username]").type("yyoyo")
        cy.get('#email').type("yoyo")
        cy.get('#password').type("hvgvj")
        cy.get('#submit').click()
        cy.get('#error').should('contain.text', 'Incorrect username or password')
    })

    // it.only --> only run this test
    it("Fill in empty username and password", ()=> {
        cy.get('#submit').click()
        cy.get('#error').should('contain.text', 'Incorrect username or password')
    })

    it.only("Fill in correct login details", ()=> {
        // cy.get("[data-test=username]").type("yyoyo")
        cy.get('#email').type("yyoyo@gmail.com")
        cy.get('#password').type("hvgvj@4.u")
        cy.get('#submit').click()
        cy.get('h1').should('contain','Contact List')
    })

    // After test
    afterEach(()=> {
        cy.get('#logout').click()
    })
})