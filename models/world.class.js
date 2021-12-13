class World {
    ctx;
    keyboard;

    camera_x = 0;

    character = new Character();
    statusBar = new StatusBar();

    canvas;

    level = level1;
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.drawCanvas();
        this.setWorld();
        this.runIntervalWrap();
    }

    setWorld() {
        this.character.world = this;
    }





    drawCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);

        this.addArrayToMap(this.level.backgroundObjects);
        this.addArrayToMap(this.level.clouds);
        this.addArrayToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addArrayToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);

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

        object.showHitbox(this.ctx);

        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    runIntervalWrap() {
        setInterval(() => {

            this.checkCollisions();
            this.checkThrowableObjects();

        },100);
    }

    checkThrowableObjects() {
        if (this.keyboard.UP)
        {
            let bottle = new ThrowableObject(this.character.x +100,this.character.y+100);
            this.throwableObjects.push(bottle);
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