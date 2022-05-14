import HomePage  from '../../page-objects/pages/HomePage';

describe('TC1 - Navigate to IMDB and validate all the page components', () => {
    let appUrl: string = null;
    let envUrl: string = null;
    let testdata = null;
    let homePage: HomePage = null;

    before('Get test data', ()=>{
        envUrl = Cypress.config().baseUrl;
        cy.fixture('tc1.json').then(function (data) {
            console.log(data);
            testdata = data
            return testdata;
        });
    });

    it('1. Navigate to IMDB home page', () => {
        appUrl = envUrl + testdata.url;
        cy.visit(appUrl);
        homePage = new HomePage();
        homePage.getPageTitle().getTitle().should('have.text', testdata.title);
    });

    it('2. Validate Header & Footer sections are displayed', () => {
        homePage.getHeader().getHeaderSection().should('be.visible');
        homePage.getFooter().getFooterSection().should('be.visible');
    });

    it('3. Validate Movie table are displayed', () => {
        homePage.getMovies().getMovieTable().should('be.visible');
        homePage.getFooter().getFooterSection().should('be.visible');
    });

    it('4. Validate Sidebar - Already Seen & Genre section are displayed', () => {
        homePage.getRightSidebar().getAlreadySeenSection().should('be.visible');
        homePage.getRightSidebar().getGenreSection().should('be.visible');
    });

});