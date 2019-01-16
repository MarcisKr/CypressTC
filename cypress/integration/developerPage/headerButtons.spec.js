describe('header button tests', () => {
    const page = "https://developer.truecaller.com";
        beforeEach(function () {
            cy
                .visit(page)
        })
    
        it('Open SDK section', () => {
            cy
                .get('.menu > [href="/for-mobile-apps"]')
                .click()
            cy
                .get('.text-3xl')
                .should('be.visible')
                .and('have.text', 'Truecaller SDK formobile apps')
            cy
                .get('.bg-darkest-blue.mb-8 > .py-8 > .btn-blue')
                .should('be.visible')
            cy
                .get('.pl-4 > .text-4xl')
                .should('be.visible')
                .and('have.text', 'How it works')
            cy
                .get('.max-w-xl.text-4xl')
                .should('be.visible')
                .and('have.text', 'Advantages')
        })

        it('Open Success section', () => {
            cy
                .get('.menu > [href="/success-stories"]')
                .click()
            cy
                .get('.text-3xl')
                .should('be.visible')
                .and('have.text', 'Success Stories')
            cy
                .get('.w-full > .btn-blue')
                .should('be.visible')
            cy
                .get('#testimonials')
                .should('be.visible')
                .and('have.text', 'What developers are saying')
        })

        it('Open Get Started section', () => {
            cy
                .get('.menu > [href="/sign-up"]')
                .click()
            cy
                .get('.text-3xl')
                .should('be.visible')
                .and('have.text', 'Sign up')
            cy
                .get('.py-8')
                .should('be.visible')
            cy
                .get('.submit')
                .should('be.visible')
                .and('have.text', 'Register')
        })

        it('Open Login section', () => {
            cy
                .get('.menu > [href="/login"]')
                .click()
            cy
                .get('.text-3xl')
                .should('be.visible')
                .and('have.text', 'Login')
            cy
                .get('.menu > [href="/login"]')
                .should('be.visible')
            cy
                .get('.submit')
                .should('be.visible')
                .and('have.text', 'Login')
        })
    })