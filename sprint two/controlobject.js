console.log("controlobject.js is called")

// The class of ControlObject will deal with all mouse interactions
class ControlObject{
    // canvas is being called from init
    // canvas is the page element
    constructor(canvas){
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        this.w = 0;
        this.h = 0;
        
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
        console.log("mousedown event")
        // taking mouse position relative to the top point of the canvas and giving that to the x/yMouseStar
        // The offsetX is taken from the EventObject
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        // when mouse goes down it stays down
        this.mouseDown = true;
    }

    // current positions of the mouse (updated)
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log("mouse move event");
    }

    // this function is called when the user has released their click
    mUp(e){
        console.log("mouse up event");
        this.mouseDown = false;
        var temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, colArray[0])
        this.ObjectSet.push(temp);

    }

    update(){
        // calculate the new w and h values of the rect to use in the draw function
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        // the function only calls the draw function if the mouse is down
        // short for saying 'this.mouseDown == true'
      
        // draw the stroke rectangle when mouseDown is true
        if(this.mouseDown){
            //console.log("mouse down and call draw function")
            this.draw();
        }

        
        // looping through the object set, for each element, to call the update of each object
        for (var i=0; i<this.ObjectSet.length; i++){
            this.ObjectSet[i].update();
        }
        
    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h, colArray[0]);

    }

    drawRect(x,y,w,h,c){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWith = 1;
        ctx.strokeStyle = c;
        ctx.stroke();

    }

}



