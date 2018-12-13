describe('Fixing current test..', () => {

    beforeEach(function () {
        cy
            .visit('/')
    })

    it('log in after searching for a number(captcha blocked)', () => {
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
            .get('.sign-in-dialog-cancel')
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
        cy
            .get('.ProfileHeader > .ProfileSignIn')
            .should('be.visible')
        cy
            .window()
            .then(win => {
                localStorage.truecallerStore = '{"user":{"redirect":"/","accessToken":"a1w1I------wudVhAbkywXt9H0ncTcX9zvab0Pc6HmIbk2_kNbNDAIxx24iexrnC","enhancedSearch":true,"email":"cypresstruecaller@gmail.com","name":"Cypress Automation","image":"https://lh5.googleusercontent.com/-3H-92sybLgA/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbCkgd5OXmdQBercdCthWDeE-nVi9g/mo/photo.jpg?sz=50","country":"lv","ipCountry":"lv","ipCountryDetected":true,"searchCountry":"lv","unlistCountry":"lv","searchQuery":"","searchHistory":[],"device":{"isMobile":false,"isIOS":false,"isAndroidOS":false}},"showCookieBanner":true}'
            })
        cy
            .reload()
        cy
            .get('.TopNav__UserAvatar')
            .should('be.visible')
        cy
            .get('.ProfileRecaptcha > :nth-child(1)', {timeout: 10000, frequency: 100})
            .should('be.visible')
        cy
            .get('.ProfileRecaptcha > :nth-child(2)')
            .should('be.visible')
    })
})