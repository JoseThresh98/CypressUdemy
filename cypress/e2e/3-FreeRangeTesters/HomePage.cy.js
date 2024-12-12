describe('Home de www.fast.com', () => {
    beforeEach(() =>{
        cy.visit('https://fast.com/')
    })

    it('should have a title', () => {
        cy.title().should('include', 'Fast')
    })
})