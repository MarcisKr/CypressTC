describe('Login test cases', () => {

    beforeEach(function () {
        cy
            .visit('/')
    })

    it('check and uncheck enhanced search', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('.TopNav__Link')
            .click()
        cy
            .get('#country')
            .select('Afghanistan')
        cy
            .get('[src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMTggMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jaGVjay1ib3g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4wMDAwMDAsIC0xMDQuMDAwMDAwKSIgZmlsbD0iIzAwODZGRSI+CiAgICAgICAgICAgIDxnIGlkPSJjaGVjay1ib3giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyLjAwMDAwMCwgMTA0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LDAuNSBMMiwwLjUgQzAuOSwwLjUgMCwxLjQgMCwyLjUgTDAsMTYuNSBDMCwxNy42IDAuOSwxOC41IDIsMTguNSBMMTYsMTguNSBDMTcuMSwxOC41IDE4LDE3LjYgMTgsMTYuNSBMMTgsMi41IEMxOCwxLjQgMTcuMSwwLjUgMTYsMC41IEwxNiwwLjUgWiBNNywxNC41IEwyLDkuNSBMMy40LDguMSBMNywxMS43IEwxNC42LDQuMSBMMTYsNS41IEw3LDE0LjUgTDcsMTQuNSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"]')
            .should('be.visible')
            .log("Enhanced search visible and checked")
        cy
            .get('.sign-in-dialog-es > div')
            .click()
        cy
            .get('[src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jaGVjay1ib3ggb3V0bGluZWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MC4wMDAwMDAsIC01Mi4wMDAwMDApIiBzdHJva2U9IiNCMEJFQzUiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDcsNTMgTDkzLDUzIEM5MS45LDUzIDkxLDUzLjkgOTEsNTUgTDkxLDY5IEM5MSw3MC4xIDkxLjksNzEgOTMsNzEgTDEwNyw3MSBDMTA4LjEsNzEgMTA5LDcwLjEgMTA5LDY5IEwxMDksNTUgQzEwOSw1My45IDEwOC4xLDUzIDEwNyw1MyBMMTA3LDUzIFoiIGlkPSJjaGVjay1ib3gtb3V0bGluZWQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="]')
            .should('be.visible')
            .log("Enhanced search unchecked")
        cy//set back original country
            .get('#country')
            .select('Latvia')
    })

    it('info button show and hide more info about enhanced search', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('.TopNav__Link')
            .click()
        cy
            .get('#country')
            .select('Afghanistan')
        cy
            .get('[src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMTggMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jaGVjay1ib3g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4wMDAwMDAsIC0xMDQuMDAwMDAwKSIgZmlsbD0iIzAwODZGRSI+CiAgICAgICAgICAgIDxnIGlkPSJjaGVjay1ib3giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyLjAwMDAwMCwgMTA0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LDAuNSBMMiwwLjUgQzAuOSwwLjUgMCwxLjQgMCwyLjUgTDAsMTYuNSBDMCwxNy42IDAuOSwxOC41IDIsMTguNSBMMTYsMTguNSBDMTcuMSwxOC41IDE4LDE3LjYgMTgsMTYuNSBMMTgsMi41IEMxOCwxLjQgMTcuMSwwLjUgMTYsMC41IEwxNiwwLjUgWiBNNywxNC41IEwyLDkuNSBMMy40LDguMSBMNywxMS43IEwxNC42LDQuMSBMMTYsNS41IEw3LDE0LjUgTDcsMTQuNSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"]')
            .should('be.visible')
            .log("Enhanced search visible and checked")
        cy
            .get('[src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pbmZvLW91dGxpbmU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTYuMDAwMDAwLCAtNTcuMDAwMDAwKSIgZmlsbD0iI0IwQkVDNSI+CiAgICAgICAgICAgIDxnIGlkPSJpbmZvLW91dGxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5Ni4wMDAwMDAsIDU3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTksMTUgTDExLDE1IEwxMSw5IEw5LDkgTDksMTUgTDksMTUgWiBNMTAsMCBDNC41LDAgMCw0LjUgMCwxMCBDMCwxNS41IDQuNSwyMCAxMCwyMCBDMTUuNSwyMCAyMCwxNS41IDIwLDEwIEMyMCw0LjUgMTUuNSwwIDEwLDAgTDEwLDAgWiBNMTAsMTggQzUuNiwxOCAyLDE0LjQgMiwxMCBDMiw1LjYgNS42LDIgMTAsMiBDMTQuNCwyIDE4LDUuNiAxOCwxMCBDMTgsMTQuNCAxNC40LDE4IDEwLDE4IEwxMCwxOCBaIE05LDcgTDExLDcgTDExLDUgTDksNSBMOSw3IEw5LDcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="]')
            .click()
        cy
            .contains('By enabling Enhanced Search, your contacts are securely shared with Truecaller. This improves accuracy of your search results and helps improve the experience for millions of users around the world.').should('be.visible')
        cy//set back original country
            .get('#country')
            .select('Latvia')
    })

    it('login and logout with google(mocked) account', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
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
            .click({force: true})
            .log("**User has been logged IN.**")   
        cy
            .get('.TopNav__UserMenuSignOut')
            .click({force: true})
        cy
            .get('.TopNav__Link')
            .should('be.visible')
            .log("**User has been logged OUT.**")
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