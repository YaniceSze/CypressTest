import ContactList from "../page-object/ContactList.po"

describe("Add Contact Scenario", function(){
    // Describe scenario for add contact test
    // Before writing the test, need to visit the page first (pre-requisite of test)
    const contactList = new ContactList()

    beforeEach(()=>{
        cy.login()
    })

    // Failed cases
    it("Fill in empty first name & last name",() => {
        contactList.addContactButton().click()
        cy.fixture('../../cypress/fixtures/data.json').then(data => {
            cy.get('#birthdate').type(data.wrongData.birthdate)
            cy.get('[for="email"]').type(data.wrongData.email)
            cy.get('[for="phone"]').type("800551234")
            cy.get(':nth-child(4) > label').type("5 Kenneth Avenue")
            cy.get(':nth-child(5) > label').type("Unit 504")
            cy.get('[for="city"]').type("Toronto")
            cy.get('[for="stateProvince"]').type("Ontario")
            cy.get('[for="postalCode"]').type("M2N 6M7")
            cy.get('[for="country"]').type("Canada")
        })
        cy.get('#submit').click()
        cy.get('#error').should("contain","Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.")
    })

    it("Fill in incorrect format of birthdate",() => {
        cy.get('#add-contact').click()
        cy.get('[for="firstName"]').type("Jonathan")
        cy.get('[for="lastName"]').type("Sit")
        cy.get(':nth-child(2) > label').type("1990-JUN-01")
        cy.get('[for="email"]').type("abc@gmail.com")
        cy.get('[for="phone"]').type("800551234")
        cy.get(':nth-child(4) > label').type("5 Kenneth Avenue")
        cy.get(':nth-child(5) > label').type("Unit 504")
        cy.get('[for="city"]').type("Toronto")
        cy.get('[for="stateProvince"]').type("Ontario")
        cy.get('[for="postalCode"]').type("M2N 6M7")
        cy.get('[for="country"]').type("Canada")
        cy.get('#submit').click()
        cy.get('#error').should("contain","Contact validation failed: birthdate: Birthdate is invalid")
    })
  
    it("Fill in incorrect format of phone number",() => {
        cy.get('#add-contact').click()
        cy.get('[for="firstName"]').type("Jonna")
        cy.get('[for="lastName"]').type("Mehi")
        cy.get(':nth-child(2) > label').type("1990-07-03")
        cy.get('[for="email"]').type("abc@gmail.com")
        cy.get('[for="phone"]').type("80034")
        cy.get(':nth-child(4) > label').type("5 Kenneth Avenue")
        cy.get(':nth-child(5) > label').type("Unit 504")
        cy.get('[for="city"]').type("Toronto")
        cy.get('[for="stateProvince"]').type("Ontario")
        cy.get('[for="postalCode"]').type("M2N 6M7")
        cy.get('[for="country"]').type("Canada")
        cy.get('#submit').click()
        cy.get('#error').should("contain","Contact validation failed: phone: Phone number is invalid")
    })

    it("Fill in incorrect format of email",() => {
        cy.get('#add-contact').click()
        cy.get('[for="firstName"]').type("Jonna")
        cy.get('[for="lastName"]').type("Mehi")
        cy.get(':nth-child(2) > label').type("1990-07-03")
        cy.get('[for="email"]').type("abc@gma")
        cy.get('[for="phone"]').type("800551234")
        cy.get(':nth-child(4) > label').type("5 Kenneth Avenue")
        cy.get(':nth-child(5) > label').type("Unit 504")
        cy.get('[for="city"]').type("Toronto")
        cy.get('[for="stateProvince"]').type("Ontario")
        cy.get('[for="postalCode"]').type("M2N 6M7")
        cy.get('[for="country"]').type("Canada")
        cy.get('#submit').click()
        cy.get('#error').should("contain","Contact validation failed: email: Email is invalid")
    })

    // Successful cases
    it("Only fill in first name & last name",()=>{
        cy.get('#add-contact').click()
        cy.get('[for="firstName"]').type("Selina")
        cy.get('[for="lastName"]').type("Adshdo")
        cy.get('#submit').click()
    })

    it.only("Fill in correct add contact details",() => {
        contactList.addContactButton().click()
        cy.fixture('../../cypress/fixtures/data.json').then(data => {
            cy.get('[for="firstName"]').type(data.correctData.firstname)
            cy.get('[for="lastName"]').type(data.correctData.lastname)
            cy.get(':nth-child(2) > label').type(data.correctData.birthdate)
            cy.get('[for="email"]').type(data.correctData.email)
            cy.get('[for="phone"]').type("800552334")
            cy.get(':nth-child(4) > label').type("5 Kenneth Avenue")
            cy.get(':nth-child(5) > label').type("Unit 505")
            cy.get('[for="city"]').type("Toronto")
            cy.get('[for="stateProvince"]').type("Ontario")
            cy.get('[for="postalCode"]').type("M2N 6M7")
            cy.get('[for="country"]').type("Canada")
        })
        cy.get('#submit').click()
    })

    // After test
    /*afterEach(()=> {
        cy.get('#logout').click()
    })
    */

})