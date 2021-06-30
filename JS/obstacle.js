class Obstacle {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.sprite = createSprite(x,y,20,20);
        var c = Math.round(random(1,3));
        switch(c) {
            case 1: this.sprite.shapeColor = "blue"; 
                    break;
            case 2: this.sprite.shapeColor = "red";
                    break;
            case 3: this.sprite.shapeColor = color(random(0,255), random(0,255), random(0,255));
                    break;
        }
        
        this.flag = true;
        obsGroup.add(this.sprite);
    }
   /* check(){

        if(this.flag === true && player.isTouching(this.sprite) && player.color === this.sprite.color){
            this.sprite.remove(); 
            this.flag = false;
        }            
    }*/
}
