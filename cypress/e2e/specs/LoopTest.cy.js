describe("Loop Test",()=> {

    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/tables")
    })

    // is better not use n-th child thing
    it("Print the last name",()=>{
        // eq: choosing the number in the list/array
        // log: print
        // invoke('text'): check all the text value inside
        cy.get('table').eq(0).find('tr').each(($row,index) => {
            if(index > 0){
                cy.wrap($row).find('td').eq(0).invoke('text').then((lastname)=>{
                    // cy.log(lastname)
                    // trim(): get the text
                    if(lastname.trim() === "Doe"){
                        cy.wrap($row).find('[href="#delete"]').click()
                    }
                })
            }
        })
    })

})