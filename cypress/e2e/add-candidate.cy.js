describe('Recruitment', () => {
    beforeEach(function () {
        cy.fixture('candidate').then((candidate) => {
            this.candidate = candidate;
        })
        cy.fixture('login').then((login) => {
            cy.login(login.username, login.password);
        })
        cy.clickMenuOption('Recruitment');
    })

    it('Create new candidate with mandatory information', function() {
        cy.addCandidate(this.candidate)
        cy.get('#oxd-toaster_1').should('be.visible')
    })
})