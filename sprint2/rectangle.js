console.log("rectangle.js is called")

class Rectangle{
    constructor(x,y,w,h,fillcolour){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = fillcolour;
    }

draw(){
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.w,this.h);
    ctx.fillStyle = this.c;
    ctx.fill();
}


// changing values of x,y,w,h,fillcolour can be transferred through the update function
update(){
    this.draw(this.x, this.y, this.w, this.h, this.c);
    }
    
}