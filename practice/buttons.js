console.log("buttons js called");

class Button{
    constructor(x,y,w,h,text, c1, c2, c3){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.outline = c1;
        this.fill = c2;
        this.hover = c3;
        
        // mouse event listeners
        canvas.addEventListener('click', this.mClick.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        
        // mouse locations starts at 0
        this.xMouse = 0;
        this.yMouse = 0;
        //  false is the the default setting
        this.inBounds = false;
        // get rid of this because 'Button.clicked' has been incorprated
        //this.clicked = false;
    }


    mClick(e){
        
        // if we clicked and it's inbound then button has been selected
    
        if(this.inBounds){
            //console.log("click inside the boundary");
            //button has been selected
            
            Button.Clicked = this;
            Button.Shape = this.text;
            // it will say this 'this is the selected object'
            // it'll push out a button, if a new one becomes clicked

            //Button.shape = this.text;

        }
     
    }

    mMove(e){
        // update the x and y position variables to be the correct canvas coordinates
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log(this.xMouse);
        //console.log(this.yMouse);
        this.inBounds = this.inBoundsCheck(this.xMouse,this.yMouse, this.x, this.y, this.w, this.h)
        //console.log(this.inBounds);

    }

    inBoundsCheck(xM, yM, x, y, w, h){
        // if inside button return true
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
        ctx.strokeStyle = this.outline;
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        
        
        // change colour if mouse is over button
        if(this.inBounds || Button.Clicked == this){
            ctx.fillStyle = this.hover;
            ctx.lineWidth = 4;
            ctx.fill();
            // the fill colour is reset for the text code , so it will be written in the fill colour
            ctx.fillStyle = this.fill;
        }
        else{
            ctx.fillStyle = this.fill;
            ctx.fill();
            // fill txt with different colour, this is set for the text code next
            ctx.fillStyle = this.outline;
        }
        

        ctx.stroke();

        ctx.fillStyle=this.outline
        var myFont = "bold 20px 'Trebuchet MS', Verdana, sans-serif";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        // sets the font from 'var myFont'
        ctx.font=myFont;
        // set the text in the middle of the button
        ctx.fillText(this.text, this.x+this.w/2, this.y+this.h/2)

    }
    

}


class Polygon_buttons{
    constructor(x,y,w,h,text, c1, c2, c3){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.outline = c1;
        this.fill = c2;
        this.hover = c3;
        
        // mouse event listeners
        canvas.addEventListener('click', this.mClick.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        
        // mouse locations starts at 0
        this.xMouse = 0;
        this.yMouse = 0;
        //  false is the the default setting
        this.inBounds = false;
        // get rid of this because 'Button.clicked' has been incorprated
        //this.clicked = false;
    }


    mClick(e){
        
        // if we clicked and it's inbound then button has been selected
    
        if(this.inBounds){
            //console.log("click inside the boundary");
            //button has been selected
            Polygon_buttons.Clicked = this;
            Polygon_buttons.Sides = this.text;
            // it will say this 'this is the selected object'
            // it'll push out a button, if a new one becomes clicked

            //Button.shape = this.text;

        }
     
    }

    mMove(e){
        // update the x and y position variables to be the correct canvas coordinates
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log(this.xMouse);
        //console.log(this.yMouse);
        this.inBounds = this.inBoundsCheck(this.xMouse,this.yMouse, this.x, this.y, this.w, this.h)
        //console.log(this.inBounds);

    }

    inBoundsCheck(xM, yM, x, y, w, h){
        // if inside button return true
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
        ctx.strokeStyle = this.outline;
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        
        
        // change colour if mouse is over button
        if(this.inBounds || Polygon_buttons.Clicked == this){
            ctx.fillStyle = this.hover;
            ctx.lineWidth = 4;
            ctx.fill();
            // the fill colour is reset for the text code , so it will be written in the fill colour
            ctx.fillStyle = this.fill;
        }
        else{
            ctx.fillStyle = this.fill;
            ctx.fill();
            // fill txt with different colour, this is set for the text code next
            ctx.fillStyle = this.outline;
        }
        

        ctx.stroke();

        ctx.fillStyle=this.outline
        var myFont = "bold 20px 'Trebuchet MS', Verdana, sans-serif";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        // sets the font from 'var myFont'
        ctx.font=myFont;
        // set the text in the middle of the button
        ctx.fillText(this.text, this.x+this.w/2, this.y+this.h/2)

    }
    

}



class Circle_buttons{
    constructor(x,y,r,text, c1, c2, c3){
        this.x = x;
        this.y = y;
        this.r = r;
        this.text = text;
        this.outline = c1;
        this.fill = c2;
        this.hover = c3;

        // mouse event listeners
        canvas.addEventListener('click', this.mClick.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        
        // mouse locations starts at 0
        this.xMouse = 0;
        this.yMouse = 0;
        // false is the the default setting
        this.inBounds = false;
        console.log("Circle_buttons.js is running")
    }


    mClick(e){
        // if we click and it's inbound then button has been selected
        if(this.inBounds){
            //button has been selected
            Circle_buttons.Clicked = this;
            Circle_buttons.Value = this.text;
        }
     
    }

    mMove(e){
        // update the x and y position variables to be the correct canvas coordinates
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        
        this.inBounds = this.inBoundsCheck(this.xMouse,this.yMouse, this.x, this.y, this.r)
        //console.log(this.inBounds);

    }

    // special distance check using pythagoras
    // @ param x position of mouse, y position of mouse, x position of centre of circle, y position of centre of circle, radious of the circle
    // @ return boolean
    inBoundsCheck(xM, yM, x, y, r){
        // if inside button return true
        var d = Math.sqrt(Math.pow(xM-x, 2) + Math.pow(yM-y, 2))
        if(d<r){
            return true;
        }else{
            return false;
        }
    }

    update(){
        this.draw();
    }


    // draw the button
    draw(){
        ctx.strokeStyle = this.outline;
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        //ctx.ellipse(this.x, this.y, Math.abs(this.r), Math.abs(this.r), 0, 0, 2*Math.PI)
        ctx.arc(this.x, this.y, Math.abs(this.r), 0, 2*Math.PI);;
        
        
        // change colour if mouse is over button
        if(this.inBounds || Circle_buttons.Clicked == this){
            ctx.fillStyle = this.hover;
            ctx.lineWidth = 4;
            ctx.fill();
            // the fill colour is reset for the text code , so it will be written in the fill colour
            ctx.fillStyle = this.fill;
        }
        else{
            ctx.fillStyle = this.fill;
            ctx.fill();
            // fill txt with different colour, this is set for the text code next
            ctx.fillStyle = this.outline;
        }
        

        ctx.stroke();

        ctx.fillStyle=this.outline
        var myFont = "bold 20px 'Trebuchet MS', Verdana, sans-serif";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        // sets the font from 'var myFont'
        ctx.font=myFont;
        // set the text in the middle of the button
        ctx.fillText(this.text, this.x, this.y)

    }
    

}


// static variable to make it so only one button can be selected at one time
Button.Clicked = "";
// static variable takes the text of the currently selected button
Button.Shape = "";

// static variable for the polygon button set, so only one number of sides can be selected at a time
Polygon_buttons.Clicked = "";
// takes the text of the currently selected button
// static variable for the polygon button set, to store the number of sides for the polygon shape
Polygon_buttons.Sides = "5";

//static variable for circle buttons, so only one circle button can be selected at a time
Circle_buttons.Clicked = ""
//static variable that takes the text of the currently selected button
Circle_buttons.Value = "M"