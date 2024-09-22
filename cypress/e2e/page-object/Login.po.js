class Login {
    email = () => cy.get('#email')
    
    password = () => cy.get('#password')

    submit = () => cy.get('#submit')
}
export default Login