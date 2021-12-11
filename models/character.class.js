class Character extends MovableObject{
   world;
   height=280;
   y=80;
   speed=10;
   jumpStrength=32;
   IMAGES_WALKING=[
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
   'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
    ];

   currentImg=0;
    constructor(){
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravitation();
        this.animate();
    }

    animate()
    {
       // checks leagal and demanded characterMovment and up dates camera
        setInterval(() => {

            if (this.world.keyboard.SPACE && !this.isAboveGround())
            { 
                this.jump();
            }

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x)
            {
                this.otherDirection=false;
                this.moveRight();
            }
            if (this.world.keyboard.LEFT && this.x>0)
            {
                this.otherDirection=true;
                    this.moveLeft();
                    
            }


       
          this.world.camera_x= -this.x+100;

            }, 1000/60);



            setInterval(() => 
            {       
            if (this.isAboveGround())
            {
                this.playAnimation(this.IMAGES_JUMPING);
            }

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT)
                {
               
                    // Walk anmimation
                    
                      this.playAnimation(this.IMAGES_WALKING);
                }   
            }, 50);
       
           
    }

   
}