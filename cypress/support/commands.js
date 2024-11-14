/// <reference types="cypress" />

Cypress.Commands.add("validUrl", (partialUrl, fullUrl) => {
	cy.url().then(value => {
		cy.log("Current Url Is: ", value)
		expect(value).to.contains(partialUrl)
		expect(value).to.eq(fullUrl)
	})

	cy.request(fullUrl).should(response => {
		expect(response.status).to.eq(200)
	})

	cy.request(fullUrl).should(response => {
		expect(response.status).to.not.eq(400)
		cy.log("Request Time Out")
	})
})

Cypress.Commands.add("clickOnAddToCart", (primaryClass, desiredProductName, subClass) => {
	cy.contains('.inventory_item', 'Sauce Labs Bolt T-Shirt')
	.within(() => {
	  cy.get('.pricebar .btn_inventory').contains('ADD TO CART').click(); 
	});
})


