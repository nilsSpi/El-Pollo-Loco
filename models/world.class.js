class World {
ctx;
keyboard;

character= new Character();

canvas;

backgroundObjects=[
    new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',0),
    new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',0),
    new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png',0),
    new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png',0)
];

clouds=[
    new Cloud()
];
   
enemies=[
    new Chicken(),
    new Chicken(),
    new Chicken(),


];

    constructor(canvas,keyboard){
this.ctx=canvas.getContext('2d');
this.canvas=canvas;
this.keyboard=keyboard;
this.draw();
this.setWorld();
    }
 
    setWorld()
    {
        this.character.world= this;
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
        if(object.otherDirection)
        {
            this.ctx.save();
            this.ctx.translate(object.width,0);
            this.ctx.scale(-1,1);
            object.x=object.x*-1;
        }
        this.ctx.drawImage(object.img,object.x,object.y,object.width,object.height);
        if (object.otherDirection)
        {
            object.x=object.x*-1;
            this.ctx.restore();
        }
    }
}