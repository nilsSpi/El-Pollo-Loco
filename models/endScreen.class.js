class EndScreen extends DrawableObject{
    gameLost;
    gameWon;

    IMAGES_LOST=['img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png'];
    IMAGES_WON=['img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png'];

    constructor() {
        super().loadImage('img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png');
       
        this.x=0;
        this.y=0;
        this.width=720;
        this.height=480;
        
    }

    determinStatus(gameLost,gameWon) {
        if(gameWon){
            this.loadImage('img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png');
        }
            if(gameLost){
                this.loadImage('img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png');
            }
           
    
        
    }

    createRetry(){
        let retryButton= document.getElementById('retryButton');
        location.reload();
    }
}