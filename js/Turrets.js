class Turret1{
    constructor(x,y){
        this.turret = createSprite(x,y,200,200);
        this.sideBar = createSprite(925,450,150,300);
        this.sideBar.addImage(turret1SideBar);
        this.sideBar.visible = false;
        this.upgrade = createSprite(925,550,75,30);
        this.upgrade.addImage(upgradeImg);
        this.upgrade.visible = false;
        this.sell = createSprite(925,270,75,30);
        this.sell.addImage(sellImg)
        this.sell.visible = false;
        this.x = x
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.turret.addImage(t1U1);
        this.coolDown = false;
        this.counter = 0;
        this.angle = 0;
        this.upgradeCounter = 20;
        this.color = 0;
        this.level = 1;
        this.removed = false;
        this.range = 100;
        this.difficulty1 = 1;
 
    }
    gameOver(){
        this.removed = true;  
      }

    isSold(val){
        if(this.removed == true){
            this.sideBar.remove()
            this.sell.remove()
            this.upgrade.remove()
            turrets1.splice(val,1);
            this.turret.remove()
            turretsOnBoard = turretsOnBoard - 1;
        }
    }



    sideShow(){

        if(this.level == 2){
            this.turret.addImage(t1U2);
        } else  if(this.level == 3){
            this.turret.addImage(t1U3);
        } else  if(this.level == 4){
            this.turret.addImage(t1U4);
        } else  if(this.level == 5){
            this.turret.addImage(t1U5);
        } 


        this.color = color(170);
        this.color.setAlpha(150);
        if(this.sideBar.visible == true){
            this.upgrade.visible = true;
            this.sell.visible = true;
            text("lvl:"+ this.level, this.turret.x-20, this.turret.y - 30);
            push()
            fill(this.color);
            ellipse(this.turret.x, this.turret.y, this.range * 2);
            pop()
            if(
                this.upgrade.x + 37.5 > mouseX &&
                this.upgrade.x - 37.5 < mouseX &&
                this.upgrade.y + 15 > mouseY &&
                this.upgrade.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    if(money > 249 && this.upgradeCounter > 10){
                        money = money - 250
                        this.upgradeCounter = this.upgradeCounter - 2
                        this.level = this.level + 1;
                        this.sideBar.visible = false;
                        this.range =  this.range + 10;
                        upgraded = true;
                    }
                    
                }
            }

            if(
                this.sell.x + 37.5 > mouseX &&
                this.sell.x - 37.5 < mouseX &&
                this.sell.y + 15 > mouseY &&
                this.sell.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    this.removed = true;
                }
            }


        } else {
            this.upgrade.visible = false;
            this.sell.visible = false;
        }


        if(
            this.turret.x + 25 > mouseX &&
            this.turret.x - 25 < mouseX &&
            this.turret.y + 25 > mouseY &&
            this.turret.y - 25 < mouseY 
        ){
            if(mouseIsPressed){
                this.sideBar.visible = true;
            }
        } else{
            if(  this.sideBar.x + 75 > mouseX &&
                this.sideBar.x - 75 < mouseX &&
                this.sideBar.y + 150 > mouseY &&
                this.sideBar.y - 150 < mouseY ){

                } else{
            if(mouseIsPressed){
                this.sideBar.visible = false;
            }
            }
        }
    }



 
  spin(enemyHere){
    this.angle = atan2(enemyHere.y -  this.y, enemyHere.x -  this.x);
    this.angle = this.angle + 270;
   
    this.turret.rotation = this.angle;
  }




  hit(obj,difficulty){

    this.difficulty1 = difficulty;

if(this.coolDown == true){
this.counter = this.counter + 0.5;
if(this.counter >= (100) + (this.upgradeCounter  * wave *  this.difficulty1 *  difficulty2*0.6)){
    this.coolDown = false;
    this.counter = 0;
}
}

      if(
        this.turret.x +  this.range > obj.x &&
        this.turret.x -  this.range < obj.x &&
        this.turret.y +  this.range > obj.y &&
        this.turret.y -  this.range < obj.y &&
        this.coolDown == false
      ){
          obj.visible = false;
          this.coolDown = true;
          money = money + 10;
          pew.play();
      }
  }
        shoot(){

        for(var d = 0; d < enemies.length; d++){
          enemies[d].dying();  
        }

       }
    }

