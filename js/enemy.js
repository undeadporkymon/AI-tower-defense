class Enemy {

    constructor(x,y){

        this.enemy = createSprite(x,y,30,30);
        this.enemy.addImage(enemyIMG);
        this.x = x;
        this.y = y;
        this.dead = false;
        this.canDie = false;
        this.vx = 0;
        this.vy = 0;
        this.frozen = false;
        this.counter = 0;
        this.stop = false;
        this.removed = false;
    }

    isDelete(number){
        if(this.removed == true){
     this.enemy.remove();
     enemies.splice(number,1);
        }
    }

    deleteActive(){
        this.removed = true;
    }
    

    takeDamage(){      
        
        if(wave == 15){
            difficultyChanger = 1.5;
            animation = enemy2IMG;
            animationR = enemy2RIMG;
            animationL = enemy2LIMG;
        }
        if(wave == 30){
            difficultyChanger = 2;
            animation = enemy3IMG;
            animationR = enemy3RIMG;
            animationL = enemy3LIMG;
        }

        if(wave == 45){
            difficultyChanger = 3;
            animation = enemy4IMG;
            animationR = enemy4RIMG;
            animationL = enemy4LIMG;
        }


        if(this.canDie == true){
            for(var w = 0; w < turrets1.length; w++){
                turrets1[w].hit(this.enemy,difficultyChanger);
             }
             for(var ab = 0; ab < turrets2.length; ab++){
                turrets2[ab].hit(this.enemy,difficultyChanger);
             }
             for(var a2 = 0; a2 < turrets3.length; a2++){
                turrets3[a2].hit(this.enemy,difficultyChanger);
             }
             for(var a3 = 0; a3 < cars.length; a3++){
                cars[a3].runOver(this.enemy,difficultyChanger);
             }
             
        }

        if(castle.isTouching(this.enemy)){
          life = life - 10;
          this.enemy.visible = false;
          this.dead = true
          this.enemy.x = -30
          health.width = life;
          health.x = health.x - 5;
          enemiesDefeated = enemiesDefeated + 1
        } else
        if(this.enemy.visible == false){


            for(var y = 0; y < turrets1.length; y++){
                turrets1[y].spin(this.enemy);
               }
               for(var ya = 0; ya < turrets2.length; ya++){
                turrets2[ya].spin(this.enemy);
               }
               for(var y2 = 0; y2 < turrets3.length; y2++){
                turrets3[y2].spin(this.enemy);
               }
            this.enemy.visible = true;
            this.dead = true
            this.enemy.x = -30
            this.enemy.velocityY = 0;
            this.enemy.velocityX = 0;
            enemiesDefeated = enemiesDefeated + 1
            
        }
      }

      enemyPathFinding(){  
          if(gameState == 'playing'){     
if(this.dead == false){
        if(this.enemy.y > 580){
            this.enemy.velocityY = -2;
            this.enemy.addImage(animation);
        }  
        if(this.enemy.y > 464 && this.enemy.y < 469){
            this.enemy.velocityY = 0;
            this.enemy.velocityX = 2;
            this.enemy.addImage(animationR);
        }  
        if(this.enemy.x > 610 && this.enemy.x < 615){
            this.enemy.velocityX = 0;
            this.enemy.velocityY = -2;
            this.enemy.addImage(animation);
        }  
        if(this.enemy.y < 208 && this.enemy.y > 203){
            this.enemy.velocityX = -2;
            this.enemy.velocityY = 0;
            this.enemy.addImage(animationL);
        
          if(this.enemy.x < 452 && this.enemy.x > 447){
            this.enemy.velocityX = 0;
            this.enemy.velocityY= -2;
            this.enemy.addImage(animation);
          } } }}
        }



        reset(){
            this.enemy.y = this.y
            this.enemy.x = this.x
            this.dead = false;
            this.enemy.visible = true;
        }

       dying()
{
this.canDie = true;

}            
}
