const { defineConfig } = require("cypress")
const dotenv = require('dotenv').config();

module.exports = defineConfig({
	env: {...process.env},
	chromeWebSecurity: false,
	defaultCommandTimeout: 30000,
	execTimeout: 30000,
	pageLoadTimeout: 30000,
	requestTimeout: 20000,
	responseTimeout: 20000,
	video: false,
	failOnStatusCode: false,
	viewportHeight: 1200,
	viewportWidth: 1920,
	screenshotOnRunFailure: false,
	screenshotsFolder: "cypress/screenshots",
	videosFolder: "cypress/videos",
	trashAssetsBeforeRuns: true,
	reporter: "cypress-mochawesome-reporter",
	reporterOptions: {
		reportDir: "cypress/reports",
		charts: true,
		reportPageTitle: "End-To-End Test Suite",
		embeddedScreenshots: true,
		inlineAssets: true,
		quiet: true,
		overwrite: false,
		html: false,
		json: true,
	},
	e2e: {
		experimentalRunAllSpecs: true,
		specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
		setupNodeEvents(on, config) {
			return require("./cypress/plugins/index.js")(on, config)
		},
	},
})
