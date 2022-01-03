class ThrowableObject extends MovableObject
{

    
    speedX=20;
    exploded=false;
    



    IMAGES_BOTTLE=[
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_EXPLOSION=[
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ];


    IMAGES_ROTATE=[
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
    ];

    constructor(x,y)
    {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES_ROTATE);
        this.loadImages(this.IMAGES_EXPLOSION);
        this.x=x;
        this.y=y;
        this.height = 80;
        this.width = 60;
        this.throw();
        this.animate();
    }


    throw()
    {

            this.speedY= 20;
            this.applyGravitation();
            setInterval(() =>{
                this.x += this.speedX;
                
            },25);

    }


    explode()
    {
      //  delete this.throw();
      //  delete this.animate();
      //  setInterval(() => {
      //      this.playAnimation(this.IMAGES_EXPLOSION);
      //  }, 20);
       // this.applyGravitation();

       this.exploded=true;

    }

    animate()
    {   
        
            setInterval(() => {
                if(!this.exploded){
                this.playAnimation(this.IMAGES_ROTATE);
                 }

                  if(this.exploded){
                    this.playAnimation(this.IMAGES_EXPLOSION);
                  }
            }, 20);
       
       
       
    }



}