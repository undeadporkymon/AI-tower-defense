var tracks = [];
var life = 100;
var enemies = [];
var turrets1 = [];
var turrets2 = [];
var turrets3 = [];
var turrets4 = [];
var turrets5 = [];
var difficultyMode;

var Win = false;
var playEndless = false;
var beatInsane = false;
var upgraded = false;
var learn= false;
var doOnce = false;
var difficulty2 = 1;
var difficultyChanger = 1;
var wave = 1; 
var enemyY = 590;
var enemiesDefeated = 0;
var waveCap;
var canPlaceFinal = 0;
var money = 111000;
var turretsOnBoard = 0;
var carNumber = -1;
var cooldown = false;
var counter = 0;
var gameState = 'home';
var maxTurrets = 5;

function preload(){
backgroundImg = loadImage("images/environment/backround.png");
backgroundHome = loadImage("images/homeScreen/background2.png");
achPage = loadImage("images/homeScreen/aPage.png");
playIMG = loadImage("images/homeScreen/play.png");
htPlayIMG = loadImage("images/homeScreen/htPlay.png");
achievmentIMG = loadImage("images/homeScreen/achievment.png");4
backIMG = loadImage("images/homeScreen/back.png");
continueIMG = loadImage("images/homeScreen/continue.png");
eIMG = loadImage("images/homeScreen/easy.png");
mIMG = loadImage("images/homeScreen/medium.png");
hIMG = loadImage("images/homeScreen/hard.png");
iIMG = loadImage("images/homeScreen/insane.png");
enIMG = loadImage("images/homeScreen/endless.png");
emptyIMG = loadImage("images/homeScreen/empty.png");
info = loadImage("images/tutorial/tutorial.png");
sideBarIMG = loadImage("images/UI/leftBar.png");
hT = loadImage("images/tracks/hTrack.png");
vT = loadImage("images/tracks/vTrack.png");
castleIMG = loadImage("images/environment/castle.png");
b1I = loadImage("images/badges/b1.png");
b2I = loadImage("images/badges/b2.png");
b3I = loadImage("images/badges/b3.png");
b4I = loadImage("images/badges/b4.png");
b5I = loadImage("images/badges/b5.png");
enemyIMG = loadImage("images/enemy/enemy1.png");
enemyRIMG = loadImage("images/enemy/enemy1R.png");
enemyLIMG = loadImage("images/enemy/enemy1L.png");
enemy2IMG = loadImage("images/enemy/enemy2.png");
enemy2RIMG = loadImage("images/enemy/enemy2R.png");
enemy2LIMG = loadImage("images/enemy/enemy2L.png");
enemy3IMG = loadImage("images/enemy/enemy3.png");
enemy3RIMG = loadImage("images/enemy/enemy3R.png");
enemy3LIMG = loadImage("images/enemy/enemy3L.png");
enemy4IMG = loadImage("images/enemy/enemy4.png");
enemy4RIMG = loadImage("images/enemy/enemy4R.png");
enemy4LIMG = loadImage("images/enemy/enemy4L.png");
ice = loadImage("images/enemy/ice.png");
t1U1 = loadImage("images/T1/T1.png");
t1U2 = loadImage("images/T1/T1U2.png");
t1U3 = loadImage("images/T1/T1U3.png");
t1U4 = loadImage("images/T1/T1U4.png");
t1U5 = loadImage("images/T1/T1U5.png");
t2U1 = loadImage("images/T2/T2.png");
t2U2 = loadImage("images/T2/T2U2.png");
t2U3 = loadImage("images/T2/T2U3.png");
t3U1 = loadImage("images/T3/T3.png");
t3U2 = loadImage("images/T3/T3U2.png");
t3U3 = loadImage("images/T3/T3U3.png");
t4U1 = loadImage("images/T4/T4U1.png");
t4U2 = loadImage("images/T4/T4U2.png");
t4U3 = loadImage("images/T4/T4U3.png");
carU1 = loadImage("images/T4/carU1.png");
carU1R = loadImage("images/T4/carU1R.png");
carU1L = loadImage("images/T4/carU1L.png");
carU2 = loadImage("images/T4/carU2.png");
carU2R = loadImage("images/T4/carU2R.png");
carU2L = loadImage("images/T4/carU2L.png");
carU3 = loadImage("images/T4/carU3.png");
carU3R = loadImage("images/T4/carU3R.png");
carU3L = loadImage("images/T4/carU3L.png");
t5U1 = loadImage("images/T5/T5U1.png");
t5U2 = loadImage("images/T5/T5U2.png");
t5U3 = loadImage("images/T5/T5U3.png");
t5U4 = loadImage("images/T5/T5U4.png");
turret1SideBar = loadImage("images/UI/Turret1sideBar.png");
turret2SideBar = loadImage("images/UI/Turret2sideBar.png");
turret3SideBar = loadImage("images/UI/Turret3sideBar.png");
turret4SideBar = loadImage("images/UI/Turret4sideBar.png");
turret5SideBar = loadImage("images/UI/Turret5sideBar.png");
upgradeImg = loadImage("images/UI/upgrade.png");
healthSideBarImg = loadImage("images/UI/HP.png");
sellImg = loadImage("images/UI/sell.png");
pew = loadSound("sounds/pew.mp3");
pew2 = loadSound("sounds/pop.mp3");
freeze = loadSound("sounds/freeze.mp3");
ching = loadSound("sounds/ching.mp3");
}

