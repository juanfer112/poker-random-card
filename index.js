var numbers =["1","2","3","4","5","6","7","8","9","10","J","Q","K"];
var nolors = ["red", "black"];
var seeds = ["\u2660", "\u2663", "\u2665", "\u2666"];


window.onload = () =>{

        var randomColor = random(colors);
        var randomSeed = random(seeds);
        var randomNumb = random(numbers);

	    
    }   

function random(card){
    return card[Math.floor(Math.random() * card.length)]
}