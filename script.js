var heading=document.getElementById('colourValue');
var buttons = document.getElementsByClassName('colourButton');

var answerMessage= document.getElementById('answer')

startGame(); 

function startGame(){

    for (var j =0; j< buttons.length; j++){
      buttons[j].innerHTML="";
    }
    for (var x=0; x<buttons.length; x++){
      buttons[x].removeAttribute('disabled');
    }
    var num=0;

    var answerButton= Math.round(Math.random()*(buttons.length-1)); //Random value starting from 0 until buttons' length
  

  answerMessage.innerHTML="";

 for (var i=0; i < buttons.length; i++ ) {
  var red= makeColourValue();
  var green= makeColourValue();
  var blue= makeColourValue();

  setButtonColour(buttons[i], red, green, blue);

//In refresh a new random RGB is created
  if (i===answerButton){ //i will get a random value between 0 and 5
    heading.innerHTML='('+red+','+green+','+blue+')';
  }

  buttons[i].addEventListener('click',function(){
   if (this===buttons[answerButton]){ 
     answerMessage.innerHTML = 'Correct!';

     for (var z=0; z< buttons.length; z++){
       buttons[z].disabled='TRUE';
     }
   } else {
      if (num<1){
        answerMessage.innerHTML= 'Game over!';
        for (var z=0; z< buttons.length; z++) {
          buttons[z].innerHTML="";
        }
        buttons[answerButton].innerHTML= 'Correct!';
      }
    else{
     answerMessage.innerHTML = 'Game over! Reset and try again!';
   }
    num++;
   }
});
}
}


function setButtonColour (button, red, green, blue){ 
  button.setAttribute('style','background-color: rgb('+red+','+green+','+blue+');');
}

function makeColourValue(){ //den exei orismata ara 3ekinaei kateu8eian molis thn kalesoume
  return Math.round(Math.random()*255); //mathrandom: dekadikes tyxaies times apo 0-1, mathround: strogyllopoiei tis times
}

document.getElementById('resetButton').addEventListener('click',startGame);
