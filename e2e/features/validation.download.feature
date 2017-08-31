Feature: Check download parameters
  As a user
  I want to be able to click download button and be sure that information about the application is as expected

  Scenario: Check download button and parameters
    Given I am at Home page
    Then I click 'download' button
    And I wait for Itunes page to load
    And verify actual 'last update' equals expected 'Sep 12, 2016'
    And verify actual 'version' equals expected '2.3.1'
    And verify actual 'size' equals expected 'Size: 120 MB'
    Then I am at Home page