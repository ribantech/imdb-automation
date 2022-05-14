class SignInPage {
    getEmailField() {
        return cy.get("input#ap_email");
    }

    setEmailField(email: string) {
        let emailField = this.getEmailField();
        emailField.type(email)
    }

    getPasswordField() {
        return cy.get("input#ap_password");
    }

    setPasswordField(password: string) {
        let passwordField = this.getPasswordField();
        passwordField.type(password);
    }

    clickSignInButton(){
        cy.get('form[name="signIn"]').submit();
    }

}

export default SignInPage;