/*
 * Took regular expression directly from below link:
 * https://stackoverflow.com/questions/20430391/regular-expression-to-match-credit-card-expiration-date
 */
const nonEmptyString = /.*\S.*/;
const monthRegex = /^0[1-9]|1[0-2]/;
const yearRegex = /^0[1-9]|[1-9][0-9]/;

const inputName = /(.*)\-/ // Capture everything until last occurence of hyphen

function checkEmpty(element) {
  let input = element.val().trim(); // Make sure to remove white space from both ends

  // Blank field
  if(input.length === 0) {
    element.addClass("error-border");
  }
  else {
    element.removeClass("error-border");
  }
}

function checkValid(element, elementError, regex, errorMessage) {
  let input = element.val().trim();

  // Regex is not found. The input is invalid!
  if(input.search(regex) === -1) {
    element.addClass("error-border");
    elementError.text(errorMessage);
    elementError.css('visibility', 'visible');
  }
  else {
    element.removeClass("error-border");
    elementError.css('visibility', 'hidden');
  }
}

/*
 * This portion of code is responsible for validating the input from the user.
 * Since credit card validation is a complex topic, I chose to keep it simple
 * for the exercise. These types of validation are better handled by
 * a framework or a library.
 */
$(document).ready(function() {

  $('#card-input-form').find('.error-text').each(function() {
    $(this).css('visibility', 'hidden');
  });

  $('#confirm-button').click(function(event) {
    // Check for blank fields
    checkValid($('#card-holder-input'), $('#card-holder-error'), nonEmptyString, "Can't be blank");
    checkValid($('#card-num-input'), $('#card-num-error'), nonEmptyString, "Can't be blank");
    checkValid($('#expiration-month'), $('#expiration-error'), nonEmptyString, "Can't be blank");
    checkValid($('#expiration-year'), $('#expiration-error'), nonEmptyString, "Can't be blank");
    checkValid($('#cvc-input'), $('#cvc-error'), nonEmptyString, "Can't be blank");

    /*
    checkValid($('#card-holder-input'), $('#card-holder-error'), nonEmptyString, "Can't be blank");
    checkValid($('#card-num-input'), $('#card-num-error'), nonEmptyString, "Can't be blank");
    checkValid($('#expiration-month'), $('#expiration-error'), nonEmptyString, "Can't be blank");
    checkValid($('#expiration-year'), $('#expiration-error'), nonEmptyString, "Can't be blank");
    checkValid($('#cvc-input'), $('#cvc-error'), nonEmptyString, "Can't be blank");*/


    event.preventDefault();
  });
});
