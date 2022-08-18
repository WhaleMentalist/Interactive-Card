
/**
 * Input validation is handled by a plugin called
 * 'jQuery Validation Plugin'
 */
$(document).ready(function() {
    $("#card-input-form").validate({
      errorPlacement: function(error, element ) {
        let id = element.attr('id');
        if (id === 'expiration-month' || id === 'expiration-year') {
          error.insertAfter($('#expiration-month').parent());
          $('#expiration-year').addClass('semi-valid');
          $('#expiration-month').addClass('semi-valid');
        }
        else {
          error.insertAfter(element); // Default behavior
        }
      },
      groups: {
        expiration: 'expiration-month expiration-year',
      },
      rules: {
        'card-holder': {
          required: true,
          minlength: 3,
        },
        'card-number': {
          required: true,
          pattern: /^([\d]{4}[\s])*([\d]{1,4})$/,
          minlength: 19,
        },
        'expiration-month': {
          required: true,
          pattern: /^0[1-9]|[1-9]|1[0-2]/,
        },
        'expiration-year': {
          required: true,
          pattern: /^0[1-9]|[1-9][0-9]/,
        },
        'cvc': {
          required: true,
          pattern: /^[0-9]{3}/,
          minlength: 3,
          maxlength: 3,
        },
      },
      messages: {
        'card-holder': {
          minlength: "Name should be at least 3 characters"
        },
        'card-number': {
          minlength: "Credit card number should have at least 16 digits",
          pattern: "Wrong format, numbers only"
        },
        'expiration-month': {
          pattern: "Enter valid value"
        },
        'expiration-year': {
          pattern: "Enter valid value"
        },
        'cvc': {
          pattern: "Wrong format, 3 digit number only"
        },
      },
  });
});