class Turret2{
    constructor(x,y){
        this.turret = createSprite(x,y,100,100);
        this.sideBar = createSprite(925,450,150,300);
        this.sideBar.addImage(turret2SideBar);
        this.sideBar.visible = false;
        this.upgrade = createSprite(925,550,75,30);
        this.upgrade.addImage(upgradeImg);
        this.upgrade.visible = false;
        this.sell = createSprite(925,270,75,30);
        this.sell.addImage(sellImg)
        this.sell.visible = false;
        this.x = x
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.turret.addImage(t2U1);
        this.coolDown = false;
        this.counter = 0;
        this.angle = 0;
        this.upgradeCounter = 20;
        this.color = 0;
        this.level = 1;
        this.removed = false;
        this.dead = 0;
        this.range = 50;
        this.burst = 3;
        this.difficulty1 = 1;
    }
    gameOver(){
        this.removed = true;  
      }

    isSold(val){
        if(this.removed == true){
            this.sideBar.remove()
            this.sell.remove()
            this.upgrade.remove()
            turrets2.splice(val,1);
            this.turret.remove()
            turretsOnBoard = turretsOnBoard - 1;
        }
    }



    sideShow(){

        if(this.level == 2){
            this.turret.addImage(t2U2);
        } else  if(this.level == 3){
            this.turret.addImage(t2U3);
        }


        this.color = color(170);
        this.color.setAlpha(150);
        if(this.sideBar.visible == true){
            this.upgrade.visible = true;
            this.sell.visible = true;
            text("lvl:"+ this.level, this.turret.x-20, this.turret.y - 30);
            push()
            fill(this.color);
            ellipse(this.turret.x, this.turret.y, this.range * 2);
            pop()
            if(
                this.upgrade.x + 37.5 > mouseX &&
                this.upgrade.x - 37.5 < mouseX &&
                this.upgrade.y + 15 > mouseY &&
                this.upgrade.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    if(money > 499 && this.upgradeCounter > 16){
                        money = money - 500
                        this.level = this.level + 1;
                        this.upgradeCounter = this.upgradeCounter - 2;
                        this.sideBar.visible = false;
                        this.range =  this.range + 12.5;
                        this.burst = this.burst + 1;
                        upgraded = true;
                    }
                    
                }
            }

            if(
                this.sell.x + 37.5 > mouseX &&
                this.sell.x - 37.5 < mouseX &&
                this.sell.y + 15 > mouseY &&
                this.sell.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    this.removed = true;
                }
            }


        } else {
            this.upgrade.visible = false;
            this.sell.visible = false;
        }


        if(
            this.turret.x + 25 > mouseX &&
            this.turret.x - 25 < mouseX &&
            this.turret.y + 25 > mouseY &&
            this.turret.y - 25 < mouseY 
        ){
            if(mouseIsPressed){
                this.sideBar.visible = true;
            }
        } else{
            if(  this.sideBar.x + 75 > mouseX &&
                this.sideBar.x - 75 < mouseX &&
                this.sideBar.y + 150 > mouseY &&
                this.sideBar.y - 150 < mouseY ){

                } else{
            if(mouseIsPressed){
                this.sideBar.visible = false;
            }
            }
        }
    }



 
  spin(enemyHere){
    this.angle = atan2(enemyHere.y -  this.turret.y, enemyHere.x -  this.turret.x);
    this.angle = this.angle + 270;
    this.turret.rotation = this.angle;
  }




  hit(obj,difficulty){

    this.difficulty1 = difficulty

    if(this.dead >= this.burst){
        this.coolDown = true;
    }
if(this.coolDown == true){
this.counter = this.counter + 0.5;
if(this.counter >= (250) + (30  * wave * this.difficulty1 *  difficulty2)){
    this.coolDown = false;
    this.counter = 0;
    this.dead = 0;
}
}

      if(
        this.turret.x +  this.range > obj.x &&
        this.turret.x -  this.range < obj.x &&
        this.turret.y +  this.range > obj.y &&
        this.turret.y -  this.range < obj.y &&
        this.coolDown == false
      ){
          obj.visible = false;
          this.dead = this.dead + 1;
          money = money + 10;
          pew.play();
      }
  }
        shoot(){

        for(var d = 0; d < enemies.length; d++){
          enemies[d].dying();  
        }

       }
}

