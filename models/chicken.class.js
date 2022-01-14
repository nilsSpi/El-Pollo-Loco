class Chicken extends MovableObject {
  y = 350;
  height = 110;
  charger = false;
  enrage = 0;
  world;
  currentImg = 0;
  timeOfCreation;
  IMAGES_WALKING = [
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
  ];

  wasQuiet=true;
  alarmCall=new Audio('audio/alarmCall.mp3');

 
  

  constructor(xPosition) {
    super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
    this.x = xPosition + Math.random() * 500;
    this.isMob = true;
    this.timeOfCreation=new Date().getTime();
    
    this.speed = 0.55 + Math.random() * 0.85;
    this.loadImages(this.IMAGES_WALKING);
    if (Math.random() < 0.5) {
      this.charger = true;
    }
    this.charge();
    
    this.animate();
  }

  animate() {

    
      setInterval(() => {
        let timer=new Date().getTime();
        if(this.timeOfCreation+2000<timer && this.world.gameIsRunning && this.world ){
          this.moveLeft();
        }
       
      }, 1000 / 60);
  
      setInterval(() => {
        let timer=new Date().getTime();
        if(this.timeOfCreation+2000<timer && this.world.gameIsRunning && this.world ){

          this.playAnimation(this.IMAGES_WALKING);
  
          // impl charger mob
          if (Math.random() < 0.4 && this.charger) {
            this.speed = -0.1;
            this.enrage++;
            if (this.enrage > 20) {
              this.speed = 4;
    
            }
          }
        }

       
  
      }, 100);
     

  }

  charge() {
    if (this.charger) {
      this.speed = 1 + Math.random() * 0.5;
      this.height *= 1.3;
    }
  }

  callAlarm() {
    this.wasQuiet=false;
    this.alarmCall.play();

}
   

}