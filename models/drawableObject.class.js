
/**
 * object
 */
class DrawableObject {
    x = 120;
    y = 300;

    height = 150;
    width = 100;

    img;
    imgCache = {};
    currentImg = 0;




    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /** 
    * load images from the array to imgCache
    *@param {Array} arr -["img1.png,img2.png,..."]
    */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    /**
    * 
    * @param ctx -context variable , which is bounded to doc.getElebyId('canvas').getContext('2d')
    * 
    */

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    showHitbox(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof GoldChicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


}