class Turret3{
    constructor(x,y){
        this.turret = createSprite(x,y,200,200);
        this.sideBar = createSprite(925,450,150,300);
        this.sideBar.addImage(turret3SideBar);
        this.sideBar.visible = false;
        this.upgrade = createSprite(925,550,75,30);
        this.upgrade.addImage(upgradeImg);
        this.upgrade.visible = false;
        this.sell = createSprite(925,270,75,30);
        this.sell.addImage(sellImg)
        this.sell.visible = false;
        this.x = x
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.turret.addImage(t3U1);
        this.coolDown = false;
        this.counter = 0;
        this.angle = 0;
        this.upgradeCounter = 20;
        this.color = 0;
        this.level = 1;
        this.removed = false;
        this.range = 100;
        this.burst = 10;
        this.dead = 0;
        this.slow = 10;
        this.difficulty1 = 1;
    }
    gameOver(){
      this.removed = true;  
    }

    isSold(val){
        if(this.removed == true){
            this.sideBar.remove()
            this.sell.remove()
            this.upgrade.remove()
            turrets3.splice(val,1);
            this.turret.remove()
            turretsOnBoard = turretsOnBoard - 1;
        }
    }



    sideShow(){

        if(this.level == 2){
            this.turret.addImage(t3U2);
        } else  if(this.level == 3){
            this.turret.addImage(t3U3);
        }


        this.color = color(170);
        this.color.setAlpha(150);
        if(this.sideBar.visible == true){
            this.upgrade.visible = true;
            this.sell.visible = true;
            text("lvl:"+ this.level, this.turret.x-20, this.turret.y - 30);
            push()
            fill(this.color);
            ellipse(this.turret.x, this.turret.y, this.range * 2);
            pop()
            if(
                this.upgrade.x + 37.5 > mouseX &&
                this.upgrade.x - 37.5 < mouseX &&
                this.upgrade.y + 15 > mouseY &&
                this.upgrade.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    if(money > 699 && this.upgradeCounter > 16){
                        money = money - 700
                        this.upgradeCounter = this.upgradeCounter - 2
                        this.level = this.level + 1;
                        this.sideBar.visible = false;
                        this.burst =   this.burst + 2;
                        upgraded = true;
                    }
                    
                }
            }

            if(
                this.sell.x + 37.5 > mouseX &&
                this.sell.x - 37.5 < mouseX &&
                this.sell.y + 15 > mouseY &&
                this.sell.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    this.removed = true;
                }
            }


        } else {
            this.upgrade.visible = false;
            this.sell.visible = false;
        }


        if(
            this.turret.x + 25 > mouseX &&
            this.turret.x - 25 < mouseX &&
            this.turret.y + 25 > mouseY &&
            this.turret.y - 25 < mouseY 
        ){
            if(mouseIsPressed){
                this.sideBar.visible = true;
            }
        } else{
            if(  this.sideBar.x + 75 > mouseX &&
                this.sideBar.x - 75 < mouseX &&
                this.sideBar.y + 150 > mouseY &&
                this.sideBar.y - 150 < mouseY ){

                } else{
            if(mouseIsPressed){
                this.sideBar.visible = false;
            }
            }
        }
    }



 
  spin(enemyHere){
    this.angle = atan2(enemyHere.y -  this.y, enemyHere.x -  this.x);
    this.angle = this.angle + 270;
   
    this.turret.rotation = this.angle;
  }




  hit(obj,difficulty){
this.slow = this.slow + 0.1
this.difficulty1 = difficulty
if(this.dead>=this.burst){
this.coolDown = true;
}
    
if(this.coolDown == true){
this.counter = this.counter + 0.5;
if(this.counter >= (500) + (40  * wave * this.difficulty1 *  difficulty2)){
    this.coolDown = false;
    this.counter = 0;
    this.dead = 0;
}
}

      if(
        this.turret.x +  this.range > obj.x &&
        this.turret.x -  this.range < obj.x &&
        this.turret.y +  this.range > obj.y &&
        this.turret.y -  this.range < obj.y &&
        this.coolDown == false &&
        this.slow >= 10
      ){
         this.dead = this.dead + 1;
         this.slow = 0;
         money = money + 10;
          obj.visible = false;
          freeze.play();
      }
  }
        shoot(){

        for(var d1 = 0; d1 < enemies.length; d1++){
          enemies[d1].dying();  
        }

       }
}

class Turret4{


    constructor(x,y){
        this.turret = createSprite(x,y,200,200);
        this.sideBar = createSprite(925,450,150,300);
        this.sideBar.addImage(turret4SideBar);
        this.sideBar.visible = false;
        this.upgrade = createSprite(925,550,75,30);
        this.upgrade.addImage(upgradeImg);
        this.upgrade.visible = false;
        this.sell = createSprite(925,270,75,30);
        this.sell.addImage(sellImg)
        this.sell.visible = false;
        this.x = x
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.turret.addImage(t4U1);
        this.coolDown = false;
        this.counter = 0;
        this.upgradeCounter = 20;
        this.color = 0;
        this.level = 1;
        this.removed = false;
        this.range = 25;
        this.burst = 10;
        this.dead = 0;
        this.slow = 10;
        this.stop1 = false;
        this.stop2 = false;
       
    }


