console.log("controlobject.js is called")

// The class of ControlObject will deal with all mouse interactions
class ControlObject{
    // pass the name of the canvas 
    // canvas is the page element
    //Dx, Dy, Dw, Dh = x cooridindant, y co-ordindate, width, height of the area where the use can draw shapes

    constructor(canvas, Dx, Dy, Dw, Dh){
        // defining the local variables
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        // width and height for the rectangle guide
        this.w = 0;
        this.h = 0;

        // width, height, x and y for drawing area
        // Dx, Dy, Dw and Dy are defined in main
        this.Dx = Dx;
        this.Dy = Dy;
        this.Dw = Dw;
        this.Dh = Dh;
        
        this.element = canvas;
        // the is listenner is being attached to the canvas element
        // therefore the canvas element is listening for the mouse down, move and up events
        // the mouse events will only be registered on the canvas element
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

        this.ObjectSet = [];

        //  false is the the default setting
        this.inBounds = false;
    }


    // this function is called when the user has clicked down
    mDown(e){
        // positions of the mouse
        // taking mouse position relative to the top point of the canvas and giving that to the x/yMouseStar
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        //this.update()
        // reset w and h to 0 
        this.w = 0;
        this.h = 0;
        // when mouse goes down it stays down
        //this.mouseDown = true;
        //defining the inbounds and setting
        // only set mousedown to true if they have clicked inside the boundary
        if (this.inBoundsCheck(this.xMouseStart, this.yMouseStart, this.Dx, this.Dy, this.Dw, this.Dh)){
            this.mouseDown = true;
        }
    }


    // current positions of the mouse (updated)
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        //console.log("mouse move event");

