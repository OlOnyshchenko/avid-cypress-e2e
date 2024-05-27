Feature: Submission Creation

  Scenario: Enter valid values - Positive flow
    # Loging to the system as Submitter
    Then I should visit login page
    Then I should see a submit button in the login page
    Then I should login as "image qc"
    Then I should see a title of Dashboard page
    Then I should go to "task list"
    Then I should see a workflow tasks title
    Then I should click on task in task list
