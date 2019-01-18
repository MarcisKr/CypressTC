describe('Enhanced search', () => {

    const page = "https://next.truecaller.com";
    const checked = "M6 19h12a1 1 0 0 0 1-1V8.414l2.707-2.707-1.414-1.414L12 12.586l-2.293-2.293-1.414 1.414L12 15.414l5-5V17H7V7h7.172l2-2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1z";
    const unchecked = "M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm11 12H7V7h10v10z";

    beforeEach(function () {
        cy
            .visit(page)
    })

    it('Switch enhanced search on and off', () =>{
    
        cy
            .get('.User__Avatar > svg')
            .click()
        cy
            .get('[href="/auth/sign-in"]')
            .click()
        cy//unchecking
            .get('.EnhancedSearchToggle__Toggle > svg')
            .click()
        cy
            .get('.EnhancedSearchToggle__Toggle > svg > path')
            .should('have.attr', 'd', unchecked)
        cy//checked
            .get('.EnhancedSearchToggle__Toggle > svg')
            .click()
        cy
            .get('.EnhancedSearchToggle__Toggle > svg > path')
            .should('have.attr', 'd', checked)
    })

    it('Enhanced search info opening and closing', () => {
        cy
            .get('.User__Avatar > svg')
            .click()
        cy
            .get('[href="/auth/sign-in"]')
            .click()
        cy
            .get('.EnhancedSearchToggle__Info > svg')
            .click()
        cy
            .get('.EnhancedSearchToggle__InfoContainer')
            .should('have.class', 'EnhancedSearchToggle__InfoContainer--Expanded')
        cy
            .get('.EnhancedSearchToggle__Info > svg')
            .click()
        cy
            .get('.EnhancedSearchToggle__InfoContainer')
            .should('not.have.class', 'EnhancedSearchToggle__InfoContainer--Expanded')
    })

    it('Checking "Terms of service" hyperlink', () => {
        cy
            .get('.User__Avatar > svg')
            .click()
        cy
            .get('[href="/auth/sign-in"]')
            .click()
        cy
            .get('[href="https://www.truecaller.com/terms-of-service"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.truecaller.com/terms-of-service')
            .and('have.attr', 'target', '_blank')
    })

    it('Checking "Privacy pilicy" hyperlinks', () => {
        cy
            .get('.User__Avatar > svg')
            .click()
        cy
            .get('[href="/auth/sign-in"]')
            .click()
        cy
            .get('[href="https://www.truecaller.com/privacy-policy"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.truecaller.com/privacy-policy')
            .and('have.attr', 'target', '_blank')
        cy
            .get('.SignInPrivacy > :nth-child(3) > a')
            .should('be.visible')
            .and('have.attr', 'href', '/privacy-policy#row')
            .and('have.attr', 'target', '_blank')
    })
})