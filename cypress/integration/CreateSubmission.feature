Feature: Submission Creation

  Scenario: Enter valid values - Positive flow
    # Loging to the system as Submitter
    Then I should visit login page
    Then I should see a submit button in the login page
    Then I should login as "submitter"
    Then I should see a title of Create Submission page
    Then I should click on Add Submission button
    Then I should click on New Submission button
    # Fill Timepoint Select form
    Then I should see a Timepoint Select form
    Then I should fill "083-2215" in Subject ID field
    Then I should select "Unscheduled" in Timepoint field
    Then I should click on Submit button in Timepoint Select form
    Then I should see a title of Create New Submission page
    # Fill ITF form
    Then I should upload a "dicom" file
    Then I should see file uploaded toaster
    Then I should fill "1999" value in "PATIENTYOB" ITF field
#    Then I should fill "69" value in "weight" ITF field
#    Then I should fill "Phillips" value in "nameModelOfScannerUsed" ITF field
#    Then I should fill "Yes" value in "wereAnyIssuesNotedOnDailyQC" ITF field
#    Then I should fill "Test Comment" value in "ifYesPleaseCommentBelow" ITF field
#    Then I should fill "22-Apr-2023" value in "dateOfPETScan" ITF field
#    Then I should fill "12" value in "doseLotNumber" ITF field
#    Then I should fill "1.5" value in "activityInSyringe" ITF field
#    Then I should fill "7.345" value in "volumeOfActivityML" ITF field
#    Then I should fill "12:00" value in "timeOfSyringeAssay" ITF field
#    Then I should fill "12:00" value in "tracerAdministrationTime" ITF field
#    Then I should fill "1.5" value in "residualAssay" ITF field
#    Then I should fill "12:00" value in "residualTime" ITF field
#    Then I should fill "12:00" value in "petScanStartTime" ITF field
#    Then I should fill "Test comment 1" value in "pleaseEnterWhyThePETScanTimeIsOutsideTheSpecifiedWindow" ITF field
#    Then I should fill "Test comment 2" value in "pleaseEnterWhyTheNetActivityAdministeredIsOutOfRange" ITF field
#    Then I should fill "0.45" value in "perSliceThicknessMM" ITF field
#    Then I should fill "1500" value in "totalSlicesPerFrame" ITF field
#    Then I should fill "N/A" value in "iterations" ITF field
#    Then I should fill "0.123" value in "subsets" ITF field
#    Then I should fill "N/A" value in "gaussianSmoothingMM" ITF field
#    Then I should fill "32" value in "zoom" ITF field
#    Then I should fill "10" value in "reconstructionDiameter" ITF field
#    Then I should fill "mm" value in "reconstructionunits" ITF field
#    Then I should fill "10x90" value in "petMatrixSize" ITF field
#    Then I should fill "N/A" value in "reconParameterOrLambda" ITF field
#    Then I should fill "John Doe" value in "nameOfIndividualPreparingSyringe" ITF field
#    Then I should fill "Sara Smith" value in "nameOfIndividualInjectingPatient" ITF field
#    Then I should fill "All went well without any issues" value in "comments" ITF field
#    Then I should fill "Test123!" in Password ITF field
#    Then I should click on Submit ITF button
#    Then I should see a title of Create Submission page
#    Then I should wait some time
#    Then I should logout from the app
#    Then I should see a submit button in the login page
#    Then I should login as "image qc"
#    Then I should see a title of Dashboard page


