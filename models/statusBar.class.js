class StatusBar extends DrawableObject
{
    percentage=100;

    IMAGES_HP=[
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];


    constructor ()
    {
        super();
        this.loadImages(this.IMAGES_HP);
        
        this.x=20;
        this.y=0;
        this.width=200;
        this.height=60;
        this.setPercentage(100);
    }


/**
 * sets this img to the right img from imgCache, corresponding to the percnetage of energy
 * @param {int} percentage - the percentage of energy
 */

    setPercentage(percentage)
    {
        this.percentage=percentage;
        let imgPath= this.IMAGES_HP[this.bindPercentageToIndex()];
        this.img = this.imgCache[imgPath];
    }

    bindPercentageToIndex()
    {
        if (this.percentage==100)
        {
            return 4;
        } 
        else if (this.percentage > 80)
        {
            return 4;
        }
        else if (this.percentage > 60)
        {
            return 3;
        }
        else if (this.percentage >40)
        {
            return 2;
        }
        else if (this.percentage >20)
        {
            return 1;
        }
        else  
        {
            return 0;
        }
    }
}