# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: (https://github.com/WhaleMentalist/Interactive-Card)
- Live Site URL: (https://whalementalist.github.io/Interactive-Card/)

## My process

### Built with

- HTML5
- CSS
  * Flexbox
  * Grids
  * Linear Gradient Borders
- jQuery
  * jQuery Validation Plugin

### What I learned

One of the weirdest tricks I learned was adding a linear gradient on a border for the input fields of the form. It is actually a non-trivial problem that required research and Stack Overflow reading.

Below is the CSS used to add a linear gradient color on a border:

```css
input[type="text"]:focus {
  border: double 2px transparent;
  background-image: linear-gradient(var(--white), var(--white)),
                    linear-gradient(to right, var(--violet), var(--dark-purple));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
```

The key is to use the 'background-image' to color the inner box and outer box that is defined by the 'background-origin' and the 'background-clip'. You cannot add a linear gradient to the 'border-color' property.

Another concept I learned was formatting input as the user entered values into the fields. This was a particularly difficult task without libraries to help. I managed to implement a regular expression that formatted the text into a 'XXXX XXXX XXXX XXXX' format. This task, although tedious, is worth the effort because splitting numbers into groups helps the user verify their input more easily.

Although the formatting was correct and accurate, it caused the input cursor position to become mismatched as the user grew or shrank the text. This required logic that checked the input shrank or the cursor was on whitespace. If it was the cursor position did not need adjustments. When the text grew due to a whitespace insertion the cursor position was moved by the difference in size between the input value and the input value with the space.

```js
$('#card-number-input').on("input", function() {
  let start = this.selectionStart;
  let cardNumber = this.value;

  if(cardNumber.length === 0) {
    $('#card-number').text("0000 0000 0000 0000"); // Placeholder
  }
  else {
    let tokens = cardNumber.split(' ').join(''); // This will split by whitespace and join together without spaces
    let cardNumberSpace = tokens.match(cardSpacing).join(' ').trim(); // Space in groups with AT MOST 4 characters

    let diff = cardNumberSpace.length - cardNumber.length; // Use difference to know if input has grown or shrunk

    $('#card-number-input').val(cardNumberSpace);

    // Set to start position if current position at whitespace or input shrinks from deletion
    if(whitespace.test(cardNumberSpace[start]) || diff < 0) {
      $('#card-number-input')[0].setSelectionRange(start, start);
    }
    else {
      $('#card-number-input')[0].setSelectionRange(start + diff, start + diff); // Account for adding whitespace when formatting text
    }
    $('#card-number').text(cardNumberSpace);
  }
});
```

Finally, I utilized the jQuery Validation Plugin to handle form validation and errors. This greatly sped up the development process and helped with the tedious nature of input validation.

### Continued development

I would like to look into using React in this challenge, which will help in my learning of Front-End frameworks. I would also like to look deeper into how validation is handled in forms, it turns out it is a non-trivial task without libraries and plugins helping.

### Useful resources

- [Linear Gradient Border](https://stackoverflow.com/questions/6619818/is-it-possible-to-make-a-gradient-border) - This clarified how to create a linear gradient on a border. It is a non-trivial and 'lateral-thinking' type solution. There are some REALLY brilliant people out there.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/WhaleMentalist)