   gameOver(){
      this.removed = true;  
    }

    isSold(val){
        if(this.removed == true){
            cars[val].isSold();    
            cars.splice(val,1);   
            turrets4.splice(val,1);
            this.sideBar.remove()
            this.sell.remove()
            this.upgrade.remove()
            this.turret.remove()
            turretsOnBoard = turretsOnBoard - 1;
        }
    }



    sideShow(cool){

        cars[cool].levelUp(cool);

        if(this.level == 2 && this.stop1 == false){
            cars[cool].visible = false;
            this.turret.addImage(t4U2);
            this.stop1 = true;
          
        } else  if(this.level == 3 && this.stop2 == false){
            cars[cool].visible = false;
            this.turret.addImage(t4U3);
            this.stop2 = true
        }


        this.color = color(170);
        this.color.setAlpha(150);
        if(this.sideBar.visible == true){
            this.upgrade.visible = true;
            this.sell.visible = true;
            text("lvl:"+ this.level, this.turret.x-20, this.turret.y - 30);
            push()
            fill(this.color);
            ellipse(this.turret.x, this.turret.y, this.range * 2);
            pop()
            if(
                this.upgrade.x + 37.5 > mouseX &&
                this.upgrade.x - 37.5 < mouseX &&
                this.upgrade.y + 15 > mouseY &&
                this.upgrade.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    if(money > 1499 && this.upgradeCounter > 16){
                        money = money - 1500
                        this.upgradeCounter = this.upgradeCounter - 2
                        this.level = this.level + 1;
                        this.sideBar.visible = false;
                    }
                    
                }
            }

            if(
                this.sell.x + 37.5 > mouseX &&
                this.sell.x - 37.5 < mouseX &&
                this.sell.y + 15 > mouseY &&
                this.sell.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    this.removed = true;
                }
            }


        } else {
            this.upgrade.visible = false;
            this.sell.visible = false;
        }


        if(
            this.turret.x + 25 > mouseX &&
            this.turret.x - 25 < mouseX &&
            this.turret.y + 25 > mouseY &&
            this.turret.y - 25 < mouseY 
        ){
            if(mouseIsPressed){
                this.sideBar.visible = true;
            }
        } else{
            if(  this.sideBar.x + 75 > mouseX &&
                this.sideBar.x - 75 < mouseX &&
                this.sideBar.y + 150 > mouseY &&
                this.sideBar.y - 150 < mouseY ){

                } else{
            if(mouseIsPressed){
                this.sideBar.visible = false;
            }
            }
        }
    }

        shoot(){

        for(var d1 = 0; d1 < enemies.length; d1++){
          enemies[d1].dying();  
        }

       }


}


class Car{
constructor(){
    this.car = createSprite(449,10,30,30);
    this.car.addImage(carU1);
    this.car.velocityY = 2;
    this.dead = false;
    this.counter = 0;
    this.range = 15;
    this.checker = 0;
    this.level = 1;
    this.down = carU1
    this.left = carU1L
    this.right = carU1R
    this.canKill = 6;
    this.removed = false;
}

isSold(){
        this.canKill = 0;
        this.car.remove();
    }


levelUp(cool){

    if(this.level == 2){
        this.down = carU2
    this.left = carU2L
    this.right = carU2R
    } else  
    if(this.level == 3){
    this.down = carU3
    this.left = carU3L
    this.right = carU3R
    } 

    if (this.visible == false){
          this.level = this.level + 1;
          upgraded = true;
        this.canKill = this.canKill + 4;
        this.car.visible = true;
        cars[cool].visible = true;
    }
}


runOver(obj){

if(
    this.car.x +  this.range > obj.x &&
    this.car.x -  this.range < obj.x &&
    this.car.y +  this.range > obj.y &&
    this.car.y -  this.range < obj.y
){

this.checker = this.checker + 1;    
obj.visible = false;
money = money + 10;
pew2.play();

}

if(this.checker >= this.canKill){
    this.dead = true;
    this.car.velocityY = 0;
    this.car.velocityX = 0;
    this.car.visible = false;
    this.car.x = 1000;
    this.car.y = 0;
    this.checker = 0;
    
}

}


respawn(){
    if(this.dead == true){
        this.counter = this.counter + 0.5;
        if(this.counter >= (100) + (5  * wave)){
            this.dead = false;
            this.counter = 0;
            this.car.x = 449;
            this.car.y = 10;
            this.car.velocityX = 0;
            this.car.velocityY = 2;
            this.car.visible = true;
            this.car.addImage( this.down );
        }
    }
}

pathFinding(){
if(this.dead == false){
    if(this.car.x <= 250){
        this.car.velocityY = 2;
        this.car.velocityX = 0;
        this.car.addImage( this.down );
      }  else {


    if(this.car.y < 208 && this.car.y > 203){
    if(this.car.x == 449){

        this.car.velocityX = 2;
        this.car.velocityY= 0;
        this.car.addImage(this.right);
    }
      }
    
   

    if(this.car.x > 610 && this.car.x < 615){
        this.car.velocityX = 0;
        this.car.velocityY = 2;
        this.car.addImage( this.down );

        
        if(this.car.y > 464 && this.car.y < 469){
            this.car.velocityY = 0;
            this.car.velocityX = -2;
            this.car.addImage(this.left);
          }
        

        
    }  

    }


    if(this.car.y > 600){
        this.dead = true;
        this.car.velocityY = 0;
        this.car.velocityX = 0;
        this.car.visible = false;
        this.car.x = 1000;
        this.car.y = 0;
    }
}
}
}

