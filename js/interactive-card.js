const cardSpacing = /(.{1,4})/g; // Regex to help add space every 4 characters
const expirationFormat = /(.{2})\/(.{2})$/; // Regex will capture the date fields

/*
 * Code handles the interactive card when user inputs information
 * into the form. It will update the card with the information. It
 * also handles cases when there is no input (i.e default value)
 */
$(document).ready(function() {

  $('#card-number-input').on("input", function() {
    let cardNumber = this.value;

    if(cardNumber.length === 0) {
      $('#card-number').text("0000 0000 0000 0000");
    }
    else {
      let tokens = cardNumber.split(' ').join(''); // This will split by whitespace and join together without spaces
      let cardNumberSpace = tokens.match(cardSpacing).join(' ').trim(); // Space in groups with AT MOST 4 characters
      $('#card-number-input').val(cardNumberSpace);
      $('#card-number').text(cardNumberSpace);
    }
  });

  $('#card-holder-input').on("input", function() {
    let cardHolder = this.value;

    if(cardHolder.length === 0) {
      $('#card-holder').text("Jane Appleseed");
    }
    else {
      $('#card-holder').text(cardHolder);
    }
  });

  $('#expiration-month').on("input", function() {
    let month = this.value;

    let tokens = $(expiration).text().match(expirationFormat);
    if(month.length === 0) {
      $('#expiration').text(`MM/${tokens[2]}`);
    }
    else if(month.length === 1) {
      $('#expiration').text(`0${month}/${tokens[2]}`);
    }
    else {
      $('#expiration').text(`${month}/${tokens[2]}`);
    }
  });

  $('#expiration-year').on("input", function() {
      let year = this.value;

      let tokens = $(expiration).text().match(expirationFormat);
      if(year.length === 0) {
        $('#expiration').text(`${tokens[1]}/YY`);
      }
      else if(year.length === 1) {
        $('#expiration').text(`${tokens[1]}/0${year}`);
      }
      else {
        $('#expiration').text(`${tokens[1]}/${year}`);
      }
  });

  $('#cvc-input').on("input", function() {
    let cvc = this.value;

    if(cvc.length === 0) {
      $('#cvc').text("000");
    }
    else  {
      $('#cvc').text(cvc);
    }
  });
});
