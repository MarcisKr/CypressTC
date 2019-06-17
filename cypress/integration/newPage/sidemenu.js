import homePage from "../../elements/pages/newHomePage/homePage";

describe("Sidemenu", () => {
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