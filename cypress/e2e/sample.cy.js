/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://avid-olaa-int-test.dev.invicrodev.com/')
    })

    it('displays two todo items by default', () => {
        // Login as a Submitter
        cy.get('[name="username"]').click().type('aonysub2')
        cy.get('#password-input').click().type('Test123!')
        cy.get('button[type="submit"]').click()
        cy.get('button').contains(' Add Submission ').click()
        cy.get('button').contains(' New Submission ').click()
        cy.get('.modal-content').contains('New Submission').should('be.visible');
        // Timepoint Select Form - Step 1
        cy.get('#timepoint').select('Visit 1')
        cy.get('button').contains(' Submit ').click()
        cy.get('#subject-id:invalid')
            .invoke('prop', 'validationMessage')
            .should('equal', 'Please fill out this field.')
        cy.get('#subject-id').click().type('981-120')
        cy.get('button').contains(' Submit ').click()
        cy.get('span').contains('Subject ID must be of format XXX-XXXX').should('be.visible');
        cy.get('#subject-id').click().clear().type('981-2456')
        cy.get('span').contains('Subject ID must be of format XXX-XXXX').should('not.exist');
        cy.get('button').contains('×').click()
        // Timepoint Select Form - Step 2
        cy.get('button').contains(' New Submission ').click()
        cy.get('.modal-content').contains('New Submission').should('be.visible');
        cy.get('#subject-id').click().type('981-1202')
        cy.get('button').contains(' Submit ').click()
        cy.get('span').contains('You must select a TimePoint').should('be.visible');
        const expectedTexts = ['Visit 1', 'Visit 1 Rescan', 'Visit 10', 'Visit 12', 'Visit 17', 'Visit 19', 'Unscheduled']
        cy.get('#timepoint').within(() => {
            cy.get('option').should('contain.text', expectedTexts[0])
            cy.get('option').should('contain.text', expectedTexts[1])
            cy.get('option').should('contain.text', expectedTexts[2])
            cy.get('option').should('contain.text', expectedTexts[3])
            cy.get('option').should('contain.text', expectedTexts[4])
            cy.get('option').should('contain.text', expectedTexts[5])
            cy.get('option').should('contain.text', expectedTexts[6])
        })
        cy.get('#timepoint').select('Visit 1')
        cy.get('button').contains(' Submit ').click()
        cy.get('h3').contains('Create Submission').should('be.visible')
        // cy.get('div').contains('981-1202').contains(' PatientsName ').should('be.visible');
        // cy.get('div').contains('Visit 1').should('be.visible');
        // cy.get('div').contains('Visit 1').should('be.visible');
        cy.get('.box-body').contains('981-1202').should('be.visible')
        cy.get('.box-body').contains('Visit 1').should('be.visible')
        cy.get('.box-body').contains('Flortaucipir F-18').should('be.visible')



        // cy.get('#subject-id').click().type('981-1200')
        // cy.get('#timepoint').select('Visit 1')
        // cy.get('button').contains(' Submit ').click()
        // cy.get('h3').contains('Create Submission').should('be.visible');

        // ITF form - Positive values
        // cy.get('#patient-yob-yyyy').click().type('1990')
        // cy.get('#weight-kg').click().type('80')
        // cy.get('#name-model-of-scanner-used').click().type('Phillips')
        // cy.get('#were-any-issues-noted-on-daily-qc').select('Yes')
        // cy.get('#if-yes-please-comment-below').click().type('Test comment')
        // cy.get('#date-of-pet-scan').click().type('22-Apr-2023')
        // cy.get('#dose-lot-number').click().type('12')
        // cy.get('#activity-in-syringe').click().type('1.5')
        // cy.get('#volume-of-activity-ml').click().type('7.345')
        // cy.get('#time-of-syringe-assay').click().type('12:00')
        // cy.get('#tracer-administration-time').click().type('12:00')
        // cy.get('#residual-assay').click().type('1.5')
        // cy.get('#residual-time').click().type('12:00')
        // cy.get('#pet-scan-start-time').click().type('12:00')
        // cy.get('#please-enter-why-the-pet-scan-start-time-is-outside-the-specified-window').click().type('Test comment')
        // cy.get('#please-enter-why-the-net-activity-administered-is-out-of-range').click().type('Test comment')
        // cy.get('#pet-slice-thickness-mm').click().type('0.45')
        // cy.get('#total--slices-per-frame').click().type('1500')
        // cy.get('#iterations').click().type('N/A')
        // cy.get('#subsets').click().type('Phillips')
        // cy.get('#gaussian-smoothing-mm').click().type('N/A')
        // cy.get('#zoom').click().type('32')
        // cy.get('#reconstruction-diameter').click().type('10')
        // cy.get('#reconstruction-diameter-units').select('mm')
        // cy.get('#pet-matrix-size').click().type('10x90')
        // cy.get('#recon-parameter-or-lambda').click().type('N/A')
        // cy.get('#name-of-individual-preparing-syringe').click().type('John Doe')
        // cy.get('#name-of-individual-injecting-patient').click().type('Sara Smith')
        // cy.get('#itf-comments').click().type('All went well without any issues')











        // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
        // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })

    // it('can add new todo items', () => {
    //     // We'll store our item text in a variable so we can reuse it
    //     const newItem = 'Feed the cat'
    //
    //     // Let's get the input element and use the `type` command to
    //     // input our new list item. After typing the content of our item,
    //     // we need to type the enter key as well in order to submit the input.
    //     // This input has a data-test attribute so we'll use that to select the
    //     // element in accordance with best practices:
    //     // https://on.cypress.io/selecting-elements
    //     cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    //
    //     // Now that we've typed our new item, let's check that it actually was added to the list.
    //     // Since it's the newest item, it should exist as the last element in the list.
    //     // In addition, with the two default items, we should have a total of 3 elements in the list.
    //     // Since assertions yield the element that was asserted on,
    //     // we can chain both of these assertions together into a single statement.
    //     cy.get('.todo-list li')
    //         .should('have.length', 3)
    //         .last()
    //         .should('have.text', newItem)
    // })

    // it('can check off an item as completed', () => {
    //     // In addition to using the `get` command to get an element by selector,
    //     // we can also use the `contains` command to get an element by its contents.
    //     // However, this will yield the <label>, which is lowest-level element that contains the text.
    //     // In order to check the item, we'll find the <input> element for this <label>
    //     // by traversing up the dom to the parent element. From there, we can `find`
    //     // the child checkbox <input> element and use the `check` command to check it.
    //     cy.contains('Pay electric bill')
    //         .parent()
    //         .find('input[type=checkbox]')
    //         .check()
    //     cy.contains('Pay electric bill')
    //         .parents('li')
    //         .should('have.class', 'completed')
    // })
    //
    // context('with a checked task', () => {
    //     beforeEach(() => {
    //         cy.contains('Pay electric bill')
    //             .parent()
    //             .find('input[type=checkbox]')
    //             .check()
    //     })
    //
    //     it('can filter for uncompleted tasks', () => {
    //         // We'll click on the "active" button in order to
    //         // display only incomplete items
    //         cy.contains('Active').click()
    //
    //         // After filtering, we can assert that there is only the one
    //         // incomplete item in the list.
    //         cy.get('.todo-list li')
    //             .should('have.length', 1)
    //             .first()
    //             .should('have.text', 'Walk the dog')
    //         cy.contains('Pay electric bill').should('not.exist')
    //     })
    //
    //     it('can filter for completed tasks', () => {
    //         cy.contains('Completed').click()
    //
    //         cy.get('.todo-list li')
    //             .should('have.length', 1)
    //             .first()
    //             .should('have.text', 'Pay electric bill')
    //
    //         cy.contains('Walk the dog').should('not.exist')
    //     })
    //
    //     it('can delete all completed tasks', () => {
    //         cy.contains('Clear completed').click()
    //         cy.get('.todo-list li')
    //             .should('have.length', 1)
    //             .should('not.have.text', 'Pay electric bill')
    //
    //         cy.contains('Clear completed').should('not.exist')
    //     })
    // })
})