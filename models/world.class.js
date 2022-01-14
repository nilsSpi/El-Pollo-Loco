class World {
    ctx;
    keyboard;
    backgroundSound = new Audio('audio/desertBackground.mp3');
    coinSound= new Audio('audio/coin.mp3');

    camera_x = 0;
  
    startScreen = new StartScreen();
    character = new Character();
    statusBar = new StatusBar();
    endScreen = new EndScreen();
    gameWon=false;
    gameLost=false;
    gameIsRunning=false;

    canvas;

    level = level1;
    throwableObjects = [];
    collectableObjects = [new CollectableObject(this.randomizeCoinPosition(1)), new CollectableObject(this.randomizeCoinPosition(2)), new CollectableObject(this.randomizeCoinPosition(3)),
        new CollectableObject(this.randomizeCoinPosition(1)), new CollectableObject(this.randomizeCoinPosition(2)), new CollectableObject(this.randomizeCoinPosition(3))
    ];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
  
        this.setWorld();  
        this.drawCanvas();
        this.runIntervalWrap();
       
       
    }

    setWorld() {
        this.character.world = this;
        for (let index = 0; index < this.collectableObjects.length; index++) {
            this.collectableObjects[index].world = this;
        }
        this.level.enemies.forEach(enemy => {enemy.world = this;});
        this.level.enemies[4].world= this;
        this.startScreen.world=this;


    }
    /**
     * 
     * @param {number} gameSections - The number of sections u want to divide ur game into 
     * @returns the length of the game section.
     */
    randomizeCoinPosition(gameSection) {
        return this.level.level_end_x * gameSection / 3;
    }


    /**
     * 
     * recursive function to add objects to the canvas. if the object should stay in the same place during the whole game 
     * add it to map after the camera bakcflip.else add it to map in between the cameraflips.
     */


    drawCanvas() {

            if(this.gameLost){
                this.addArrayToMap(this.level.backgroundObjects);
                this.addArrayToMap(this.level.clouds);
               this.endScreen.determinStatus(this.gameLost,this.gameWon);
               this.addToMap(this.endScreen);
            }
    
            else if (this.gameWon){
                this.addArrayToMap(this.level.backgroundObjects);
                this.addArrayToMap(this.level.clouds);
               this.endScreen.determinStatus(this.gameLost,this.gameWon);
               this.addToMap(this.endScreen);
               
            }

            else  if(!this.gameIsRunning){
                console.log(this.startScreen.img.path);
                this.startScreen.loadImage('img/9.Intro _ Outro Image/Start Screen/Opción 1.png');

                this.addToMap(this.startScreen);
                this.startScreen.draw(this.ctx);
                
            }
    
            else {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.translate(this.camera_x, 0);
        
                this.addArrayToMap(this.level.backgroundObjects);
                this.addArrayToMap(this.level.clouds);
                this.addArrayToMap(this.level.enemies);
                this.addToMap(this.character);
                this.addArrayToMap(this.collectableObjects);
                this.addArrayToMap(this.throwableObjects);
                this.addToMap(this.level.enemies[4].hpBar);
                this.ctx.translate(-this.camera_x, 0);
                this.addToMap(this.statusBar);
                this.backgroundSound.play();
        
               // let self = this;
               // requestAnimationFrame(function () { self.drawCanvas(); })
            } 
            let self = this;
            requestAnimationFrame(function () { self.drawCanvas(); })
       
    }


    addArrayToMap(array) {
        array.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }
        object.draw(this.ctx);

     //   object.showHitbox(this.ctx);    !!!!!!!!!!!!!!!!HITBOXES!!!!!!!!!!!!

        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    runIntervalWrap() {
        setInterval(() => {

            this.checkCollisions();
            this.checkThrowableObjects();
            this.checkCollected();
            this.checkExplosions();
            this.checkAlarmCall();

        }, 100);
    }

    /**
     * checks if an enemy is near to the character and if the enemy already called alram
     */

    checkAlarmCall() {
        this.level.enemies.forEach(enemy => {
            if (enemy.x-this.character.x<800 && enemy.wasQuiet && !this.gameLost && this.gameIsRunning)
            {
                enemy.callAlarm();
                
            }
        });
    }

    checkThrowableObjects() {
        if (this.keyboard.UP) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);

            this.throwableObjects.push(bottle);
        }
    }


    checkCollected() {


        if (this.collectableObjects.length > 0) {


            this.collectableObjects.forEach((object) => {


                if (this.character.isColliding(object)) {
                    this.coinSound.play();
                    let index;
                    index = this.collectableObjects.indexOf(object);
                    this.collectableObjects.splice(index, 1);
                    console.log(this.collectableObjects);
                }
            });
        }


    }

    /**
   * checks  for collision of any enemy with the character.
   * if isColliding is true the character will take damage
  */
    checkCollisions() {

        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.takeDmg(enemy);
                this.statusBar.setPercentage(this.character.energy);
                console.log("character collison detected ", this.character.energy);
            }
        });

    }

    checkExplosions() {
        this.throwableObjects.forEach((object,index) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(object)) {
                    console.log("EXPLOSION");
                    if (enemy instanceof Endboss) {
                        enemy.energy -= 1;
                        console.log("Endboss was hit!");
                        //this.throwableObjects.splice(index,1);
                        object.explode();
                    }
                }
            })
        });
    }


    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }


}