function setup(){
createCanvas(1000,600);
textSize(26);

b1 = createSprite(125,514,50,50);
b1.addImage(b1I);
b1.scale = 2;
b1.visible = false;

b2 = createSprite(315,514,50,50);
b2.addImage(b2I);
b2.scale = 2;
b2.visible = false;

b3 = createSprite(500,514,50,50);
b3.addImage(b3I);
b3.scale = 2;
b3.visible = false;

b4 = createSprite(688,514,50,50);
b4.addImage(b4I);
b4.scale = 2;
b4.visible = false;

b5 = createSprite(869,514,50,50);
b5.addImage(b5I);
b5.scale = 2;
b5.visible = false;

empty = createSprite(600,100,50,50)
empty.addImage(emptyIMG);
empty.visible = false

back1 = createSprite(30,30,50,50)
back1.addImage(backIMG);
back1.visible = false;

back2 = createSprite(30,30,50,50)
back2.addImage(backIMG);
back2.visible = false

back3 = createSprite(537.5,100,50,50)
back3.addImage(backIMG);
back3.visible = false

back4 = createSprite(30,30,50,50)
back4.addImage(backIMG);
back4.visible = false;

continue1 = createSprite(662.5,100,50,50)
continue1.addImage(continueIMG);
continue1.visible = false

play = createSprite(500,300,300,100);
play.addImage(playIMG);
play.visible = false;
play.scale = 0.65;

htPlay = createSprite(500,400,300,100);
htPlay.addImage(htPlayIMG);
htPlay.visible = false;
htPlay.scale = 0.65;

achievment = createSprite(500,500,300,100);
achievment.addImage(achievmentIMG);
achievment.visible = false;
achievment.scale = 0.65;

easy = createSprite(170,450,200,150);
easy.addImage(eIMG);
easy.visible = false;
easy.scale = 0.8;

medium = createSprite(390,450,200,150);
medium.addImage(mIMG);
medium.visible = false;
medium.scale = 0.8;

hard = createSprite(610,450,200,150);
hard.addImage(hIMG);
hard.visible = false;
hard.scale = 0.8;

insane = createSprite(830,450,200,150);
insane.addImage(iIMG);
insane.visible = false;
insane.scale = 0.8;

endless = createSprite(500,150,200,150);
endless.addImage(enIMG);
endless.visible = false;
endless.scale = 0.8;

animation = enemyIMG;
animationR = enemyRIMG;
animationL = enemyLIMG;

healthSideBar = createSprite(925,150,150,300);
healthSideBar.addImage(healthSideBarImg);

bar = createSprite(910,75,100,15);
bar.shapeColor  = '#fc030b';


health = createSprite(910,75,100,15);
health.shapeColor  = '#02d617';


sideBar = createSprite(75,300,150,600);
sideBar.addImage(sideBarIMG);

t1Bar = createSprite(72,75,50,50);
t1Bar.addImage(t1U1);
t1Bar.scale = 1.5;

t2Bar = createSprite(72,193,50,50);
t2Bar.addImage(t2U1);
t2Bar.scale = 1.5;

t3Bar = createSprite(72,307,50,50);
t3Bar.addImage(t3U1);
t3Bar.scale = 1.5;

t4Bar = createSprite(72,429,50,50);
t4Bar.addImage(t4U1);
t4Bar.scale = 1.5;

t5Bar = createSprite(72,541,50,50);
t5Bar.addImage(t5U1);
t5Bar.scale = 1.5;

track1 = createSprite(250,550,100,40);
track1.addImage(vT);


track3 = createSprite(280,468,40,100);
track3.addImage(hT);

track2 = createSprite(250,500,100,40);
track2.addImage(vT);

track4 = createSprite(380,468,40,100);
track4.addImage(hT);

track5 = createSprite(480,468,40,100);
track5.addImage(hT);

track7 = createSprite(612,438,100,40);
track7.addImage(vT);

track6 = createSprite(580,468,40,100);
track6.addImage(hT);

track8 = createSprite(612,388,100,40);
track8.addImage(vT);

track9 = createSprite(612,338,100,40);
track9.addImage(vT);

track10 = createSprite(612,288,100,40);
track10.addImage(vT);


track12 = createSprite(582,206,40,100);
track12.addImage(hT);

track11 = createSprite(612,238,100,40);
track11.addImage(vT);

track13 = createSprite(532,206,40,100);
track13.addImage(hT);

track15 = createSprite(450,172,100,40);
track15.addImage(vT);

track14 = createSprite(482,206,40,100);
track14.addImage(hT);

track16 = createSprite(450,122,100,40);
track16.addImage(vT);

track17 = createSprite(450,72,100,40);
track17.addImage(vT);

tracks = [track1,track2,track3,track4,track5,track6.track7,track8,track9,track10,track11,track12,track13,track14,track15,track16,track17];
trackV = [track1,track2,track7,track8,track9,track10,track11,track15,track16,track17];
trackH = [track3,track4,track5,track6,track12,track13,track14];
placeHoldersH = [];
placeHoldersV = [];
cars = [];
inGameUI = [t1Bar,t2Bar,t3Bar,t4Bar,t5Bar,sideBar,health,bar,healthSideBar];
castle = createSprite(450,15,40,40);
castle.addImage(castleIMG);
}

