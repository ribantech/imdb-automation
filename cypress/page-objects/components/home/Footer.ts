class Footer {
    getFooterSection() {
        return cy.get('footer.imdb-footer');
    }

    getFooterSocialSection(){
        return cy.get('div.footer__socials');
    }

    getFooterLinkRow1(){
        return cy.get('div.imdb-footer__links div').eq(1);
    }

    getFooterLinkRow2() {
        return cy.get('div.imdb-footer__links div').eq(2);
    }

    getFooterLogo(){
        return cy.get('div.imdb-footer__logo');
    }

    getFooterCopyright(){
        return cy.get('p.imdb-footer__copyright');
    }
}

export default Footer;