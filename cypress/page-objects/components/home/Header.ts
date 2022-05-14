class Header {
    getHeaderSection() {
        return cy.get('nav#imdbHeader');
    }
    getMenuSection() {
        cy.get('label#imdbHeader-navDrawerOpen--desktop').click();
        return cy.get('[data-testid="drawer"]');
    }

    getSearchBox(){
        return cy.get('input#suggestion-search');
    }

    getSearchButton() {
        return cy.get('button#suggestion-search-button');
    }

    getImdbPro(){
        return cy.get('div.navbar__imdbpro')
    }

    getWatchListButton(){
        return cy.get('div.imdb-header__watchlist-button');
    }

    getLoginButton() {
        return cy.get('div.nav__userMenu');
    }

    getLoggedInUserName(){
        return cy.get('div.ipc-button__text>span');
    }

    searchImdb(cat: string, text: string){

    }


}

export default Header;