class StartScreen extends DrawableObject{

world;
    constructor() {
        super().loadImage('img/9.Intro _ Outro Image/Start Screen/Opción 1.png');
        this.loadImage('img/9.Intro _ Outro Image/Start Screen/Opción 1.png');      
        this.x=0;
        this.y=0;
        this.width=720;
        this.height=480;
    }

    createStart() {
        let startButton= document.getElementById('startButton');
        this.world.gameIsRunning=true;
        startButton.style.display="none";
        
    }
}