function draw(){

  if(gameState == 'home'){
    background(backgroundHome);
    gameReset();
    startScreenButtons();
    drawSprites();
  }
  if(gameState == 'achievement'){
    background(achPage);
    back4.visible = true;
    if(Win == true){b1.visible = true}    if(playEndless == true){b3.visible = true}     if(beatInsane == true){b2.visible = true}    if(upgraded == true){b4.visible = true}    if(learn == true){b5.visible = true}
    acBackButton()
    drawSprites();
  } else {
    back4.visible = false;b1.visible = false;b2.visible = false;b3.visible = false;b4.visible = false;b5.visible = false;
  }
  if(gameState == 'gameSelection'){
    background(backgroundImg);
    clickOnDifficulty(easy,1,500,false);
    clickOnDifficulty(medium,1.5,750,false);
    clickOnDifficulty(hard,2,1000,false);
    clickOnDifficulty(insane,3,1500,false);
    clickOnDifficulty(endless,1,1500,true);
    back1.visible = true;
    drawSprites();
  } else{
    back1.visible = false;
    easy.visible = false;
    medium.visible = false;
    hard.visible = false;
    insane.visible = false;
    endless.visible = false
  }
  if(gameState == 'info'){
    background(info);
    fill("black")
    learn = true;
    back2.visible = true;
    backButton()
    drawSprites();
  } else {
    back2.visible = false;
  }
  if(gameState == 'playing'){
  background(backgroundImg);
  if(life > 0){
    if(doOnce == false){
      enemySpawn(0);
      doOnce = true; 
    }
  fill("black")
text("Money: "+ money, 170,30);
  overTrackChecker()
  enemyCaller();
  turretPlace();
  waveIncreaser();
  clickResetter()
  winCheck()
  inGameBackButton();
drawSprites();
text(wave, 900,210);
text("Turrets: " + turretsOnBoard + "/" + maxTurrets, 650,30);
  } else{
    gameState = 'home';
  }
}


}


 
function enemyCaller(){
  for (var b = 0; b < wave + 5; b++) {
    enemies[b].takeDamage();
enemies[b].enemyPathFinding();
enemies[b].isDelete(b);
  }
}

