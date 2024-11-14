const testUtils = {
	navigateToURL(expectedURL) {
		return cy.visit(expectedURL)
	},

	steps(step) {
		return cy.step(step)
	},

	runnerLog(Logger) {
		return cy.log(Logger)
	},

	eleByContains(elementText) {
		return cy.contains(elementText)
	},

	getEleBySelector(elementSelector) {
		return cy.get(elementSelector)
	},

	pauseExecution(seconds) {
		return cy.wait(seconds * 1000)
	},

	validateURL(expectedURL) {
		cy.url()
			.if("eq", expectedURL)
			.log("Successfully Navigated to " + expectedURL)
			.else(expectedURL + " does not match")
	},

	typeText(selector, text) {
		return cy.get(selector).type(text)
	},

	clickOnElement(selector) {
		return cy.get(selector).should("be.visible").click();
	}
}
export default testUtils;
