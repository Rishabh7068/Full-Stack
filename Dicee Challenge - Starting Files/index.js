var x = Math.floor(Math.random()*6)+1;
var y = Math.floor(Math.random()*6)+1;

var im1 = "/images/dice"+x+".png";
var im2 = "/images/dice"+y+".png";

onload = document.querySelector(".img1").setAttribute("src",im1);
onload = document.querySelector(".img2").setAttribute("src",im2);

if(x === y){
    onload = document.querySelector("h1").innerHTML="Draw";
}else if( x > y){
    onload = document.querySelector("h1").innerHTML="🏆 Player 1 Wins!";
}else{
    onload = document.querySelector("h1").innerHTML="🏆 Player 2 Wins!";
}




