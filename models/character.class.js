class Character extends MovableObject{
   world;
   height=280;
   y=180;
   speed=10;
   IMAGES_WALKING=[
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
   currentImg=0;
    constructor(){
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate()
    {
        // move right if arrow right is pressed
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x)
            {
                this.x+=this.speed;
                this.otherDirection=false;
            }
        }, 1000/60);
        // move left if arrow left is pressed
        setInterval(() => {
            if (this.world.keyboard.LEFT && this.x>0)
            {
                this.x-=this.speed;
                this.otherDirection=true;
            }
            this.world.camera_x= -this.x+100;
        }, 1000/60);

        setInterval(() => {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)
        {
            
            // Walk anmimation
            
              this.playAnimation(this.IMAGES_WALKING);
        }   
            }, 50);
       
      
        
    }

    jump(){
console.log('character jumped!');
    }
}