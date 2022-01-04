class Cloud extends MovableObject
{
    y=20;
    width=500;
    height=150;
    
   constructor(xPosition)
   {
       super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
       this.x=xPosition+Math.random()*500;
       this.animate();
       
   }
   animate()
   {
       setInterval(() => {
        this.moveLeft();
       }, 1000/60);
      
   }

  
}