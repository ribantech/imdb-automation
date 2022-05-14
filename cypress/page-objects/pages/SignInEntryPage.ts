class SignInEntryPage {
    getSignInButtons() {
        return cy.get("div.list-group").eq(0).find("a");
    }

    getSignUpButton() {
        return cy.get("div.list-group").eq(1).find("a");
    }

    getButtonByText(authMode: string, text: string){
        let section = null;
        if(authMode==="signin")
            section = this.getSignInButtons();
        else if(authMode === "signup")
            section = this.getSignUpButton();
        return section.get('a.auth-provider-text').contains(text);
    }

}

export default SignInEntryPage;