        // 
    if(this.mouseDown == true && this.inBoundsCheck(this.xMouse, this.yMouse, this.Dx, this.Dy, this.Dw, this.Dh) && Button.Shape == "Brush"){
    if (Circle_buttons.Value == "S"){
        // line object is created, using the dimesions of the draw guide
        var temp = new Brush(this.xMouse, this.yMouse, 10, Swatch.Colour);
        // add new object to object list
        this.ObjectSet.push(temp);
    }
    else if (Circle_buttons.Value == "M"){
        // line object is created, using the dimesions of the draw guide
        var temp = new Brush(this.xMouse, this.yMouse, 15, Swatch.Colour);
        // add new object to object list
        this.ObjectSet.push(temp);
    }
    else if (Circle_buttons.Value == "L"){
        // line object is created, using the dimesions of the draw guide
        var temp = new Brush(this.xMouse, this.yMouse, 20, Swatch.Colour);
        // add new object to object list
        this.ObjectSet.push(temp);
    }
    else{
        // line object is created, using the dimesions of the draw guide
        var temp = new Brush(this.xMouse, this.yMouse, 15, Swatch.Colour);
        // add new object to object list
        this.ObjectSet.push(temp);
    }

    }
    }
    

    // this function is called when the user has released their click
    mUp(e){
        //console.log("mouse up event");
         
        // create the drag and drop rectangle if mouseDown is true
        if (this.mouseDown == true){
            if (Button.Shape == "Rectangle"){
                // rectangle object is created, using the dimesions of the draw guide
                var temp= new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, Swatch.Colour );
                // add new object to object list
                this.ObjectSet.push(temp);
            }else if(Button.Shape == "Ellipse"){
                // ellipse object is created, using the dimesions of the draw guide
                var temp = new Ellipse(this.xMouseStart, this.yMouseStart, this.w, this.h, Swatch.Colour );
                //console.log(temp)
                // add new object to object list
                this.ObjectSet.push(temp); 
            }
            else if(Button.Shape == "Triangle"){
                // triangle object is created, using the dimesions of the draw guide
                var temp = new Triangle(this.xMouseStart, this.yMouseStart, this.w, this.h, Swatch.Colour);
                //console.log(temp)
                // add new object to object list
                this.ObjectSet.push(temp); 
            }
            else if(Button.Shape == "Polygon"){
                // polygon object is created, using the dimesions of the draw guide
                var temp = new Polygon(this.xMouseStart + this.w/2, this.yMouseStart + this.h/2, this.h, this.w, Polygon_buttons.Sides, Swatch.Colour);
                // add new object to object list
                this.ObjectSet.push(temp);  
            }
            else if(Button.Shape == "Line"){
                // line object is created, using the dimesions of the draw guide
                var temp = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, 10, Swatch.Colour);
                // add new object to object list
                this.ObjectSet.push(temp);  
            }
            else if(Button.Shape == "Diamond"){
                // diamond object is created, using the dimesions of the draw guide
                var temp = new Diamond(this.xMouseStart, this.yMouseStart, this.w, this.h, Swatch.Colour);
                // add new object to object list
                this.ObjectSet.push(temp);  
            }
    
        }

        //console.log(temp)
        this.mouseDown = false;
        

    }


    inBoundsCheck(xM, yM, x, y, w, h){
        // check the boundaries
        // return true if inside boundaries
        // return false if ouside boundaries
        if(xM > x && xM < x+w && yM > y && yM < y+h){
            return true;
        }else{
            return false;
        }
    
    }

    update(){
        // the rectangle for the drawing area must be run first

    ctx.save()
        this.drawDrawingAreaRect(this.Dx, this.Dy, this.Dw, this.Dh, colArray[0][1])
    ctx.clip()
        // calculate the new w and h values of the rect to use in the draw function

    
        // making sure the click and dragged guid rectangle never leaves the edge of the box
        if(this.xMouse < this.Dx ){
            this.xMouse = this.Dx
        }
        else if(this.xMouse > this.Dx + this.Dw){
            this.xMouse = this.Dx + this.Dw
        }

        if(this.yMouse < this.Dy){
            this.yMouse = this.Dy
        }
        else if(this.yMouse > this.Dy + this.Dh){
            this.yMouse = this.Dy + this.Dh
        }
        
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;

        // draw the stroke rectangle when mouseDown is true
        // the function only calls the draw function if the mouse is down
        // short for saying 'this.mouseDown == true' 
        if(this.mouseDown){
            this.draw();
        }

        // looping through the object set, for each element, to call the update of each object
        for (var i=0; i<this.ObjectSet.length; i++){
            this.ObjectSet[i].update();
        }
    ctx.restore();

    //ctx.restore
        // what happens if the clear all button is clicked
        if (Button.Shape == "Clear All"){
            console.log("clear all button has been clicked") 
            //console.log(Button.Clicked)
            //console.log(Button.Shape)
            // clearing the object set
            this.ObjectSet = []; 
            // so no button is selected
            //Button.Clicked = "";
            // deselecting the button
            Button.Shape = ""; 
            //console.log(Button.Clicked)
            //console.log(Button.Shape)
        } 
        // what happens if the undo button is clicked
        if (Button.Shape == "Undo"){
            console.log("undo button has been clicked")
            //console.log(Button.Clicked)
            //console.log(Button.Shape)
            // pop the last thing that instatiated 
            this.ObjectSet.pop(); 
            //Button.Clicked = "";
            // deselecting the button, so it won't keep on undoing the actions
            Button.Shape = ""; 
            //console.log(Button.Clicked)
            //console.log(Button.Shape)
        }
        
    }

    draw(){
        //this.drawRectGuide(this.xMouseStart, this.yMouseStart, this.w, this.h, colArray[0][0]);

        if(Button.Shape == "Rectangle" || Button.Shape == "Ellipse" || Button.Shape == "Triangle" || Button.Shape == "Polygon" || Button.Shape == "Diamond"){
            this.drawRectGuide(this.xMouseStart, this.yMouseStart, this.w, this.h, colArray[0][0]);
        }else if(Button.Shape == "Line"){
            ctx.beginPath();
            ctx.moveTo(this.xMouseStart, this.yMouseStart)
            ctx.lineTo(this.xMouse,this.yMouse)
            ctx.lineWidth = 15;
            ctx.strokeStyle = Swatch.Colour;
            ctx.stroke();
            //console.log(this.xMouseStart, this.yMouseStart,this.xMouse,this.yMouse)
        }
    }

    drawRectGuide(x,y,w,h,c){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWith = 1;
        ctx.strokeStyle = c;
        ctx.stroke();
    }

    drawDrawingAreaRect(x,y,w,h,c){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.fillStyle = c;
        ctx.fill();
    }

}



