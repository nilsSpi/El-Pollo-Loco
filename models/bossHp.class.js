class BossHp extends StatusBar
{

    IMAGES_BOSSHP = [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png'
    ]

    constructor(){
        super();
        this.loadImages(this.IMAGES_BOSSHP);
        this.setBossPercentage(100);
    }


    /**
 * sets this img to the right img from imgCache, corresponding to the percnetage of energy
 * @param {int} percentage - the percentage of energy
 */

     setBossPercentage(percentage)
     {
         this.percentage=percentage;
         let imgPath= this.IMAGES_BOSSHP[this.bindPercentageToIndex()];
         this.img = this.imgCache[imgPath];
     }
}