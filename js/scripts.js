//business logic
  var vowels = ["a", "e", "i", "o", "u", "y"]
  var firstie;
  var pigLatin;



//front end
$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#sentence").val().split(" ");

    vowels.forEach(function(vowel) {
      if (userInput[0].charAt(0) === vowel) {
        result = userInput += "ay";
      }

    });

    $("#output").text(userInput);
  });

});
