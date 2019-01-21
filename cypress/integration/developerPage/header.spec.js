const page = "https://developer.truecaller.com";

beforeEach(function () {
    cy
        .visit(page)
})

describe('SDK section', () => {
    it('Open section', () => {
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

    it('Get started body button is working', () => {
        cy
            .get('.menu > [href="/for-mobile-apps"]')
            .click()
        cy
            .get('.bg-darkest-blue.mb-8 > .py-8 > .btn-blue')
            .click()
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/sign-up')
    })
        
    it('Get started footer button is working', () => {
        cy
            .get('.menu > [href="/for-mobile-apps"]')
            .click()
        cy
            .get('section.py-8.px-4 > .btn-blue')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/sign-up')
    })
})

describe('Developer success section', () => {

    it('Open section', () => {
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

    it('Read more button brings user to testimonials', () => {
        cy
            .get('.menu > [href="/success-stories"]')
            .click()
        cy
            .get('.w-full > .btn-blue')
            .should('have.attr', 'href', '#testimonials')
            .click({force: true})
    })

    it('Get started footer button is working', () => {
        cy
            .get('.menu > [href="/success-stories"]')
            .click()
        cy
            .get('section.px-4 > .btn-blue')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/sign-up')
    })
})

describe('Open section', () => {
    it('Open Get Started section', () => {
        cy
            .get('.menu > [href="/sign-up"]')
            .click()
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/sign-up')
    })
})

describe('Open section', () => {
    it('Open Login section', () => {
        cy
            .get('.menu > [href="/login"]')
            .click()
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/login')
    })
})