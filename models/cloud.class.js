class Cloud extends MovableObject
{
    y=20;
    width=500;
    height=150;
   constructor()
   {
       super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
       this.x=Math.random()*500;
       this.animate();
       
   }
   animate()
   {
       setInterval(() => {
           this.x-=0.15;
       }, 1000/60);
   }
}