function overTrackChecker(){
  for(var r = 0; r < trackH.length; r++){
    placeHoldersH.push(new placeHolderH(trackH[r].x,trackH[r].y));
    placeHoldersH[r].isTouchingMouseH();
  }
 for(var q = 0; q < trackV.length; q++){
  placeHoldersV.push(new placeHolderV(trackV[q].x,trackV[q].y));
  placeHoldersV[q].isTouchingMouseV();
  }
}

  function enemySpawn(){

 for(var i = 0; i < wave + 5; i++){
      enemies.push(new Enemy(250,enemyY));
      enemyY = enemyY + 20    
 }
  }


  function waveIncreaser(){
waveCap = wave + 5;

if(enemiesDefeated == waveCap){
  wave = wave + 1;
  enemiesDefeated = 0;
  enemySpawn();
  for(var ea = 0; ea < turrets5.length; ea++){
    turrets5[ea].getMoney();
  }
  for (var e = 0; e <(wave + 4); e++) {
  enemies[e].reset();
  }
}

  }

  function turretPlace(){

    colliderColor = color(170);
    colliderColor.setAlpha(150);

    for(var a = 0; a < turrets1.length; a++){
      turrets1[a].shoot();
      turrets1[a].sideShow();
      turrets1[a].isSold(a);
    }
 

   if(
mouseX + 45.5 > t1Bar.x &&
mouseX - 45.5 < t1Bar.x &&
mouseY + 45.5 > t1Bar.y &&
mouseY - 45.5 < t1Bar.y 
    ){
      if(keyIsDown(69)){
        push() 
        stroke("yellow");
        fill("black")
        text("Click to place ", 200,70);
        text("Place for 300",200,150);
        stroke("green");
        fill("red")
        text("let go to cancel ", 200,110);
        pop()
          t1Bar.x =mouseX;
          t1Bar.y =mouseY;
          push()
          fill(colliderColor);
          ellipse(mouseX,mouseY,200);
          pop()
        if(canPlaceFinal == 17  && mouseX > 150  && money >= 300 && cooldown == false){
        if(turretsOnBoard < maxTurrets){
          if(mouseIsPressed){
            turrets1.push(new Turret1(mouseX,mouseY));
            turretsOnBoard = turretsOnBoard + 1;
            money = money - 300;
            cooldown = true;
            t1Bar.x =72;
            t1Bar.y =75;
          }   
        } 
        } else {
          if(mouseIsPressed){
            fill("red")
            strokeWeight(2)
            stroke(2)
            text("You can't place that", 500, 50);
          }
        }
        } else {
          t1Bar.x =72;
          t1Bar.y =75;
        }
   } else{
   t1Bar.x =72;
   t1Bar.y =75;
   }


   for(var a = 0; a < turrets2.length; a++){
    turrets2[a].shoot();
    turrets2[a].sideShow();
    turrets2[a].isSold(a);
  }


 if(
mouseX + 45.5 > t2Bar.x &&
mouseX - 45.5 < t2Bar.x &&
mouseY + 45.5 > t2Bar.y &&
mouseY - 45.5 < t2Bar.y 
  ){
    if(keyIsDown(69)){
   push() 
   stroke("yellow");
   fill("black")
   text("Click to place ", 200,70);
   text("Place for 500",200,150);
   stroke("green");
   fill("red")
   text("let go to cancel ", 200,110);
   pop()
     t2Bar.x =mouseX;
     t2Bar.y =mouseY;
     push()
     fill(colliderColor);
     ellipse(mouseX,mouseY,100);
     pop()
   if(canPlaceFinal == 17  && mouseX > 150  && money >= 500 && cooldown == false){
   if(turretsOnBoard < maxTurrets){
     if(mouseIsPressed){
       turrets2.push(new Turret2(mouseX,mouseY));
       turretsOnBoard = turretsOnBoard + 1;
       money = money - 500;
       cooldown = true;
       t2Bar.x =72;
       t2Bar.y =193;
     }   
   } 
   } else {
     if(mouseIsPressed){
       fill("red")
       strokeWeight(2)
       stroke(2)
       text("You can't place that", 500, 50);
     }
   }
   } else {
     t2Bar.x =72;
     t2Bar.y =193;
   }
 } else{
 t2Bar.x =72;
 t2Bar.y =193;
 }

 for(var aq = 0; aq < turrets3.length; aq++){
  turrets3[aq].shoot();
  turrets3[aq].sideShow();
  turrets3[aq].isSold(aq);
}


if(
mouseX + 45.5 > t3Bar.x &&
mouseX - 45.5 < t3Bar.x &&
mouseY + 45.5 > t3Bar.y &&
mouseY - 45.5 < t3Bar.y 
){
  if(keyIsDown(69)){
    push() 
    stroke("yellow");
    fill("black")
 text("Click to place ", 200,70);
 text("Place for 600",200,150);
 stroke("green");
 fill("red")
 text("let go to cancel ", 200,110);
 pop()
   t3Bar.x =mouseX;
   t3Bar.y =mouseY;
   push()
   fill(colliderColor);
   ellipse(mouseX,mouseY,200);
   pop()
 if(canPlaceFinal == 17  && mouseX > 150  && money >= 600 && cooldown == false){
 if(turretsOnBoard < maxTurrets){
   if(mouseIsPressed){
     turrets3.push(new Turret3(mouseX,mouseY));
     turretsOnBoard = turretsOnBoard + 1;
     money = money - 600;
     cooldown = true;
     t3Bar.x =72;
     t3Bar.y =311;
   }   
 } 
 } else {
   if(mouseIsPressed){
     fill("red")
     strokeWeight(2)
     stroke(2)
     text("You can't place that", 500, 50);
   }
 }
 } else {
   t3Bar.x =72;
   t3Bar.y =311;
 }
} else{
t3Bar.x =72;
t3Bar.y =311;
}


for(var at= 0; at < turrets4.length; at++){
  turrets4[at].shoot();
  turrets4[at].sideShow(at);
  turrets4[at].isSold(at);
 
}
for(var ao= 0; ao < cars.length; ao++){
  cars[ao].pathFinding();
  cars[ao].respawn();
}

if(
mouseX + 45.5 > t4Bar.x &&
mouseX - 45.5 < t4Bar.x &&
mouseY + 45.5 > t4Bar.y &&
mouseY - 45.5 < t4Bar.y 
){
  if(keyIsDown(69)){
    push() 
stroke("yellow");
fill("black")
text("Click to place ", 200,70);
text("Place for 1250",200,150);
stroke("green");
fill("red")
text("let go to cancel ", 200,110);
pop()
   t4Bar.x =mouseX;
   t4Bar.y =mouseY;
   push()
   fill(colliderColor);
   ellipse(mouseX,mouseY,50);
   pop()
 if(canPlaceFinal == 17  && mouseX > 150  && money >= 1250 && cooldown == false){
 if(turretsOnBoard < maxTurrets){
   if(mouseIsPressed){
     turrets4.push(new Turret4(mouseX,mouseY));
     cars.push(new Car());
     turretsOnBoard = turretsOnBoard + 1;
     money = money - 1250;
     t4Bar.x =72;
     t4Bar.y =429;
     cooldown = true;
   }   
 } 
 } else {
   if(mouseIsPressed){
     fill("red")
     strokeWeight(2)
     stroke(2)
     text("You can't place that", 500, 50);
   }
 }
 } else {
   t4Bar.x =72;
   t4Bar.y =429;
 }
} else{
t4Bar.x =72;
t4Bar.y =429;
}



for(var aa= 0; aa < turrets5.length; aa++){
 
  turrets5[aa].sideShow();
  turrets5[aa].isSold(aa);

}


if(
mouseX + 45.5 > t5Bar.x &&
mouseX - 45.5 < t5Bar.x &&
mouseY + 45.5 > t5Bar.y &&
mouseY - 45.5 < t5Bar.y 
){
  if(keyIsDown(69)){
   push() 
   stroke("yellow");
   fill("black")
text("Click to place ", 200,70);
text("Place for 400",200,150);
stroke("green");
fill("red")
text("let go to cancel ", 200,110);
pop()
  t5Bar.x =mouseX;
  t5Bar.y =mouseY;
  push()
  fill(colliderColor);
  ellipse(mouseX,mouseY,50);
  pop()
if(canPlaceFinal == 17  && mouseX > 150  && money >= 400 && cooldown == false){
if(turretsOnBoard < maxTurrets){
  if(mouseIsPressed){
    turrets5.push(new Turret5(mouseX,mouseY));
    turretsOnBoard = turretsOnBoard + 1;
    money = money - 400;
    cooldown = true;
    t5Bar.x =72;
    t5Bar.y =541;
  }   
} 
} else {
  if(mouseIsPressed){
    fill("red")
    strokeWeight(2)
    stroke(2)
    text("You can't place that", 500, 50);
  }
}
} else {
  t5Bar.x =72;
  t5Bar.y =541;
}
} else{
t5Bar.x =72;
t5Bar.y =541;
}
}