class Turret5{
    constructor(x,y){
        this.turret = createSprite(x,y,200,200);
        this.sideBar = createSprite(925,450,150,300);
        this.sideBar.addImage(turret5SideBar);
        this.sideBar.visible = false;
        this.upgrade = createSprite(925,550,75,30);
        this.upgrade.addImage(upgradeImg);
        this.upgrade.visible = false;
        this.sell = createSprite(925,270,75,30);
        this.sell.addImage(sellImg)
        this.sell.visible = false;
        this.x = x
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.turret.addImage(t5U1);
        this.coolDown = false;
        this.counter = 0;
        this.upgradeCounter = 1;
        this.color = 0;
        this.level = 1;
        this.removed = false;
    
    }

    gameOver(){
        this.removed = true;  
      }

    isSold(val){
        if(this.removed == true){
            this.sideBar.remove()
            this.sell.remove()
            this.upgrade.remove()
            turrets5.splice(val,1);
            this.turret.remove()
            turretsOnBoard = turretsOnBoard - 1;
        }
    }

    getMoney(){

        money = money + (50 * this.upgradeCounter);
        ching.play();

    }

    sideShow(){

        if(this.level == 2){
            this.turret.addImage(t5U2);
        } else  if(this.level == 3){
            this.turret.addImage(t5U3);
        } else  if(this.level == 4){
            this.turret.addImage(t5U4);
        } 


        this.color = color(170);
        this.color.setAlpha(150);
        if(this.sideBar.visible == true){
            this.upgrade.visible = true;
            this.sell.visible = true;
            text("lvl:"+ this.level, this.turret.x-20, this.turret.y - 30);
            push()
            fill(this.color);
            ellipse(this.turret.x, this.turret.y, this.range * 2);
            pop()
            if(
                this.upgrade.x + 37.5 > mouseX &&
                this.upgrade.x - 37.5 < mouseX &&
                this.upgrade.y + 15 > mouseY &&
                this.upgrade.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    if(money > 99 && this.upgradeCounter <= 5){
                        money = money - 100
                        this.upgradeCounter = this.upgradeCounter + 1
                        this.level = this.level + 1;
                        this.sideBar.visible = false;
                        upgraded = true;
                    }
                    
                }
            }

            if(
                this.sell.x + 37.5 > mouseX &&
                this.sell.x - 37.5 < mouseX &&
                this.sell.y + 15 > mouseY &&
                this.sell.y - 15 < mouseY 
            ){
                if(mouseIsPressed){
                    this.removed = true;
                }
            }


        } else {
            this.upgrade.visible = false;
            this.sell.visible = false;
        }


        if(
            this.turret.x + 25 > mouseX &&
            this.turret.x - 25 < mouseX &&
            this.turret.y + 25 > mouseY &&
            this.turret.y - 25 < mouseY 
        ){
            if(mouseIsPressed){
                this.sideBar.visible = true;
            }
        } else{
            if(  this.sideBar.x + 75 > mouseX &&
                this.sideBar.x - 75 < mouseX &&
                this.sideBar.y + 150 > mouseY &&
                this.sideBar.y - 150 < mouseY ){

                } else{
            if(mouseIsPressed){
                this.sideBar.visible = false;
            }
            }
        }
    }



    }