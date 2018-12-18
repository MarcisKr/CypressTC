describe('Login tests', () => {
    const page = "https://next.truecaller.com";

    beforeEach(function () {
        cy
            .visit(page)
    })
    it('Switch enhanced search on and off', () =>{
        const checked = "M6 19h12a1 1 0 0 0 1-1V8.414l2.707-2.707-1.414-1.414L12 12.586l-2.293-2.293-1.414 1.414L12 15.414l5-5V17H7V7h7.172l2-2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z";
        const unchecked = "M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm11 12H7V7h10v10z";
    
        cy
            .get('.User__Avatar > svg')
            .click()

        cy
            .get('[href="/auth/sign-in"]')
            .click()
        cy//checking
            .get('.EnhancedSearchToggle__Toggle > svg')
            .click()
        cy
            .get('.EnhancedSearchToggle__Toggle > svg > path')
            .should('have.attr', 'd', checked)
        cy//unchecked
            .get('.EnhancedSearchToggle__Toggle > svg')
            .click()
        cy
            .get('.EnhancedSearchToggle__Toggle > svg > path')
            .should('have.attr', 'd', unchecked)
    })
})