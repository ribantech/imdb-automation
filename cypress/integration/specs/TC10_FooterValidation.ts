import HomePage from '../../page-objects/pages/HomePage';

describe('TC10 - IMDB Footer validation', () => {
    let appUrl: string = null;
    let envUrl: string = null;
    let testdata = null;
    let homePage: HomePage = null;

    before('Get test data', () => {
        envUrl = Cypress.config().baseUrl;
        cy.fixture('tc1.json').then(function (data) {
            console.log(data);
            testdata = data
            return testdata;
        });
    });

    beforeEach(() => {
        cy.viewport(1280, 720)
    });
    
    it('1. Navigate to IMDB home page', () => {
        appUrl = envUrl + testdata.url;
        cy.visit(appUrl);
        homePage = new HomePage();
        homePage.getPageTitle().getTitle().should('have.text', testdata.title);
    });

    it('2. Validate Footer Social section is displayed', () => {
        homePage.getFooter().getFooterSocialSection().should('be.visible');
    });

    it('3. Validate Link Row1 is displayed', () => {
        homePage.getFooter().getFooterLinkRow1().should('be.visible');
    });

    it('4. Validate Link Row2 is displayed', () => {
        homePage.getFooter().getFooterLinkRow2().should('be.visible');
    });

    it('5. Validate Footer Logo is displayed', () => {
        homePage.getFooter().getFooterLogo().should('be.visible');
    });

    it('6. Validate Footer copyright is displayed', () => {
        homePage.getFooter().getFooterCopyright().should('be.visible');
    });
});