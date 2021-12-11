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
    energy=100;
    dmg=1;
    lastHit=0;

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

    /**
     * 
     * @param ctx -context variable , which is bounded to doc.getElebyId('canvas').getContext('2d')
     * 
     */

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
    let index=this.currentImg % images.length;
    let path= images[index];
    this.img=this.imgCache[path];
    this.currentImg++;
   }

  

   isAboveGround()
   {
       return this.y<180;
   }
    
   /**   gravity function via callback
    *    checks 1000/25 if object is in air or speed in y direction is greater than zero   
    *    if gravity is triggerd, the function updates y position of the object and than updates
    *    the speed in y direction by the acceleration
   */

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

  
    // jump increases speed in y direction of this object by the jumpstrength
   jump()
   {
    this.speedY=this.jumpStrength;
   }

   showHitbox(ctx)
   {
    if (this instanceof Character || this instanceof Chicken || this instanceof Endboss)
    {
        ctx.beginPath();
        ctx.lineWidth='5';
        ctx.strokeStyle="blue";
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();
    }     
   }

   /**
    * checks FOR an object if it is collding with parameter object
    * i.e. charcater.isColliding(enemies[1]) = false
    * @param object - object it want to check if its colliding with this
    */

   isColliding(object)
   {
       return this.x+this.width > object.x && this.y+this.height > object.y && this.x < object.x && this.y < object.y + object.height;
   }
   /**  takeDmg
    * represents this objected energy modified by the damage of enemy. if this is dead (<=0 energy) the energy will be set to 0.
    * @param enemy - enemy
   */
   takeDmg(enemy)
   {
    this.energy -= enemy.dmg;
    if (this.isDead(this)) { this.energy=0;}
    else {
        this.lastHit = new Date().getTime();
    }
   }

   isDead(object)
   {
       return object.energy <= 0;
   }

   /**
    * 
    * @returns boolean , object was taken damage in last 0.5 sekcunds
    */
   isHurt()
   {
    let timepassed = (new Date().getTime() - this.lastHit)/1000; // difference in s
    return timepassed < 0.5;

   }

}