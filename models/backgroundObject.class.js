class BackgroundObject extends MovableObject
{
    width=720;
    height=350;
    constructor(imgPath,x,y)
    {
        super().loadImage(imgPath);
        this.x=x;
        this.y=y;
    }
}