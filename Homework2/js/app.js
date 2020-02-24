var score = 0;

$(document).ready(function(){
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='feeling']:checked").val();
        if(radioValue == "sad"){
            score += 0;
        } else if(radioValue == "neutral") {
            score += 5;
        } else if(radioValue == "happy") {
            score += 10                        
        }
    });
});

$(document).ready(function(){
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='typical']:checked").val();
        if(radioValue == "sad"){
            score += 0;
        } else if(radioValue == "out") {
            score += 5;
        } else if(radioValue == "happy") {
            score += 10                        
        }
    });
});

$(document).ready(function(){
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='ok']:checked").val();
        if(radioValue == "yes"){
            score += 5;
        } else if(radioValue == "no") {
            score += 3;
        } 
    });
});

$(document).ready(function(){
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='behind']:checked").val();
        if(radioValue == "yes"){
            score += 5;
        } else if(radioValue == "no") {
            score += 3;
        } 
    });
});


$("#button").on("click", function() {
    if(score < 5) {
        $("#result").html("You got a score of " + score + ". I understand that you may be in a hard point but please stay strong. Please try consulting Crisis textline by Texting CONNECT to 741741");
    } else if(score > 5 && score < 10) {
        $("#result").html("You got a score of " + score + ". This is not bad at all. You are conscious of your mindset but stuck in the middle of happiness and sadness. Just there but that is ok, take it one step at a time and find solace in the things that make you happy right now.");
    } else {
        $("#result").html("Great to hear that you are happy and fine with who you are. Keep it up and take life 1 day at a time!");
    }                
});