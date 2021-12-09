class World {
ctx;
keyboard;

camera_x=0;

character= new Character();

canvas;

backgroundObjects=level1.backgroundObjects;

clouds=level1.clouds;
   
enemies=level1.enemies;

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

this.addArrayToMap(this.backgroundObjects);
this.addArrayToMap(this.clouds);
this.addArrayToMap(this.enemies);
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

    loadBackgroundWidth(width)
    {
        for (let i=1;i<width;i++)
        {
            let temp1=new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',i*719);
            let temp2=new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png',i*719);
            let temp3=new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png',i*719);
            let temp4=new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png',i*719);
            i++;
           
            this.backgroundObjects.push(temp1,temp2,temp3,temp4);
            temp1=new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',i*719);
            temp2=new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',i*719);
            temp3=new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png',i*719);
            temp4=new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png',i*719);
            
           
            this.backgroundObjects.push(temp1,temp2,temp3,temp4);
            i--;
            temp1=new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',-i*719);
            temp2=new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png',-i*719);
            temp3=new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png',-i*719);
            temp4=new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png',-i*719);
            i++;
           
            this.backgroundObjects.push(temp1,temp2,temp3,temp4);
            temp1=new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',-i*719);
            temp2=new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',-i*719);
            temp3=new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png',-i*719);
            temp4=new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png',-i*719);
           
            this.backgroundObjects.push(temp1,temp2,temp3,temp4);

        }
    }
}