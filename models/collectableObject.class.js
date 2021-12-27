class CollectableObject extends DrawableObject {
    world;
    gameSectionPosition;

    constructor(gameSectionPosition) {
        super().loadImage('img/8.Coin/Moneda2.png');
        //this.x = 550; //Math.floor(Math.random)*this.world.level.level_end_x;
        this.y = 50;
        //this.setX();
        this.gameSectionPosition=gameSectionPosition;
        this.x=(Math.random())*this.gameSectionPosition;

        while(this.x < this.gameSectionPosition/2){
            this.x=(Math.random())*this.gameSectionPosition;
        }

        



    }
/**
 * der gedanke war über world.level auf die lvl länge zuzugreifen und die x position zu randomisieren
 */
    setX() { this.x =Math.floor(Math.random())*this.world.level.level_end_x;}




}