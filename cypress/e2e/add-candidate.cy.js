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
        cy.get('.oxd-text--toast-message')
            .should('be.visible')
            .invoke('text')
            .should('eq', 'Successfully Saved');
    })
})