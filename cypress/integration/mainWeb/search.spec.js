describe('Search test cases', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })

    it('Number can be removed with "x" from search', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('select')
            .select('se')
        cy
            .get('.searchbar__query')
            .type('735358210', { delay: 100 })
        cy
            .get('.searchbar__clear')
            .click()
        cy
            .get('.searchbar__query')
            .should('not.have.value', '735358210')
    })

    it('Can not commit search if letters are entered', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('select')
            .select('se')
        cy
            .get('.searchbar__query')
            .type('qwerty', { delay: 100 })
        cy
            .get('.searchbar__submit')
            .should('have.attr', 'disabled', 'disabled')
    })

    it('Search number while logged out', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('select')
            .select('se')
        cy
            .get('.searchbar__query')
            .type('735358210', { delay: 100 })
        cy
            .get('.searchbar__submit')
            .click()
        cy
            .get('.ProfileHeader > h3')
            .should('have.text', 'You need to sign in to view this result')
        cy
            .get('.ProfileHeader > .ProfileSignIn')
            .should('be.visible')
        cy
            .url()
            .should('eq', 'https://www.truecaller.com/search/se/735358210')
    })

    it('Search number while logged in(captcha blocked)', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('.TopNav__Link')
            .click()
        cy
            .window()
            .then(win => {
                localStorage.tcstorage = '{"user":{"redirect":null,"enhancedSearch":true,"enhancedSearchTime":1521117641579,"accessToken":"gVB81DQTVTzXZG6dQ9ck1FjYt3yCMK3e"},"search":{"history":[],"country":{"CID":"India-Other","CN":"India","CCN":"in","CC":"91"}},"showCookieBanner":false}'
            })
        cy
            .get('.sign-in-dialog-content > :nth-child(2)')
            .click()
            .should('not.exist')
            .log("User has logged in")
        cy
            .get('.searchbar__query')
            .type('735358210', { delay: 100 })
        cy
            .get('.searchbar__submit')
            .click()
        cy
            .get('.ProfileRecaptcha > :nth-child(1)')
            .should('be.visible')
        cy
            .get('.ProfileRecaptcha > :nth-child(2)')
            .should('be.visible')
    })

    // it('All actions with found contact', () => {
    //     cy
    //         .get('select')
    //         .select('se')
    //     cy
    //         .get('.searchbar__query')
    //         .type('735358210', { delay: 100 })
    //     cy
    //         .get('.searchbar__submit')
    //         .click()
    //     cy
    //         .get('.ProfileActions')
    //         .should('be.visible')
    //     cy
    //         .get('.ProfileName > div')
    //         .should('be.visible')
    //     // cy
    //     //     .get('[href="tel://+46735358210"]')
    //     //     .click()
    //     // window open logic needed
    // })
})