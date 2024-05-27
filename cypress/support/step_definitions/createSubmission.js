import { Then } from 'cypress-cucumber-preprocessor/steps';
import {Header, ITF, Selectors, TaskList, TimepointSelectForm} from '../../pages/selectors'

Then(/^I should enable standard view port$/, () => {
    cy.viewport(1000, 660);
});

Then(/^I should visit login page$/, () => {
    cy.visit('https://avid-olaa-int-test.dev.invicrodev.com/');
});

Then(/^I should see a submit button in the login page$/, () => {
    cy.get(Selectors.submitButton).contains('Sign in').should('be.visible');
});

Then(/^I should login as "([^"]*)"$/, (user) => {
    if (user === 'submitter')
    {
        cy.get(Selectors.usernameInput).click().type('aonysub2')
        cy.get(Selectors.passwordInput).click().type('Test123!')
        cy.get(Selectors.submitButton).click()
    }
    if (user === 'image qc')
    {
        cy.get(Selectors.usernameInput).click().clear().type('aonyiqc2')
        cy.get(Selectors.passwordInput).click().type('Test123!')
        cy.get(Selectors.submitButton).click()
    }
});

Then(/^I should re-login as "([^"]*)"$/, (user) => {
    if (user === 'submitter')
    {
        cy.get(Selectors.logoutButton).click();
        cy.get(Selectors.usernameInput).click().type('aonysub2')
        cy.get(Selectors.passwordInput).click().type('Test123!')
        cy.get(Selectors.submitButton).click()
    }
    if (user === 'image qc')
    {
        cy.get(Selectors.logoutButton).click();
        cy.get(Selectors.usernameInput).click().type('aonyiqc2')
        cy.get(Selectors.passwordInput).click().type('Test123!')
        cy.get(Selectors.submitButton).click()
    }
});

Then(/^I should wait some time$/, () => {
    cy.wait(2000);
});

Then(/^I should logout from the app$/, () => {
    cy.get(Selectors.logoutButton).click();
});

Then(/^I should see a title of Create Submission page$/, () => {
    cy.get(Selectors.createSubmissionPageTitle).contains('Submission Tasks').should('be.visible');
});

Then(/^I should see a title of Dashboard page$/, () => {
    cy.get(Selectors.dashboardTitle).contains('iPACS Dashboard').should('be.visible');
});

Then(/^I should go to "([^"]*)"$/, (headerOption) => {
    if(headerOption === 'task list'){
        cy.get(Header.workflowMenuOption).contains('Workflow').click();
        cy.get(Header.taskListDropdownOption).contains('Task List').click();
    }
});

Then(/^I should see a workflow tasks title$/, () => {
    cy.get(TaskList.title).contains('Workflow Tasks').should('be.visible');
});

Then(/^I should click on task in task list$/, () => {
    cy.get(TaskList.taskInList).contains('323-9000').click();
});

Then(/^I should click on Add Submission button$/, () => {
    cy.get(Selectors.addSubmissionButton).contains(' Add Submission ').click();
});

Then(/^I should click on New Submission button$/, () => {
    cy.get(Selectors.addNewSubmissionButton).contains(' New Submission').click();
});

Then(/^I should see a Timepoint Select form$/, () => {
    cy.get(TimepointSelectForm.timepointSelectFormTitle).contains('New Submission').should('be.visible');
});

Then(/^I should fill "([^"]*)" in Subject ID field$/, (subjectID) => {
    cy.get(TimepointSelectForm.subjectIDInput).click().type(subjectID);
});

Then(/^I should select "([^"]*)" in Timepoint field$/, (timepoint) => {
    cy.get(TimepointSelectForm.timepointInput).select(timepoint);
});

Then(/^I should click on Submit button in Timepoint Select form$/, () => {
    cy.get(TimepointSelectForm.timepointSelectSubmitButton).contains(' Submit ').click();
});

Then(/^I should see a title of Create New Submission page$/, () => {
    cy.get(ITF.createNewSubmissionPageTitle).contains('Create Submission').should('be.visible');
});

Then(/^I should upload a "([^"]*)" file$/, (fileType) => {
    if (fileType.toLowerCase().includes('dicom')){
        cy.get(ITF.uploadFileInput).selectFile('cypress/fixtures/test_files/0001-1-0004.dcm', { force: true });
    } else if (fileType.toLowerCase().includes('sample')){
        cy.get(ITF.uploadFileInput).selectFile('cypress/fixtures/test_files/sample.jpeg', { force: true });
    }
});

