import header from './header';
//import footer

class homePage{
    constructor(){
        this.header = new header();
    }
    //elements
    getButtonDownloadNow(){
        return cy.get('.home-download-button');
    }

    getButtonKnowMore(){
        return cy.get('.btn--black');
    }

    getPickerLoginCountry(){
        return cy.get('#country');
    }

    getCheckboxEnhanced(){
        return cy.get('.sign-in-dialog-es > div');
    }

    getButtonEnhancedInfo(){
        return cy.get('[src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pbmZvLW91dGxpbmU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTYuMDAwMDAwLCAtNTcuMDAwMDAwKSIgZmlsbD0iI0IwQkVDNSI+CiAgICAgICAgICAgIDxnIGlkPSJpbmZvLW91dGxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5Ni4wMDAwMDAsIDU3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTksMTUgTDExLDE1IEwxMSw5IEw5LDkgTDksMTUgTDksMTUgWiBNMTAsMCBDNC41LDAgMCw0LjUgMCwxMCBDMCwxNS41IDQuNSwyMCAxMCwyMCBDMTUuNSwyMCAyMCwxNS41IDIwLDEwIEMyMCw0LjUgMTUuNSwwIDEwLDAgTDEwLDAgWiBNMTAsMTggQzUuNiwxOCAyLDE0LjQgMiwxMCBDMiw1LjYgNS42LDIgMTAsMiBDMTQuNCwyIDE4LDUuNiAxOCwxMCBDMTgsMTQuNCAxNC40LDE4IDEwLDE4IEwxMCwxOCBaIE05LDcgTDExLDcgTDExLDUgTDksNSBMOSw3IEw5LDcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="]');
    }

    getButtonCookieClose(){
        return cy.get('.cookie-banner-close');
    }

    getPickerSearchCountry(){
        return cy.get('select');
    }

    getFieldSearch(){
        return cy.get('.searchbar__query');
    }

    getButtonSearchSubmit(){
        return cy.get('.searchbar__submit')
    }

    getDivCaptcha(){
        return cy.get('.ProfileRecaptcha > :nth-child(1)', {timeout: 10000, frequency: 100});
    }
    //methods
    visit(){
        cy.visit("https://www.truecaller.com/");
    }

    reload(){
        cy.reload();
    }

    setUserGoogle(){
        //user - cypresstruecaller@gmail.com
        const user = '{"user":{"redirect":"/","accessToken":"a1w1J------wudVhMGZD9T-f_e5xmeLwW8RgtTZY2Z5CNb6udBSb8wjaF4m8c836","enhancedSearch":true,"email":"cypresstruecaller@gmail.com","name":"Cypress Automation","image":"https://lh5.googleusercontent.com/-3H-92sybLgA/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-ii93ed_hnvQDAnroGmOQo0gJFjog/mo/photo.jpg?sz=50","country":"lv","ipCountry":"lv","ipCountryDetected":true,"searchCountry":"lv","unlistCountry":"lv","searchQuery":"","searchHistory":[],"device":{"isMobile":false,"isIOS":false,"isAndroidOS":false}},"showCookieBanner":true}';
        cy.window().then(win => {
            localStorage.truecallerStore = user;
        })
    }

    navigateToMainPage(){
        const link = this.header.getButtonHome();
        link.click({force: true});
        cy.url().should('eq', "https://www.truecaller.com/");
    }

    navigateToDownloadPage(){
        const button = this.header.getButtonGetapp();
        button.click({force: true});
        cy.url().should('eq', "https://www.truecaller.com/download");
    }

    openSigninPopup(){
        const button = this.header.getButtonSignin();
        button.click({force: true});
    }

    selectLoginCountry(country){
        const countryPicker = this.getPickerLoginCountry();
        countryPicker.select(country);
    }

    checkEnhancedSearch(){
        const checkbox = this.getCheckboxEnhanced();
        checkbox.click();
    }

    openEnhancedInfo(){
        const button = this.getButtonEnhancedInfo();
        button.click();
    }

    closeCookieBanner(){
        const button = this.getButtonCookieClose();
        button.click({force: true});
    }

