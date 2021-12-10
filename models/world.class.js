class World {
ctx;
keyboard;

camera_x=0;

character= new Character();

canvas;

level=level1;


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
       this.ctx.translate(this.camera_x,0);

this.addArrayToMap(this.level.backgroundObjects);
this.addArrayToMap(this.level.clouds);
this.addArrayToMap(this.level.enemies);
this.addToMap(this.character);
this.ctx.translate(-this.camera_x,0);

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