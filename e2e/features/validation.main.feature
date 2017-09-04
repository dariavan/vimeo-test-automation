Feature: Check elements via scrolling
  As a user
  I want to be able to scroll the page and view all elements attached to this page

  Background: Given I am at Home page

  Scenario Outline: Scrolling page and check visible elements
      And '<screen>' should be visible
     Then I scroll down '<count>' time(s)

    Examples:
    |screen             |count|
    |desktop            |5.5 |
    |phonePicture       |1.5  |
    |sliding            |0.8  |
    |video_ctrl         |1.5|
    |video              |4    |
    |soundtracks        |4  |
    |videolist          |5    |
    |creators           |5  |