Then(/^I should see file uploaded toaster$/, (fileType) => {
    cy.get(Selectors.fileUploadedToaster).contains('Uploaded 1 files.').should('be.visible');
});

Then(/^I should fill "([^"]*)" value in "([^"]*)" ITF field$/, (text, fieldName) => {
    if (fieldName.toLowerCase().includes('patientyob')) {
        cy.get(ITF.patientYOB)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('weight')) {
        cy.get(ITF.weight)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('namemodelofscannerused')) {
        cy.get(ITF.nameModelOfScannerUsed)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('wereanyissuesnotedondailyqc')) {
        cy.get(ITF.wereAnyIssuesNotedOnDailyQC)
            .select(text);
    } else if (fieldName.toLowerCase().includes('ifyespleasecommentbelow')) {
        cy.get(ITF.ifYesPleaseCommentBelow)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('dateofpetscan')) {
        cy.get(ITF.dateOfPETScan)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('doselotnumber')) {
        cy.get(ITF.doseLotNumber)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('activityinsyringe')) {
        cy.get(ITF.activityInSyringe)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('volumeofactivityml')) {
        cy.get(ITF.volumeOfActivityML)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('timeofsyringeassay')) {
        cy.get(ITF.timeOfSyringeAssay)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('traceradministrationtime')) {
        cy.get(ITF.tracerAdministrationTime)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('residualassay')) {
        cy.get(ITF.residualAssay)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('residualtime')) {
        cy.get(ITF.residualTime)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('petscanstarttime')) {
        cy.get(ITF.petScanStartTime)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('pleaseenterwhythepetscantimeisoutsidethespecifiedwindow')) {
        cy.get(ITF.pleaseEnterWhyThePETScanStartTimeIsOutsideTheSpecifiedWindow)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('pleaseenterwhythenetactivityadministeredisoutofrange')) {
        cy.get(ITF.pleaseEnterWhyTheNetActivityAdministeredIsOutOfRange)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('perslicethicknessmm')) {
        cy.get(ITF.perSliceThicknessMM)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('totalslicesperframe')) {
        cy.get(ITF.totalSlicesPerFrame)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('iterations')) {
        cy.get(ITF.iterations)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('subsets')) {
        cy.get(ITF.subsets)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('gaussiansmoothingmm')) {
        cy.get(ITF.gaussianSmoothingMM)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('zoom')) {
        cy.get(ITF.zoom)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('reconstructiondiameter')) {
        cy.get(ITF.reconstructionDiameter)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('reconstructionunits')) {
            if (text === 'mm'){
            cy.get(ITF.reconstructionDiameterUnits)
            .select('cm');
            }
    } else if (fieldName.toLowerCase().includes('petmatrixsize')) {
        cy.get(ITF.petMatrixSize)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('reconparameterorlambda')) {
        cy.get(ITF.reconParameterOrLambda)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('nameofindividualpreparingsyringe')) {
        cy.get(ITF.nameOfIndividualPreparingSyringe)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('nameofindividualinjectingpatient')) {
        cy.get(ITF.nameOfIndividualInjectingPatient)
            .click()
            .type(text);
    } else if (fieldName.toLowerCase().includes('comments')) {
        cy.get(ITF.comments)
            .click()
            .type(text);
    }

    Then(/^I should fill "([^"]*)" in Password ITF field$/, (password) => {
        cy.get(ITF.passwordInput).click().type(password);
    });

    Then(/^I should click on Submit ITF button$/, () => {
        cy.get(ITF.submitButton).contains(' Submit ').click();
    });



});





// Then(/^I should enter (\d+) symbols in "([^"]*)" field$/, (symbolsQuantity: number, fieldName: string) => {
//     if (fieldName === 'first name')
//     {
//         cy.get(Selectors.firstNameInput).click().type(getTextRandomString(symbolsQuantity))
//     }
//     if (fieldName === 'last name')
//     {
//         cy.get(Selectors.lastNameInput).click().type(getTextRandomString(symbolsQuantity))
//     }
//     if (fieldName === 'password first')
//     {
//         cy.get(Selectors.passwordInput).click().type(getTextRandomString(symbolsQuantity))
//     } else {
//         cy.get(Selectors.confirmPasswordInput).click().type(getTextRandomString(symbolsQuantity))
//     }
// });