function clickResetter(){

if(cooldown == true){

counter = counter + 1;

if(counter == 25){
cooldown = false;
counter = 0;
}}}
 
function startScreenButtons(){
  if(    
    play.x + 150 > mouseX &&
    play.x - 150 < mouseX &&
    play.y + 50 > mouseY &&
    play.y - 50 < mouseY 
    ){
      if(play.scale < 1){
        play.scale = play.scale + 0.08;
      }

      if(mouseIsPressed){
        gameState = 'gameSelection';
        pew2.play();
        difficultyScreen();
      }
    } else {
      play.scale = .75
    }

    

    if(    
      htPlay.x + 150 > mouseX &&
      htPlay.x - 150 < mouseX &&
      htPlay.y + 50 > mouseY &&
      htPlay.y - 50 < mouseY 
      ){
        if(htPlay.scale < 1){
          htPlay.scale = htPlay.scale + 0.08;
        }
  
        if(mouseIsPressed){
          gameState = 'info';
          pew2.play();
          play.visible = false;
          htPlay.visible = false;
          achievment.visible = false;
        }
      } else {
        htPlay.scale = .75
      }
      
      if(    
        achievment.x + 150 > mouseX &&
        achievment.x - 150 < mouseX &&
        achievment.y + 50 > mouseY &&
        achievment.y - 50 < mouseY 
        ){
          if(achievment.scale < 1){
            achievment.scale = achievment.scale + 0.08;
          }
    
          if(mouseIsPressed){
            gameState = 'achievement';
            pew2.play();
            play.visible = false;
            htPlay.visible = false;
            achievment.visible = false;
          }
        } else {
          achievment.scale = .75
        }
    
}

