$(document).ready(function() {
    
  var quotes;
  var random;
  var randomQuote;
      
  $("#new-quote").on("click", function(){      
    
    quotes = [
        "Not all those who wander are lost.",
        "All we have to decide is what to do with the time that is given us.",
        "There’s some good in this world, Mr. Frodo. And it’s worth fighting for.",
        "It's the job that's never started as takes longest to finish.",
        "Even the smallest person can change the course of the future.",
        "Where there's life there's hope, and need of vittles.",
        "I’ll get there, if I leave everything but my bones behind",
        "But in the end it's only a passing thing, this shadow; even darkness must pass.",
        "Yet dawn is ever the hope of men.",
        "Remember today, little brother. Today, life is good.",          
        "Courage is the best defense that you have now.",
        "Home is behind and the world ahead."
    ];
    random = Math.floor(Math.random()*quotes.length);
    randomQuote = quotes[random];
        
    $(".quote").text(randomQuote); 
  });
      
  $("#tweet-quote").on("click", function(){      
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote) 
  }); 
  
  if ($(window).width() <= 650) {
    $("#image").show();
  }
  if ($(window).width() > 650) {
      $("#image").hide();
  }

  $(window).resize(function() {
      location.reload();
  });
});
     
      
    