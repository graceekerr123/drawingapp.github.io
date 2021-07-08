console.log("colourpalette js js called");

class Swatch{
    constructor(x, y, w, h, c_1, c_2){
        // defining the variables 
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c_1;
        this.stroke = c_2;

        // mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        canvas.addEventListener('click', this.mClick.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));

        this.inBounds = false;
    }


    mClick(e){
        //console.log("click");
        // if we clicked and it's inbound then button has been selected
        if(this.inBounds){
            Swatch.Clicked = this;
            // the static variable of Swatch.Colour is now the fill colour of the swatch
            Swatch.Colour = this.fill;
            //console.log(Swatch.Colour)
        
        }
    }


     mMove(e){
        // update the x and y position variables to be the correct canvas coordinates
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //check if in the boundary 
        this.inBounds = this.inBoundsCheck(this.xMouse,this.yMouse, this.x, this.y, this.w, this.h)
     }
        

    
    inBoundsCheck(xM, yM, x, y, w, h){
        // if inside swatch return true
        if(xM>x && xM<x+w && yM>y && yM<y+h){
            return true;
        }else{
            return false;
        }
    
    }

    update(){
        this.draw();
    }
    
    draw(){
        ctx.strokeStyle = this.stroke;
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 1; 
        ctx.beginPath(); 
        ctx.rect(this.x, this.y, this.w, this.h);

        if(this.inBounds || Swatch.Clicked == this){
            ctx.lineWidth = 4;
        }
        ctx.fill();
        ctx.stroke();

    }


}


Swatch.Clicked = "";
Swatch.Colour  = colArray[0][0];








