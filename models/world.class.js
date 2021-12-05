class World {
ctx;

character= new Character();

canvas;

backgroundObjects=[
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',0,100)
];

clouds=[
    new Cloud()
];
   
enemies=[
    new Chicken(),
    new Chicken(),
    new Chicken(),


];

    constructor(canvas){
this.ctx=canvas.getContext('2d');
this.canvas=canvas;
this.draw();
    }
 
   

    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
       

this.addArrayToMap(this.backgroundObjects);
this.addArrayToMap(this.clouds);
this.addArrayToMap(this.enemies);
this.addToMap(this.character);

let self=this;
requestAnimationFrame( function (){self.draw();})
}

addArrayToMap(array)
{
array.forEach(object=>{
    this.addToMap(object);
});
}

    addToMap(object)
    {
        this.ctx.drawImage(object.img,object.x,object.y,object.width,object.height);
    }
}