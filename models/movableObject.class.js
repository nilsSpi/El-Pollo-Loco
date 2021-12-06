class MovableObject {
    x=120;
    y=300;
    img;
    imgCache={};
    height=150;
    width=100;

    loadImage(path){
        this.img= new Image();
        this.img.src= path;
    }
    /** 
    * animate character movement
    *@param {Array} arr -["img1.png,img2.png,..."]
    */
    loadImages(arr)
    {
        arr.forEach(path=>{
            let img=new Image();
            img.src=path;
            this.imgCache[path]=img;
        });
       
    }

     moveRight() {
        console.log('Moving right!');
    }

    moveLeft(){
        
    }
}