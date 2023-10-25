
for(var i =0 ; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handelclick);
}

// Event listener for keydown event
document.addEventListener("keydown", function(event) {
   var s =  event.key.toLowerCase();
   play(s);
  });

function handelclick(){
   var x = this.innerHTML;
   play(x);
}


function play(key){

    switch (key) {
        case "w":   var audio1 = new Audio('/sounds/tom-1.mp3');
                    audio1.play();
                    break;
        case "a":   var audio1 = new Audio('/sounds/tom-2.mp3');
                    audio1.play();
                    break;
        case "s":   var audio1 = new Audio('/sounds/tom-3.mp3');
                    audio1.play();
                    break;
        case "d":   var audio1 = new Audio('/sounds/tom-4.mp3');
                    audio1.play();
                    break;
        case "j":   var audio1 = new Audio('/sounds/snare.mp3');
                    audio1.play();
                    break;
        case "k":   var audio1 = new Audio('/sounds/kick-bass.mp3');
                    audio1.play();
                    break;
        case "l":   var audio1 = new Audio('/sounds/crash.mp3');
                    audio1.play();
                    break;
       
            default:
            break;
       }

}

