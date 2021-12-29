class Endboss extends MovableObject
{
    world;
    height=400;
    width=250;
    y=55;
    energy=100;
    aggroRange=400;
    isAttacking=false;
    attackRange=200;
    startPosition=1200;
    lastAttack;
    attackCounter=3;
    dmg=100;
    specialAttackCounter=1;
    refreshAbilities=1;
    hpBar=new BossHp();
    
   

    IMAGES_WALKING=[
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',

        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];

    IMAGES_ATTACK = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
    ];

    IMAGES_ENRAGE = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    ];

    IMAGES_DYING=[
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ];
    

    constructor()
    {
        super().loadImage('img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_ENRAGE);
        this.loadImages(this.IMAGES_DYING);
        this.x=1200;
      
        this.updateHpBarPosition();
        this.setPosition();
        this.animate(); 
    }
    animate()
    {   
            setInterval(() => {
                if(this.energy<=0){
                    this.playAnimation(this.IMAGES_DYING);
                    setTimeout(
                        ()=>{this.x=-500;}
                        ,2000);
                }
                else{
                    if(this.energy<60){
                        this.playAnimation(this.IMAGES_ENRAGE);
                    }
                    else if(this.isAttacking){
                        this.playAnimation(this.IMAGES_ATTACK);
                    }
                    else{
                        this.playAnimation(this.IMAGES_WALKING);
                    }     

                }

               
            }, 200);  


            setInterval(() => {

                if(this.energy<45 && this.specialAttackCounter >0){
                    this.spawnMobs();
                    this.specialAttackCounter--;
                }

                if(this.energy<45 && this.specialAttackCounter<1 && this.refreshAbilities>0)
                {
                    this.attackCounter=this.attackCounter+2;
                    this.refreshAbilities--;
                }
                    this.checkEndbossSight();
                    if(this.isAttacking){
                        this.attack();                            
                }  
                this.updateHpBarPosition();
                this.hpBar.setBossPercentage(this.energy);        
            },1000/60);
    }

    attack(){

       
            
            this.aggroRange +=200;
            this.speed=5;
            if(this.x>this.startPosition-this.attackRange){
                
                this.moveLeft();
               
            }
           
            if(!this.isExhausted() && this.attackCounter>0){
                this.lastAttack=new Date().getTime();
                this.startPosition=this.x;
                this.attackCounter--;
            }
          
    }

    /**
 * working
 */
     checkEndbossSight() {
        if(this.x-this.world.character.x < this.aggroRange)
        {
            console.log("in sight");
            this.isAttacking=true;

        }
        else {
            this.isAttacking=false;
        }
    }
    /**
    * 
    * @returns boolean , object was taken damage in last 0.5 sekcunds
    */
   isExhausted()
   {
    let timepassed = (new Date().getTime() - this.lastAttack)/1000; // difference in s
    return timepassed < 1.5;

   }


   updateHpBarPosition() {
    this.hpBar.x=this.x;
    this.hpBar.y=480-this.height-60;
   }


   spawnMobs() {
       this.world.level.enemies.forEach(enemy => {
           enemy.x = this.x;
           enemy.speed*=2;
       });
   }

   setPosition() {
       setTimeout(
           () => {this.x=this.world.level.level_end_x;},1000
       );
   }
}