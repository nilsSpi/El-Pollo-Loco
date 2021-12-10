class MovableObject {
    x=120;
    y=300;
    speed=0.15;
    speedY=0;
    acceleration=2.5;
    jumpStrength=30;
    img;
    imgCache={};
    currentImg=0;
    height=150;
    width=100;
    otherDirection=false;

    loadImage(path){
        this.img= new Image();
        this.img.src= path;
    }
    /** 
    * animate character movement
    *@param {Array} arr -["img1.png,img2.png,..."]
    */
    loadImages(arr)
    {
        arr.forEach(path=>{
            let img=new Image();
            img.src=path;
            this.imgCache[path]=img;
        });
       
    }

    draw(ctx)
    {
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }

     moveRight() {
        this.x+=this.speed;
        this.otherDirection=false;
    }

    moveLeft()
   {
        this.x-=this.speed;
        
   
   }

   playAnimation(images)
   {
    let index=this.currentImg % this.IMAGES_WALKING.length;
    let path= images[index];
    this.img=this.imgCache[path];
    this.currentImg++;
   }

   isAboveGround()
   {
       return this.y<180;
   }

   

   applyGravitation()
   {
       setInterval(() => {
           if (this.isAboveGround() || this.speedY>0)
           {
               this.y -= this.speedY;
               this.speedY -= this.acceleration;
           }
           
       }, 1000/25);
   }

   jump()
   {
    this.speedY=this.jumpStrength;
   }

   showHitbox(ctx)
   {
       ctx.beginPath();
       ctx.lineWidth='5';
       ctx.strokeStyle="blue";
       ctx.rect(this.x,this.y,this.width,this.height);
       ctx.stroke();
   }

}