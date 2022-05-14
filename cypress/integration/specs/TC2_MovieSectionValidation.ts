import HomePage from '../../page-objects/pages/HomePage';

describe('TC2 - IMDB Movie section validation', () => {
    let appUrl: string = null;
    let envUrl: string = null;
    let testdata = null;
    let homePage: HomePage = null;

    before('Get test data', () => {
        envUrl = Cypress.config().baseUrl;
        cy.fixture('tc6.json').then(function (data) {
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

    it('2. Validate if Movie table has 250 rows for each sorting dropdown values', ()=>{
        let values = testdata.dropdownvalues;
        /*
        for (let ele in testdata.dropdownvalues) {
            homePage.getMovies().getMovieTableDropdown().select(testdata.dropdownvalues[ele]);
            homePage.getMovies().getMovieTable().find('tr').should('have.length', 250);
        } 
        */
        values.forEach(element => {
            homePage.getMovies().getMovieTableDropdown().select(element);
            homePage.getMovies().getMovieTable().find('tbody tr').should('have.length', 250);
        });
        
    }); 

});