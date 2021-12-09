class Chicken extends MovableObject {
  y=350;
  height=110;
  charger=false;
  timeOut=0;

  currentImg=0;
  IMAGES_WALKING=[
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
  ];
  
  constructor(){
      super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
      this.x=200+ Math.random()*500;
      this.speed=0.15+Math.random()*0.5;
      this.loadImages(this.IMAGES_WALKING);
      if(Math.random()<0.5)
      {
        this.charger=true;
      }
      this.charge();
      this.animate();
  }

  animate()
  {  
    this.moveLeft();
      setInterval(() => {
          let index=this.currentImg % this.IMAGES_WALKING.length;
          let path= this.IMAGES_WALKING[index];
          this.img=this.imgCache[path];
           this.currentImg++;
           // impl charger mob
           if(Math.random()<0.5 && this.charger )
      {
        this.speed=-0.1;
        this.timeOut++;
        if(this.timeOut>20)
        {
          this.speed=4;
          
        }
      }
             
      }, 100);
      
  }

  charge()
  {
   if (this.charger){
     this.speed=1+Math.random()*0.5;
     this.height*=1.3;
   }
  }
}