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
this.drawCanvas();
this.setWorld();
this.checkCollisions();
    }
 
    setWorld()
    {
        this.character.world= this;
    }



    /**
     * checks every 20 ms for collision of any enemy with the character.
     * 
    */
    checkCollisions() 
    {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy))
                {
                    console.log("character collison detected with", enemy);
                }
            });
        }, 20);
    }


    drawCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
       this.ctx.translate(this.camera_x,0);

this.addArrayToMap(this.level.backgroundObjects);
this.addArrayToMap(this.level.clouds);
this.addArrayToMap(this.level.enemies);
this.addToMap(this.character);
this.ctx.translate(-this.camera_x,0);

let self=this;
requestAnimationFrame( function (){self.drawCanvas();})
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
           this.flipImage(object);
        }
        object.draw(this.ctx);

        object.showHitbox(this.ctx);

        if (object.otherDirection)
        {
           this.flipImageBack(object);
        }
    }

    flipImage(object)
    {
        this.ctx.save();
        this.ctx.translate(object.width,0);
        this.ctx.scale(-1,1);
        object.x=object.x*-1;
    }

    flipImageBack(object)
    {
        object.x=object.x*-1;
        this.ctx.restore();
    }

    
}