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
        //console.log(this.inBounds)
        //console.log(Button.Shape)
        
        //console.log("down")
        //console.log(this.w)
        //console.log(this.h)
    }


    // current positions of the mouse (updated)
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

        //console.log("mouse move event");
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
            else if(Button.Shape == "Pentagon"){
                // polygon object is created, using the dimesions of the draw guide
                var temp = new Polygon(this.xMouseStart + this.w/2, this.yMouseStart + this.h/2, this.h, this.w, 5, Swatch.Colour);
                // add new object to object list
                this.ObjectSet.push(temp); 
            }
            else if(Button.Shape == "Hexagon"){
                // polygon object is created, using the dimesions of the draw guide
                var temp = new Polygon(this.xMouseStart + this.w/2, this.yMouseStart + this.h/2, this.h, this.w, 6, Swatch.Colour);
                // add new object to object list
                this.ObjectSet.push(temp); 
            }
            else if(Button.Shape == "Heptagon"){
                // polygon object is created, using the dimesions of the draw guide
                var temp = new Polygon(this.xMouseStart + this.w/2, this.yMouseStart + this.h/2, this.h, this.w, 7, Swatch.Colour);
                // add new object to object list
                this.ObjectSet.push(temp);

/*
                if(Math.abs(w) > Math.abs(h)){
                var temp = new Polygon(this.xMouseStart + this.w/2, this.yMouseStart + this.h/2, Math.abs(this.h/2), 5, Swatch.Colour);
                console.log(temp)
                // add new object to object list
                this.ObjectSet.push(temp); 
                }
                else if(Math.abs(w) < Math.abs(h)){
                var temp = new Polygon(this.xMouseStart + this.w/2, this.yMouseStart + this.h/2, Math.abs(this.w/2), 5, Swatch.Colour);
                console.log(temp)
                // add new object to object list
                this.ObjectSet.push(temp); 
                }
                else{
                    var temp = new Polygon(this.xMouseStart + this.w/2, this.yMouseStart + this.h/2, 5, this.h/2, Swatch.Colour);
                    console.log(Swatch.Colour)
                    console.log(temp)
                    // add new object to object list
                    this.ObjectSet.push(temp);  
                }
                
                
                var R;
                if (Math.abs(w)<Math.abs(h)){
                    R = Math.abs(w)
                }
                else{
                    R=Math.abs(h)
                }
                var temp = new Polygon(this.xMouseStart + this.w/2, this.yMouseStart + this.h/2, 5, R/2, Swatch.Colour);
                // add new object to object list
                this.ObjectSet.push(temp); 
        */
                
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
        this.drawDrawingAreaRect(500, 15, 485, 670, colArray[0][1])
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
        
    }

    draw(){
        this.drawRectGuide(this.xMouseStart, this.yMouseStart, this.w, this.h, colArray[0]);
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



