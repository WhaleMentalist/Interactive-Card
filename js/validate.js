/*
 * Took regular expression directly from below link:
 * https://stackoverflow.com/questions/20430391/regular-expression-to-match-credit-card-expiration-date
 */
const nonEmptyString = /.*\S.*/;
const monthRegex = /^0[1-9]|1[0-2]/;
const yearRegex = /^0[1-9]|[1-9][0-9]/;

const inputName = /(.*)\-/ // Capture everything until last occurence of hyphen

/*
 * This portion of code is responsible for validating the input from the user.
 * Since credit card validation is a complex topic, I chose to keep it simple
 * for the exercise. These types of validation are better handled by
 * a framework or a library.
 */
$(document).ready(function() {
  $("#card-input-form").validate({
    debug: true,
    rules: {
      'card-holder': {
        required: true,
        minlength: 3
      },
      'card-number': {
        required: true,
        pattern: /^([\d]{4}[\s])*([\d]{1,4})$/,
        minlength: 19,
      },
    },
    messages: {
      'card-holder': {
        minlength: "Name should be at least 3 characters"
      },
      'card-number': {
        minlength: "Credit card number should have at least 16 digits",
        pattern: "Wrong format, numbers only"
      }
    },
  });
});
