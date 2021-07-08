console.log("shapes js is called")

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

class Triangle{
    constructor(xS,yS,w,h,fillcolour){
        this.x = xS;
        this.y = yS;
        this.w = w;
        this.h = h;
        this.c = fillcolour;
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x + this.w/2, this.y)
        ctx.lineTo(this.x+this.w, this.y+this.h)
        ctx.lineTo(this.x, this.y+this.h)
        //ctx.closePath();
        ctx.fillStyle = this.c;
        ctx.fill();
    }


    update(){
        this.draw();
        
    }}


class Polygon{
    constructor(xC,yC, w, h, n, c){
        //console.log("Polygon");
        this.xC = xC;
        this.yC = yC;
        this.w = w;
        this.h = h;
        //this.r = r;
        this.n = n;
        this.c = c;
    }

    // function starts here
    draw(){
        //console.log("draw");
        var x = 0;
        var y = 0;
        var R = Math.min(Math.abs(this.w),Math.abs(this.h))/2

        ctx.beginPath();
        
        for(var i=0; i<=this.n; i++){
            x = Math.round(this.xC + (R*Math.cos(i*2*Math.PI/this.n)));
            y = Math.round(this.yC + (R*Math.sin(i*2*Math.PI/this.n)));
            //console.log(x,y);  
            if (i == 0){
                //only begin a path once
                ctx.moveTo(x,y);
            }
            else{
                ctx.lineTo(x,y);
            }
        }
        ctx.closePath();
        ctx.fillStyle = this.c;
        ctx.fill();
    }

    update(){
        this.draw();
    }

}


class Line{
    constructor(xS, yS, xE, yE, w, c){
        // variables needed to draw line
        this.xS = xS;
        this.yS = yS;
        this.xE = xE;
        this.yE = yE;
        this.w = w;
        this.fill = c;
    }

    update(){
        this.draw()
    }

    draw(){
        // draw line function
        ctx.strokeStyle = this.fill;
        ctx.lineWidth = this.w;
        //ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.xS, this.yS);
        ctx.lineTo(this.xE, this.yE);
        ctx.stroke();
    }
}


class Brush{
    // varaibles need to create a brush 
    constructor(x, y, r, c){
        // centre x
        this.xC = x; 
        // centre y
        this.yC =y; 
        this.r = r;
        this.fill = c;
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        // drawing circles to replicate what a draw drawes
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}