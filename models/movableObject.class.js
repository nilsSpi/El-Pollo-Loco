class MovableObject extends DrawableObject {
   
    speed=0.15;
    speedY=0;
    acceleration=3;
    jumpStrength=30;
   
    otherDirection=false;
    energy=100;
    dmg=3;
    lastHit=0;

   
    playAnimation(images)
    {
     let index=this.currentImg % images.length;
     let path= images[index];
     this.img=this.imgCache[path];
     this.currentImg++;
    }
  

     moveRight() {
        this.x+=this.speed;
        this.otherDirection=false;
    }

    moveLeft()
   {
        this.x-=this.speed;
   }

   isAboveGround()
   {
       if (this instanceof ThrowableObject)
       {
           return true;
       }
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

  

   /**
    * checks FOR an object if it is collding with parameter object
    * i.e. charcater.isColliding(enemies[1]) = false
    * @param object - object it want to check if its colliding with this
    */

   isColliding(object)
   {
       if (this instanceof Character)
       {
           return this.x+this.width > object.x && this.y+this.height > object.y +80 && this.x < object.x && this.y +80 < object.y + object.height;
       }
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
    return timepassed < 0.3;

   }

 

}