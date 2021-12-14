class GoldChicken extends MovableObject{


    y = 350;
    height = 110;
    charger = false;
    enrage = 0;
    speed=1;
    
  
    currentImg = 0;
    IMAGES_WALKING = [
      'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
      'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
      'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];


    constructor()
    {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png');
        this.x = 300 + Math.random() * 500;
        this.loadImages(this.IMAGES_WALKING);
        this.hop();
        this.animate();
    }

    animate() {

        setInterval(() => {
          this.moveLeft();
        }, 1000 / 60);
    
        setInterval(() => {
    
          this.playAnimation(this.IMAGES_WALKING);
    
         
    
        }, 100);
    
      }
    

    hop() { 
              
              setInterval(() => {
                
                if (this.y<350 || this.speedY>0)
                {
                  
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
                else {
                  this.speedY=20;
                }
                
            }, 1000/25);        
      
      }
}