class Character extends MovableObject{
   height=280;
   y=180;
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
        setInterval(() => {
            let index=this.currentImg % this.IMAGES_WALKING.length;
            let path= this.IMAGES_WALKING[index];
            this.img=this.imgCache[path];
             this.currentImg++;
               
        }, 1000);
        
    }

    jump(){
console.log('character jumped!');
    }
}