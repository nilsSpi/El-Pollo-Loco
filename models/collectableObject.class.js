class CollectableObject extends DrawableObject {
    world;
    randomizer;

    constructor(randomizer) {
        super().loadImage('img/8.Coin/Moneda2.png');
        //this.x = 550; //Math.floor(Math.random)*this.world.level.level_end_x;
        this.y = 150;
        //this.setX();
        this.randomizer=randomizer;
        this.x=Math.random()*this.randomizer;



    }
/**
 * der gedanke war über world.level auf die lvl länge zuzugreifen und die x position zu randomisieren
 */
    setX() { this.x =Math.floor(Math.random())*this.world.level.level_end_x;}




}