const page = "https://developer.truecaller.com";

beforeEach(function () {
    cy
        .visit(page)
})

describe('Sign up form', () => {
    it('Form fields validation', () => {
        cy
            .get('.menu > [href="/sign-up"]')
            .click()
        cy
            .get('.text-3xl')
            .should('be.visible')
            .and('have.text', 'Sign up')
        cy
            .get('#email')
            .should('be.visible')
        cy
            .get('#password')
            .should('be.visible')
        cy
            .get('#passwordConfirm')
            .should('be.visible')
        cy
            .get('#name')
            .should('be.visible')
        cy
            .get('#companyName')
            .should('be.visible')
        cy
            .get('#country')
            .should('be.visible')
        cy
            .get('#accept')
            .should('be.visible')
        cy
            .get('.submit')
            .should('be.visible')
            .and('be.disabled')
            .and('have.text', 'Register')
    })
})

describe('Login form', () => {
    it('Form fields validation', () => {
        cy
            .get('.menu > [href="/login"]')
            .click()
        cy
            .get('.text-3xl')
            .should('be.visible')
            .and('have.text', 'Login')
        cy
            .get('#username')
            .should('be.visible')
        cy
            .get('#password')
            .should('be.visible')
        cy
            .get('.submit')
            .should('be.visible')
            .and('be.disabled')
            .and('have.text', 'Login')
    })

    it('Open password reset link', () => {
        cy
            .visit(page + '/login')
        cy
            .get('.flex > .link')
            .click()
        cy
            .url()
            .should('eq', page + '/forgot-password')
    })
})

describe('Passwor reset form', () => {
    it('Form field validation', () => {
        cy
            .visit(page + '/forgot-password')
        cy
            .get('#username')
            .should('be.visible')
        cy
            .get('.submit')
            .should('be.visible')
            .and('be.disabled')
            .and('have.text', 'Reset password')
    })
})