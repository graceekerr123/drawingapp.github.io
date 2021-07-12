console.log("shapes js is called");

// class Rectangle (x, y, w, h, colour)
class Rectangle{
    // takes x and y coordinates, width, height (integers), colour (as rgba string from colArray)
    constructor(x,y,w,h,fillcolour){
        // defining variables
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

update(){
    // draw the rectangle
    this.draw();
    }
}

// class Ellipse (x, y, xR, xR, colour)
class Ellipse{
    // constructor takes centre x and y coordinates, width, height (integers), colour (as rgba string from colArray)
    constructor(x,y,w,h, fillcolour){
        // x centre
        this.x = x + w/2;
        // y centre
        this.y = y + h/2;
        // radius of x that is positive
        this.xR = Math.abs(w/2);
        // radius of y that is positive
        this.yR = Math.abs(h/2);
        this.c = fillcolour;
    }

draw(){
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.xR, this.yR, 0, 0, 2 * Math.PI);
    ctx.fillStyle = this.c;
    ctx.fill();
}

update(){
    // draw ellipse
    this.draw();
    }
}

// class Triangle(x, y, w, h, colour)
class Triangle{
    // constructor takes start mouse coordinates, width, height (integers), colour (as rgba string from colArray)
    constructor(xS,yS,w,h,fillcolour){
        this.x = xS;
        this.y = yS;
        this.w = w;
        this.h = h;
        this.c = fillcolour;
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x + this.w/2, this.y);
        ctx.lineTo(this.x+this.w, this.y+this.h);
        ctx.lineTo(this.x, this.y+this.h);
        ctx.closePath();
        ctx.fillStyle = this.c;
        ctx.fill();
    }


    update(){
        // draw triangle
        this.draw();
        
    }
}

// class Polygon (xC,yX,w,d,n,c)
class Polygon{
    // constructor takes centre of polygon coordinates, width, height, number of sides, colour)
    constructor(xC,yC, w, h, n, c){
        this.xC = xC;
        this.yC = yC;
        this.w = w;
        this.h = h;
        this.n = n;
        this.c = c;
    }

    // function starts here
    draw(){
        var x = 0;
        var y = 0;
        var R = Math.min(Math.abs(this.w),Math.abs(this.h))/2;
        // draw polygon
        ctx.beginPath();
        
        for(var i=0; i<=this.n; i++){
            x = Math.round(this.xC + (R*Math.cos(i*2*Math.PI/this.n)));
            y = Math.round(this.yC + (R*Math.sin(i*2*Math.PI/this.n)));
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

// class Line (xS, yS, xE, yE, w, colour)
class Line{
    // constructor takes start x and y coordinates, end x and y coordinates, width, colour
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
        this.draw();
    }

    draw(){
        // draw line function
        ctx.strokeStyle = this.fill;
        ctx.lineWidth = this.w;
        // round edge
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.xS, this.yS);
        ctx.lineTo(this.xE, this.yE);
        ctx.stroke();
    }
}

// class Brush (xC, yC, r, colour)
class Brush{
    // constructor takes x coordinate, y coordinate, radius and colour
    constructor(x, y, r, c){
        // centre x;
        this.xC = x; 
        // centre y;
        this.yC =y; 
        this.r = r;
        this.fill = c;
    }

    update(){
        this.draw();
    }

    draw(){
        // brush is drawn
        ctx.beginPath();
        // drawing circles to replicate what a draw drawes
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}

// class Diamond (x, y, w, h, colour)
class Diamond{
    // constructor takes x and y start coordinates, width, height, colour
    constructor(xS, yS, w, h, c){
        this.x = xS;
        this.y = yS;
        this.w = w;
        this.h = h;
        this.fill = c;
}
    
    update(){
        this.draw();
    }
    
    draw(){
        // draw diamond
        ctx.beginPath();
        ctx.moveTo(this.x + this.w/2, this.y);
        ctx.lineTo(this.x+this.w, this.y+this.h/2);
        ctx.lineTo(this.x +this.w/2, this.y+this.h);
        ctx.lineTo(this.x, this.y+this.h/2);
        ctx.closePath();
        ctx.fillStyle = this.fill;
        ctx.fill();
        }
}

// class RotatingEllipse(x,y,xR,yR,c,counter)
class RotatingEllipse{
    // constructor takes x and y start mouse coordinates, width, height, colour
    constructor(x,y,w,h, fillcolour){
        // x centre
        this.x = x + w/2;
        // y centre
        this.y = y + h/2;
        // radius of x which is positive
        this.xR = Math.abs(w/2);
        // radius of y which is positive
        this.yR = Math.abs(h/2);
        this.c = fillcolour;
        // counter starts at 0
        this.counter = 0;
    }

draw(){
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.xR, this.yR, 4*this.counter*Math.PI/180, 0, 2 * Math.PI);
        ctx.fillStyle = this.c;
        ctx.fill();
}

update(){
    // counter increases by 1 every 1/40th of a second
    this.counter +=1;
    // ellipse is drawn
    this.draw();
    }

}


// class Star (r,xC,yC,n,colour,counter)
class Star{
    // variables that the constructor takes are centre x and y coordinates, radius, number of points, colour
    constructor(xC, yC, r, points, c){
        this.r = r;
        this.xC = xC;
        this.yC = yC;
        this.n = points;
        this.fillStyle = c;
        this.counter = 0;
    }

    draw(){
        var x = 0;
        var y = 0;
        var n = this.n * 2;
        var rad = this.r/3;
        var R;
        ctx.lineWidth = 10;

        ctx.beginPath();
        for(var i=0; i<n; i++){
            // every second point drawn will be on the outer circle
            if (i%2==0){
                R = this.r;
            }else{
                R = rad;
            }

            x = this.xC + R*Math.cos(i*2*Math.PI/n  +this.counter/20);
            y = this.yC + R*Math.sin(i*2*Math.PI/n  +this.counter/20);
            
            if(i==0){
                //for the first point
                ctx.moveTo(x, y);
            }else{
                // for all other star points
                ctx.lineTo(x, y);
            }   
        }

        ctx.closePath();
        ctx.rotate(Math.PI * 2);
        ctx.fillStyle = this.fillStyle;
        ctx.fill();
    }

    update(){
        // counter increases by 1 for every 1/40th of a second
        this.counter += 1;
        // draw a star
        this.draw();
    }
}


