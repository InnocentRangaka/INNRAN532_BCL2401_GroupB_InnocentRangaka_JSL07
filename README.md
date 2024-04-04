### INNRAN532_BCL2401_GroupB_InnocentRangaka_JSL07

# [JSL07] Submission: Proud of your Progress

This project allows users to generate personalized certificates of achievement through a form. Upon submission, the certificate displays in a modal window.

## Features:

Input Fields: Capture user's name, personalized message, and course name.
Certificate Generation: Creates a certificate with user-provided information.
Modal Display: Shows the generated certificate in a modal window.
Close Button: Allows users to close the modal window.
Validation: Ensures all form fields are filled before certificate generation.
Course Name Handling: Automatically appends "Course" if the user-provided course name doesn't already include it.

## Implementation:

Form Submission: Listens for form submissions and prevents default behavior.
Input Values: Retrieves user input from designated form elements.
Certificate Content Generation: Dynamically builds the certificate content using a template string, incorporating user input and predefined text.
Modal Handling: Controls the visibility of the modal window based on form submission and close button interaction.
Input Clearing: Resets the form input fields after successful certificate generation.
Modal Content Clearing: Removes the certificate content from the modal window upon closing.

## Code Structure:

The code utilizes an event listener for DOMContentLoaded to ensure elements are loaded before script execution. It defines variables for form elements, the modal, certificate content container, and the close button. The code implements the functionalities described above using event listeners and DOM manipulation techniques.