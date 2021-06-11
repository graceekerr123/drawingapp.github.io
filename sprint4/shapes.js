console.log("shapes.js is called")

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
    this.draw();
    }
}

class Ellipse{
    constructor(x,y,w,h, fillcolour){
        this.x = x + w/2;
        this.y = y + h/2;
        this.xR = Math.abs(w/2);
        this.yR = Math.abs(h/2);
        this.c = fillcolour;
    }

draw(){
    ctx.beginPath();
    //ctx.ellipse(0, 0, 200, 100, 0, 0, 2 * Math.PI);
    ctx.ellipse(this.x, this.y, this.xR, this.yR, 0, 0, 2 * Math.PI);
    ctx.fillStyle = this.c;
    ctx.fill();
}


// changing values of x,y,w,h,fillcolour can be transferred through the update function
update(){
    this.draw();
    }
    
    
}