class Endboss extends MovableObject
{
    world;
    height=400;
    width=250;
    y=55;
    energy=100;
    aggroRange=300;
    isAttacking=false;
    attackRange=200;
    startPosition=1200;
    lastAttack;
    attackCounter=3;
    dmg=100;
    
   

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
    

    constructor()
    {
        super().loadImage('img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.x=1200;
        this.animate(); 
    }
    animate()
    {   
            setInterval(() => {
                if(this.isAttacking){
                    this.playAnimation(this.IMAGES_ATTACK);
                }
                else{
                    this.playAnimation(this.IMAGES_WALKING);
                }     
            }, 200);  


            setInterval(() => {
         
                    this.checkEndbossSight();
                    if(this.isAttacking){
                        this.attack();                            
                }          
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
    return timepassed < 5;

   }
}