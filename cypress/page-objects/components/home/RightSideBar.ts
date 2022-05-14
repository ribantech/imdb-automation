class RightSideBar {
    
    getAlreadySeenSection() {
        return cy.get('div.aux-content-widget-2').eq(0);
    }

    getGenreSection() {
        return cy.get('div.aux-content-widget-2').eq(1);
    }

    getGenreLinkByName(name: string) {
        return cy.get('ul.quicklinks a').contains(name);
    }
}

export default RightSideBar;