var numbers =["1","2","3","4","5","6","7","8","9","10","J","Q","K"];
var colors = ["red", "black"];
var seeds = ["\u2660", "\u2663", "\u2665", "\u2666"];

window.onload = () =>{
generateCard()
}

    
function generateCard () {

    var randomSeed = random(seeds);
    var randomNumb = random(numbers);
    var randomColor = (randomSeed == "\u2660") || (randomSeed == "\u2663") ? "black" : "red";


    container = document.createElement("div");       
    container.className = "container-card";
    card = document.createElement("div");       
    card.className = "cards";
         



        seed = document.createElement("div");   
        seed.className = "seed";     
        
        symbol = document.createTextNode(randomSeed); 
        seed.appendChild(symbol);
        seed.style.color = randomColor;

        seed2 = document.createElement("div");   
        seed2.className = "seed2";
       
        symbol2 = document.createTextNode(randomSeed);        
        seed2.appendChild(symbol2);
        seed2.style.color = randomColor;

        numberElement = document.createElement("div");   
        numberElement.className = "numb";
       
        number = document.createTextNode(randomNumb);        
        numberElement.appendChild(number);
        numberElement.style.color = "black";

        document.body.appendChild( container );    
        container.appendChild(card)
        card.appendChild(seed);
        card.appendChild(numberElement);
        card.appendChild(seed2);
        

}    
function random(card){
    return card[Math.floor(Math.random() * card.length)]
}