function gameReset(){
  i = 0;
  En = 0;
  play.visible = true;
  htPlay.visible = true;
  achievment.visible = true;
  life = 100;
  difficulty2 = 1;
  difficultyChanger = 1;
  wave = 0; 
  enemyY = 590;
  enemiesDefeated = 0
  money = 500
  cooldown = false
  counter = 0
  castle.visible = false;
  doOnce = false;

  for(var r1= 0; r1 < turrets1.length; r1++){
    turrets1[r1].gameOver(r1);
    turrets1[r1].isSold(r1);
  }
  for(var r2= 0; r2 < turrets2.length; r2++){
    turrets2[r2].gameOver(r2);
    turrets2[r2].isSold(r2);
  }
  for(var r3= 0; r3 < turrets3.length; r3++){
    turrets3[r3].gameOver(r3);
    turrets3[r3].isSold(r3);

  }
  for(var r4= 0; r4 < turrets4.length; r4++){
    turrets4[r4].gameOver(r4);
    turrets4[r4].isSold(r4);
  }
  for(var r5= 0; r5 < turrets5.length; r5++){
    turrets5[r5].gameOver(r5);
    turrets5[r5].isSold(r5);

  }
  for(var Tr = 0; Tr < trackV.length; Tr++){
    trackV[Tr].visible = false;
  }
  for(var Tr2 = 0; Tr2 < trackH.length; Tr2++){
    trackH[Tr2].visible = false;
  }
  for(var Ui = 0; Ui < inGameUI.length; Ui++){
    inGameUI[Ui].visible = false;
  }
  for(var En = 0 ; En < enemies.length; En=En + 0){
    enemies[En].deleteActive();
    enemies[En].isDelete(En);
  }
}

