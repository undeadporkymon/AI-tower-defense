class placeHolderV{
    constructor(xV,yV){
        this.x = xV
        this.y = yV
        this.canPlace = false;
        this.stop = false;
        this.continue = false;
    }


 isTouchingMouseV(){

    if(this.canPlace == true && this.stop == false){
        canPlaceFinal = canPlaceFinal + 1;
        this.stop = true;
       
    } else{
        if(this.stop == true && this.canPlace == false){
            canPlaceFinal = canPlaceFinal - 1;
            this.stop = false;
        }
    }

    if(
        mouseX + 20 > this.x &&
        mouseX - 20 < this.x &&
        mouseY + 50 > this.y &&
        mouseY - 50 < this.y 
            ){
                this.canPlace = false
    
            } else{
                this.canPlace = true
   
            }
}
}

class placeHolderH{
    constructor(xV,yV){
        this.x = xV
        this.y = yV
        this.canPlace = false;
        this.stop = false;
        this.continue = false;
    }

    isTouchingMouseH(){
      
       
        if(this.canPlace == true && this.stop == false){
            canPlaceFinal = canPlaceFinal + 1;
            this.stop = true;
        } else{
            if(this.stop == true && this.canPlace == false){
                canPlaceFinal = canPlaceFinal - 1;
                this.stop = false;
            }
        }
    


        if(
            mouseX + 50 > this.x &&
            mouseX - 50 < this.x &&
            mouseY + 20 > this.y &&
            mouseY - 20 < this.y 
                ){
                    this.canPlace = false;
               
                } else {
                    this.canPlace = true;
                
                }
    }

}