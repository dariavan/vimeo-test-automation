Feature: users in Vimeo
  As a user
  I want to be able to log in and to create a new user

  Scenario: Login in Vimeo
    Given I am at Home page
    Then I click 'login' button
    And I send 'mailfortest54@gmail.com' string to 'email' field to log in
    And I send 'test123test' string to 'password' field to log in
    Then I click Log in with email button
    Then I should be logged

  Scenario: Create a new user in Vimeo
    Given I am at Home page
    Then I click 'join' button
    Then Join form should be visible
    Then I send an unique '@gmail.com' email
    And I send 'Jon Snow' string to 'user name' field to create new user
    And I send 'password123' string to 'password' field to create new user
    Then I click Join with email button
    Then I should be redirected