import homePage from "../../elements/pages/newHomePage/homePage";

describe("Homepage tests", () => {
    describe("Login cases", () => {
        it("I can log in as a google user", () => {
            const home = new homePage();
            home.visitURL();
            home.clearSessionStorage();
            home.setupGoogleUser();
            home.visitURL();
            home.sideMenu.validateUserLoggedIn();
        })

        it("Open information about user account", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/me";
            home.visitURL();
            home.clearSessionStorage();
            home.setupGoogleUser();
            home.visitURL();
            home.sideMenu.validateUserLoggedIn();
            home.clickElement(home.sideMenu.buttonUserMenu());
            home.clickElement(home.sideMenu.buttonUserAccountPrivacy());
            home.validateURL(link);
            home.sideMenu.validateAccountInfo();
            cy.wait(1000);
            })

        it("Validate account email links for support", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/me";
            home.visitURL(link);
            home.sideMenu.validateAccountSupportEmail(home.sideMenu.buttonUserSupportOne());
            home.sideMenu.validateAccountSupportEmail(home.sideMenu.buttonUserSupportTwo());
        })

        it("I can log out as a google user", () => {
            const home = new homePage();
            home.visitURL();
            home.clearSessionStorage();
            home.setupGoogleUser();
            home.visitURL();
            home.sideMenu.validateUserLoggedIn();
            home.clickElement(home.sideMenu.buttonUserMenu());
            home.clickElement(home.sideMenu.buttonUserLogout());
            home.sideMenu.validateUserLoggedOut();
        })

        it("Recaptcha error", () =>{
            const home = new homePage();
            home.visitURL();
            home.clearSessionStorage();
            home.setupGoogleUser();
            home.visitURL();
            home.sideMenu.validateUserLoggedIn();
            home.enterSearchNumber("+37128338009");
            home.clickElement(home.buttonSearch());
            cy.wait(700);
            home.validateRecaptchaError();
        })
    })

    it("Download options shown when opened from main page", () => {
        const home = new homePage();
        home.visitURL();
        home.clickElement(home.buttonDownload());
        home.validateDownloadPopup();
    })

    it("See all features", () => {
        const home = new homePage();
        const link = "https://www.truecaller.com/features";
        home.visitURL();
        home.clickElement(home.buttonAllFeatures());
        home.validateURL(link);
    })

    it("Download options shown when opened from features page", () => {
        const home = new homePage();
        const link = "https://www.truecaller.com/features";
        home.visitURL(link);
        home.clickElement(home.buttonFeaturesDownload());
        home.validateDownloadPopup();
    })

    describe("Feature buttons", () => {
        it("Caller ID feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonCallerID());
            home.validateFeatureText("Caller ID");
        })

        it("Spam Blocking feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonSpamProtection());
            home.validateFeatureText("Spam Blocking");
        })

        it("Intelligent Dialer feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonDialer());
            home.validateFeatureText("Intelligent dialer");
        })

        it("Chat, SMS and Calls feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonMessaging());
            home.validateFeatureText("Chat, SMS and Calls");
        })

        it("Banking feature button opens information about it", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.buttonPay());
            home.validateFeatureText("Banking");
        })
    })

    describe("Footer contractual links", () => {
        it("Recaptcha PP link validation", () => {
            const home = new homePage();
            home.visitURL();
            home.footer.validateCaptchaPP();
        });

        it("Recaptcha TOS link validation", () => {
            const home = new homePage();
            home.visitURL();
            home.footer.validateCaptchaTOS();
        })

        it("TC TOS link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/terms-of-service#row";
            home.visitURL();
            home.clickElement(home.footer.buttonTOS());
            home.validateURL(link);
        })

        it("TC PP link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/privacy-policy#row";
            home.visitURL();
            home.clickElement(home.footer.buttonPP());
            home.validateURL(link);
        })

        it("TC CP link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/cookie-policy";
            home.visitURL();
            home.clickElement(home.footer.buttonCP());
            home.validateURL(link);
        })

        it("TC Directory link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/directory";
            home.visitURL();
            home.clickElement(home.footer.buttonDirectory());
            home.validateURL(link);
        })

        it("TC RD link navigation", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/responsible-disclosure";
            home.visitURL();
            home.clickElement(home.footer.buttonRD());
            home.validateURL(link);
        })
    })

    describe("Sign in", () => {
        it("Open sign in", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/auth/sign-in";
            home.visitURL();
            home.clickElement(home.sideMenu.buttonSignIn());
            home.validateURL(link);
        });

        it("Validate Terms of service", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.sideMenu.buttonSignIn());
            home.sideMenu.validateSignInTOS();
        });

        it("Validate Privacy Policy", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.sideMenu.buttonSignIn());
            home.sideMenu.validateSignInPP();
        });
    })

    describe("Truecaller premium", () => {
        it("Open Truecaller premium", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/premium";
            home.visitURL();
            home.clickElement(home.sideMenu.buttonTCPremium());
            home.validateURL(link);
        });

        it("Switch between premium and gold tabs", () => {
            const home = new homePage;
            const link = "https://www.truecaller.com/";
            let tab = "gold";
            home.visitURL();
            home.clickElement(home.sideMenu.buttonTCPremium());
            home.sideMenu.clickPremiumTab(tab);
            home.validateURL(link + tab);
            tab = "premium";
            home.sideMenu.clickPremiumTab(tab);
            home.validateURL(link + tab);
        });
    })

    describe("About Truecaller", () => {
        it("Open About Truecaller", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/about";
            home.visitURL();
            home.clickElement(home.sideMenu.buttonAboutTC());
            home.validateURL(link);
        });
    })

    describe("Board and management", () => {
        it("Open Board and management", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/board-and-management";
            home.visitURL();
            home.clickElement(home.sideMenu.buttonBoard());
            home.validateURL(link);
        });
    })

    describe("Media kit", () => {
        it("Open Media kit", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/media-kit";
            home.visitURL();
            home.clickElement(home.sideMenu.buttonMedia());
            home.validateURL(link);
        });

        it("Validate Download buttons", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.sideMenu.buttonMedia());
            home.sideMenu.validateMediaDownloads();
        });

        it("Validate send mail button", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.sideMenu.buttonMedia());
            home.sideMenu.validateMediaMail();
        });
    })

    describe("Careers", () => {
        it("Open Careers", () => {
            const home = new homePage();
            const link = "https://www.truecaller.com/careers";
            home.visitURL();
            home.clickElement(home.sideMenu.buttonCareers());
            home.validateURL(link);
        });

        it("View open positions", () => {
            const home = new homePage();
            home.visitURL();
            home.clickElement(home.sideMenu.buttonCareers());
            home.clickElement(home.sideMenu.buttonCareersPositions());
            home.sideMenu.validateCareersPositions();
        });
    })

    describe("Blog", () => {
        it("Validate Blog", () => {
            const home = new homePage();
            home.visitURL();
            home.sideMenu.validateBlog();
        });
    })

    describe("Advertisers", () => {
        it("Validate Advertisers", () => {
            const home = new homePage();
            home.visitURL();
            home.sideMenu.validateAdvertisers();
        });
    })

    describe("Businesses", () => {
        it("Validate Businesses", () => {
            const home = new homePage();
            home.visitURL();
            home.sideMenu.validateBusinesses();
        });
    })

    describe("Developers", () => {
        it("Validate Developers", () => {
            const home = new homePage();
            home.visitURL();
            home.sideMenu.validateAdvertisers();
        });
    })

    describe("Support", () => {
        it("Validate Support", () => {
            const home = new homePage();
            home.visitURL();
            home.sideMenu.validateSupport();
        });
    })

    describe("Theme", () => {
        it("Switch to dark theme and back", () => {
            const home = new homePage();
            home.visitURL();
            home.sideMenu.validateTheme('light');
            home.clickElement(home.sideMenu.buttonNightMode());
            home.sideMenu.validateTheme('dark');
        });
    })

    it("Validate Facebook button", () => {
        const home = new homePage();
        const link = "https://www.facebook.com/Truecaller/";
        home.visitURL();
        home.sideMenu.validateFooterButton(home.sideMenu.buttonFooterFB(), link);
    })

    it("Validate Twitter button", () => {
        const home = new homePage();
        const link = "https://twitter.com/truecaller";
        home.visitURL();
        home.sideMenu.validateFooterButton(home.sideMenu.buttonFooterTwitter(), link);
    })

    it("Validate Instagram button", () => {
        const home = new homePage();
        const link = "https://www.instagram.com/truecaller/";
        home.visitURL();
        home.sideMenu.validateFooterButton(home.sideMenu.buttonFooterInstagram(), link);
    })

    it("Validate Youtube button", () => {
        const home = new homePage();
        const link = "https://www.youtube.com/channel/UCtz1lDuJXH7ShIa6n4UAEAg";
        home.visitURL();
        home.sideMenu.validateFooterButton(home.sideMenu.buttonFooterYoutube(), link);
    })

    it("Validate Linkedin button", () => {
        const home = new homePage();
        const link = "https://www.linkedin.com/company/true-software-scandinavia-ab";
        home.visitURL();
        home.sideMenu.validateFooterButton(home.sideMenu.buttonFooterLinkedin(), link);
    })
})