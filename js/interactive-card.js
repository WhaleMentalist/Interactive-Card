const cardSpacing = /(.{1,4})/g; // Regex to help add space every 4 characters

$(document).ready(function() {

  $('#card-num-input').on("input", function() {
    let cardNumber = this.value;

    if(this.value.length === 0) {
      $('#card-num').text("0000 0000 0000 0000");
    }
    else {
      let tokens = cardNumber.split(' ').join('');
      let cardNumberSpace = tokens.match(cardSpacing).join(' ').trim();
      $('#card-num-input').val(cardNumberSpace);
      $('#card-num').text(cardNumberSpace);
    }
  });

});
