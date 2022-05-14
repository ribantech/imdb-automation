class Title {
    getTitle() {
        return cy.get("h1.header");
    }

    getSubTitle() {
        return cy.get("div.desc");
    }

}

export default Title;