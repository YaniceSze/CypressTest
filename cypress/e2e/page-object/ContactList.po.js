// Create contact list page object (same like class) for clean code purpose
class ContactList {
    addContactButton = () => cy.get('#add-contact')
    
    birthdate = () => cy.get('#birthdate')
}
export default ContactList
