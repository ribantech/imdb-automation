import HomePage from '../../page-objects/pages/HomePage';

describe('TC9 - IMDB Header validation', () => {
    let appUrl: string = null;
    let envUrl: string = null;
    let testdata = null;
    let homePage: HomePage = null;

    before('Get test data', () => {
        envUrl = Cypress.config().baseUrl;
        cy.fixture('tc9.json').then(function (data) {
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

    it('2. Validate Menu option is displayed', () => {
        homePage.getHeader().getMenuSection().should('be.visible');
    });

    it('3. Validate Search bar is displayed', () => {
        homePage.getHeader().getSearchBox().should('be.visible');
    });

    it('4. Validate ImdbPro is displayed', () => {
        homePage.getHeader().getImdbPro().should('be.visible');
    });

    it('5. Validate Watchlist button is displayed', () => {
        homePage.getHeader().getWatchListButton().should('be.visible');
    });

    it('6. Validate SignIn button is displayed', () => {
        homePage.getHeader().getLoginButton().should('be.visible');
    });
});