import { LoginPage } from "../../page-modules/LoginPage";

export const loginHelper = {
    login: (username, password) => {
        cy.get(LoginPage.usernameInput).type(username);
        cy.get(LoginPage.passwordInput).type(password);
        cy.get(LoginPage.loginButton).click();
    }
};