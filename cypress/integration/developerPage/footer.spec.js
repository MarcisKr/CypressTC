const page = "https://developer.truecaller.com";

beforeEach(function () {
    cy
        .visit(page)
})

/*describe('Developers section', () => {

    it('Open for mobile apps link', () => {
        cy
            .get('.text-grey > [href="/for-mobile-apps"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/for-mobile-apps')
    })

    it('Open for web apps link', () => {
        cy
            .get('.text-grey > [href="/for-web-apps"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/for-web-apps')
    })

    it('Open developer success link', () => {
        cy
            .get('.text-grey > [href="/success-stories"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/success-stories')
    })

    it('Open get started link', () => {
        cy
            .get('.text-grey > [href="/sign-up"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/sign-up')
    })

    it('Open FAQ link', () => {
        cy
            .get('.text-grey > [href="/faq"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/faq')
    })

    it('Open contact link', () => {
        cy
            .get('.text-grey > [href="/contact"]')
            .click({force: true})
        cy
            .url()
            .should('eq', 'https://developer.truecaller.com/contact')
    })
})*/

describe('Documentation section', () => {
    it('Android SDK link', () => {
        cy
            .get('[href="https://github.com/truecaller/android-sdk"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://github.com/truecaller/android-sdk')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('iOS SDK link', () => {
        cy
            .get('[href="https://github.com/truecaller/ios-sdk"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://github.com/truecaller/ios-sdk')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('Web login link', () => {
        cy
            .get('[href="https://github.com/truecaller/web-login"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://github.com/truecaller/web-login')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })

    it('React native apps link', () => {
        cy
            .get('[href="https://github.com/truecaller/react-native-sdk"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://github.com/truecaller/react-native-sdk')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noopener')
    })
})

describe('SDK section', () => {
    it('Android SDK link', () => {
        cy
            .get('[href="https://developer.truecaller.com/truecallersdk-android-v07.zip"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://developer.truecaller.com/truecallersdk-android-v07.zip')
            .and('have.attr', 'target', '_blank')
    })

    it('iOS SDK link', () => {
        cy
            .get('[href="https://github.com/truecaller/ios-sdk/releases"]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://github.com/truecaller/ios-sdk/releases')
            .and('have.attr', 'target', '_blank')
    })
})