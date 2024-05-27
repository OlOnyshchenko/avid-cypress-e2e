import { ITF } from "./selectors";

export class CreateNewSubmissionPage {

    fillITFInput(fieldName, text) {
        if (fieldName.toLowerCase().includes('patientyob')) {
            cy.get(ITF.patientYOB)
                .click()
                .type(text);
        }
    }
}