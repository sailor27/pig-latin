
  var vowels = ["a", "e", "i", "o", "u", "y"]





$(document).ready(function() {


  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#sentence").val();
    var result = []

    vowels.forEach(function(vowel) {
      if (userInput.charAt(0) === vowel) {
        result = userInput += "ay";
      }

    });

    $("#output").text(userInput);

  });



});
