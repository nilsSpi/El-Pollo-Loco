class ThrowableObject extends MovableObject
{


    speedX=20;



    IMAGES_BOTTLE=[
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    constructor(x,y)
    {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x=x;
        this.y=y;
        this.height = 80;
        this.width = 60;
        this.throw();
    }


    throw()
    {
        this.speedY= 30;
        this.applyGravitation();
        setInterval(() =>{
            this.x += this.speedX;
            
        },25);
    }
}