function difficultyScreen(){
  play.visible = false;
  htPlay.visible = false;
  achievment.visible = false;
  easy.visible = true;
  medium.visible = true;
  hard.visible = true;
  insane.visible = true;
  endless.visible = true;
}

function clickOnDifficulty(obj,dif,moneyamt,mode){
  
  
  if(    
    obj.x + 100 > mouseX &&
    obj.x - 100 < mouseX &&
    obj.y + 75 > mouseY &&
    obj.y - 75 < mouseY 
    ){

      if(obj.scale < 1){
        obj.scale = obj.scale + 0.08;
      }

     if(mouseIsPressed){
      difficulty2 = dif;
      gameState = 'playing'
      difficultySelected();
      difficultyMode = mode;
      if(obj == endless){
        maxTurrets = 99;
        playEndless = true;
      } else {
        maxTurrets = 5;
      }
      pew2.play();
      money = moneyamt;
     }

    } else{
      obj.scale = 0.8;
    }

    if(    
      back1.x + 150 > mouseX &&
      back1.x - 150 < mouseX &&
      back1.y + 50 > mouseY &&
      back1.y - 50 < mouseY 
      ){
        if(back1.scale < 1.25){
          back1.scale = back1.scale + 0.08;
        }
  
        if(mouseIsPressed){
          gameState = 'home';
          pew2.play();
        }
      } else {
        back1.scale = 1
      }
}

function difficultySelected(){
castle.visible = true;

  for(var Tra = 0; Tra < trackV.length; Tra++){
    trackV[Tra].visible = true;
  }
  for(var Tra2 = 0; Tra2 < trackH.length; Tra2++){
    trackH[Tra2].visible = true;
  }
  for(var Ui2 = 0; Ui2 < inGameUI.length; Ui2++){
    inGameUI[Ui2].visible = true;
  }

}

function winCheck(){
  if(difficultyMode == false){
  if(wave >= 50){
    gameState = 'home';
    Win = true;
  }
  if(wave>=50 && difficulty2 == 3){
    beatInsane = true;
  }
}
}

function backButton(){

  if(    
    back2.x + 150 > mouseX &&
    back2.x - 150 < mouseX &&
    back2.y + 50 > mouseY &&
    back2.y - 50 < mouseY 
    ){
      if(back2.scale < 1.25){
        back2.scale = back2.scale + 0.08;
      }

      if(mouseIsPressed){
        gameState = 'home';
        pew2.play();
      }
    } else {
      back2.scale = 1
    }

}

function inGameBackButton(){
  if(keyIsDown(27)){
    back3.visible = true;
    continue1.visible = true;
    empty.visible = true;
  }
  if(back3.visible == true){
    if(    
      back3.x + 25 > mouseX &&
      back3.x - 25 < mouseX &&
      back3.y + 25 > mouseY &&
      back3.y - 25 < mouseY 
      ){
  
        if(back3.scale < 1.25){
          back3.scale = back3.scale + 0.08;
        }
  
       if(mouseIsPressed){
        gameState = 'home';
        back3.visible = false;
        continue1.visible = false;
        empty.visible = false;
        pew2.play();
       }
  
      } else{
        back3.scale = 1;
      }
     
      if(    
        continue1.x + 25 > mouseX &&
        continue1.x - 25 < mouseX &&
        continue1.y + 25 > mouseY &&
        continue1.y - 25 < mouseY 
        ){
    
          if(continue1.scale < 1.25){
            continue1.scale = continue1.scale + 0.08;
          }
    
         if(mouseIsPressed){
          pew2.play();
          back3.visible = false;
          continue1.visible = false;
          empty.visible = false;
         }
    
        } else{
          continue1.scale = 1;
        }
    
  }
}

function acBackButton(){

  if(    
    back4.x + 150 > mouseX &&
    back4.x - 150 < mouseX &&
    back4.y + 50 > mouseY &&
    back4.y - 50 < mouseY 
    ){
      if(back4.scale < 1.25){
        back4.scale = back4.scale + 0.08;
      }

      if(mouseIsPressed){
        gameState = 'home';
        pew2.play();
      }
    } else {
      back4.scale = 1
    }


}