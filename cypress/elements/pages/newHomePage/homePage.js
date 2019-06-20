import footer from './footer';
import sideMenu from './sideMenu';

class homePage{
    constructor(){
        this.footer = new footer();
        this.sideMenu = new sideMenu();
    }
//===================================  ELEMENTS  ======================================
    buttonDownload(){
        return cy.get(':nth-child(3) > .btn');
    }

    buttonAllFeatures(){
        return cy.get('.text-white > .btn');
    }

    buttonFeaturesDownload(){
        return cy.get('.btn');
    }

    buttonCallerID(){
        return cy.get('[aria-label="Go to caller id feature"] > svg');
    }

    buttonSpamProtection(){
        return cy.get('[aria-label="Go to spam protection feature"] > svg');
    }

    buttonDialer(){
        return cy.get('[aria-label="Go to dialer feature"] > svg');
    }

    buttonMessaging(){
        return cy.get('[aria-label="Go to messaging feature"] > svg');
    }

    buttonPay(){
        return cy.get('[aria-label="Go to pay feature"] > svg');
    }

    fieldSearch(){
        return cy.get('.bg-searchBackgroundColor > .p-4');
    }

    buttonSearch(){
        return cy.get('.w-12');
    }
//===================================  METHODS  =======================================
    visitURL(url = "https://www.truecaller.com"){
        cy.visit(url);
    }

    clickElement(element){
        element.click({force: true});
    }

    reload(){
        cy.reload();
    }

    setupGoogleUser(){
        cy.window().then(win => {
            localStorage.setItem('tc-store', '{"redirect":null,"overrides":{},"history":[{"name":"profile","params":{"countryCode":"lv","q":"28338009"}}],"showSpinner":false,"showDarkTheme":false,"showCookieMessage":false,"geoIpCountry":"lv","searchCountry":"lv","signInCountry":"lv","unlistCountry":"lv","user":{"name":"Cypress Automation","email":"cypresstruecaller@gmail.com","image":"https://lh5.googleusercontent.com/-3H-92sybLgA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfZipxBVK6rh5icI1sUbF9NMgEGlg/mo/photo.jpg","accessToken":"a1w1W------wudVhiz1lYcSm-UX8FWzRkmRMcLbWu8k-P3GNP2WwXmkmS5-c2Cg3","enhancedSearch":true}}');
            localStorage.setItem('truecallerStore','{"user":{"redirect":"/search/lv/23882576","accessToken":null,"enhancedSearch":true,"email":null,"name":null,"image":null,"country":"lv","ipCountry":"lv","ipCountryDetected":true,"searchCountry":"lv","unlistCountry":"lv","searchQuery":"","searchHistory":[{"name":"profile-en","params":{"countryCode":"lv","q":"+37124330309"},"path":"/search/lv/+37124330309"},{"name":"profile-en","params":{"countryCode":"se","q":"+46735358210"},"path":"/search/se/+46735358210"},{"name":"profile-en","params":{"countryCode":"lv","q":"23882576"},"path":"/search/lv/23882576"}],"device":{"isMobile":false,"isIOS":false,"isAndroidOS":false}},"showCookieBanner":true}');
        });
    }

    enterSearchNumber(number){
        const searchField = this.fieldSearch();
        searchField.type(number, { delay: 100 });
    }

    clearSessionStorage(){
        sessionStorage.clear();
    }
//===================================  VALIDATION  ====================================
    validateURL(url){
        cy.url().should('eq', url);  
    }

    validateDownloadPopup(){
        cy.get('.z-100 > .container').should('be.visible');
        cy.get('[href="https://play.google.com/store/apps/details?id=com.truecaller&referrer=utm_source%3Dtcweb&rdid=com.truecaller"] > picture > img').should('be.visible');
        cy.get('[href="https://itunes.apple.com/app/apple-store/id448142450?pt=303680&ct=Website1&mt=8"] > picture > img').should('be.visible');
        cy.get('[href="https://apk.truecaller.com/truecaller.apk"] > picture > img').should('be.visible');
    }

    validateFeatureText(button){
        const label = cy.get('.md\\:flex > div > .text-3xl');
        if(button === "Caller ID"){
            label.should('have.text', 'Caller ID');
        }
        else if(button === "Spam Blocking"){
            label.should('have.text', 'Spam Blocking');
        }
        else if(button === "Intelligent dialer"){
            label.should('have.text', 'Intelligent dialer');
        }
        else if(button === "Chat, SMS and Calls"){
            label.should('have.text', 'Chat, SMS and Calls');
        }
        else if(button === "Banking"){
            label.should('have.text', 'Banking');
        }
        else{
            err;
        }
    }

    validateRecaptchaError(){
        cy.get('.profile > .w-full > .p-4').should('be.visible');
    }
}

export default homePage;