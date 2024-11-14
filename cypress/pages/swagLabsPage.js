/// <reference types="cypress" />

class swagLabsPage {
	/** Account Info Field */

	enterUserName(text) {
		return cy.get("input#user-name").should('be.visible').type(text);
	}

    enterUserPassword(text) {
		return cy.get("input#password").should('be.visible').type(text);
	}

    clicksOnLoginButton() {
		return cy.get("input#login-button").should('be.visible').click();
	}

	inventoryItemsClass () {
		return cy.get(".inventory_item")
	}

	inventoryListSubClass () {
		return cy.get(".pricebar .btn_inventory")
	}

	clickingOnSidebarClose () {
		return cy.get(".bm-cross-button button").should("be.visible").click();
	}

	openingSideMenu () {
		return cy.get("div#menu_button_container .bm-burger-button > button").click();
	}

	resettingAppStatus () {
		return cy.get("a#reset_sidebar_link").click();
	}

	clickingOnLogOut () {
		return cy.get("a#logout_sidebar_link").click();
	}


}

export default new swagLabsPage()