    openUserMenu(){
        const button = this.header.getButtonAvatar();
        button.click({force: true});
    }
    
    clickSignout(){
        const button = this.header.getButtonSignout();
        button.click({force: true});
    }

    selectSearchCountry(country){
        const countryPicker = this.getPickerSearchCountry();
        countryPicker.select(country);
    }

    enterNumberInSearchbar(number){
        const searchField = this.getFieldSearch();
        searchField.type(number, { delay: 100 });
    }

    submitSearchNumber(){
        const button = this.getButtonSearchSubmit();
        button.click({force: true});
    }
    //validation
    validateURL(url){
        cy.url().should('eq', url);
    }

    validateButtonDownload(){
        const linkVisited = 'https://play.google.com/store/apps/details?id=com.truecaller&referrer=utm_source%3Dtcweb&rdid=com.truecaller';
        const button = this.getButtonDownloadNow();
        button.should('be.visible')
        .and('have.attr', 'href', linkVisited)
        .and('have.attr', 'target', '_blank');
        button.contains('Download now');
    }

    validateButtonKnowmore(){
        const linkVisited = 'https://www.youtube.com/watch?v=r12OvTFymmc';
        const button = this.getButtonKnowMore();
        button.should('be.visible')
        .and('have.attr', 'href', linkVisited)
        .and('have.attr', 'target', '_blank');
        button.contains('Know more');
    }

    validateCheckEnhanced(checked){
        //validates login enhanced search being checked
        var pic = '';
        if(checked){
            pic = '[src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMTggMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jaGVjay1ib3g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4wMDAwMDAsIC0xMDQuMDAwMDAwKSIgZmlsbD0iIzAwODZGRSI+CiAgICAgICAgICAgIDxnIGlkPSJjaGVjay1ib3giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyLjAwMDAwMCwgMTA0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LDAuNSBMMiwwLjUgQzAuOSwwLjUgMCwxLjQgMCwyLjUgTDAsMTYuNSBDMCwxNy42IDAuOSwxOC41IDIsMTguNSBMMTYsMTguNSBDMTcuMSwxOC41IDE4LDE3LjYgMTgsMTYuNSBMMTgsMi41IEMxOCwxLjQgMTcuMSwwLjUgMTYsMC41IEwxNiwwLjUgWiBNNywxNC41IEwyLDkuNSBMMy40LDguMSBMNywxMS43IEwxNC42LDQuMSBMMTYsNS41IEw3LDE0LjUgTDcsMTQuNSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"]';
        }
        else if(!checked){
            pic = '[src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jaGVjay1ib3ggb3V0bGluZWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXJ0Ym9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MC4wMDAwMDAsIC01Mi4wMDAwMDApIiBzdHJva2U9IiNCMEJFQzUiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDcsNTMgTDkzLDUzIEM5MS45LDUzIDkxLDUzLjkgOTEsNTUgTDkxLDY5IEM5MSw3MC4xIDkxLjksNzEgOTMsNzEgTDEwNyw3MSBDMTA4LjEsNzEgMTA5LDcwLjEgMTA5LDY5IEwxMDksNTUgQzEwOSw1My45IDEwOC4xLDUzIDEwNyw1MyBMMTA3LDUzIFoiIGlkPSJjaGVjay1ib3gtb3V0bGluZWQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="]';
        }
        function checkmark(){return cy.get(pic)};
        const check = checkmark();
        check.should('be.visible');
        cy.log("Enhanced search visible and checked");
    }

    validateTextEnhancedInfo(){
        cy.contains('By enabling Enhanced Search, your contacts are securely shared with Truecaller. This improves accuracy of your search results and helps improve the experience for millions of users around the world.').should('be.visible');
    }

    validateButtonUserAvatar(){
        const button = this.header.getButtonAvatar();
        button.should('be.visible').log("**User has been logged IN.**");
    }

    validateButtonSignin(){
        const button = this.header.getButtonSignin();
        button.should('be.visible').log("**User has been logged OUT.");
    }

    validateCaptcha(){
        const div = this.getDivCaptcha();
        div.should('be.visible');
    }
}  

export default homePage;