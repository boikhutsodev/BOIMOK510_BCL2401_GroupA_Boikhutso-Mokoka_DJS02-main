# Whole Number Divider

This project focuses on enhancing a web-based Whole Number Divider application. It's designed to help students apply their knowledge of error handling, guided by specific user stories. Before proceeding, familiarise yourself with the Gherkin syntax, a crucial tool for understanding user stories and requirements. Refer to the provided reading materials for a comprehensive guide. Below is the HTML and JavaScript code for a “Whole Number Divider”. At the moment it only meets two user stories (see below under “Resolved Stories”). Please ensure that it meets all user stories listed below:

## Usage

- Clone or download this repository to your local machine.

- Open the project folder in Visual Studio Code.

- Navigate to the index.html file and open it in a web browser.

- Enter a value for the dividend and the divider in the input fields provided.

- Click the "Calculate" button to perform the division.

- The result of the division will be displayed below the form.

## This JavaScript code performs the following steps:

- It selects the form and result elements from the HTML document using their data attributes.
- It adds an event listener to the form's submit event.
- When the form is submitted, it prevents the default form submission behavior.
- It retrieves the values of the dividend and divider inputs from the form.
- It checks if either input is empty, displays an error message if so, and exits the function.
- It converts the input values to numbers and checks if they are valid numbers.
- It checks if the divider is zero, displays an error message if so, and exits the function.
- It performs the division and displays the result in the result element.

### Challenges

- _Error Handling_: Implementing robust error handling to handle various scenarios such as invalid input values, division by zero, or critical errors.
- _User Input Validation_: Validating user input to ensure that only numeric values are accepted and preventing submission of invalid or empty inputs.
- _Edge Cases_: Handling edge cases such as very large or very small numbers, fractions, or negative numbers.
- _Testing_: Thoroughly testing the application to ensure that it performs calculations accurately and handles all possible scenarios gracefully.
