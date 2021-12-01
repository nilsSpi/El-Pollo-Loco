"use strict";
let canvas;
let ctx;
let character=new Image();
function init(){
canvas= document.getElementById('canvas');
ctx=canvas.getContext('2d');
character.src='../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png';

// nur zur veranschulichung: zeichne character
setTimeout(function(){
    ctx.drawImage(character,20,20,50,150)
},2000);

}