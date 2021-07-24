console.log("main js is called")

// this is the management object of the program which includes representing the drawing object on the screen
var C = new ControlObject(canvas,500, 25, 475, 650);

var c11 = colArray[0][0]
var c12 = colArray[0][7]
var c13 = colArray[1][7]

var x = 25;
var w = 215;
var h = 80;

var z = 265;
var g = 290;
var y = 50;
var b = w/4;

var button_list=[]

// define the shape buttons
var name_list = ["Rectangle", "Ellipse", "Triangle"]
for (var i=0; i<name_list.length ; i++){
    button_list.push(new Button(x,x+i*h,w,h, name_list[i], c11,c12,c13))
}

var name_list2 = ["Diamond", "Rotating Ellipse", "Cool Star"]
for (var i=0; i<name_list2.length ; i++){
    button_list.push(new Button(z,x+i*h,w,h, name_list2[i],c11,c12,c13))
}

// defining the polygon buttons
var polygon_list = ["Polygon", "5", "6", "7", "8"]
button_list.push(new Button(x,g, w,h, polygon_list[0], c11, c12, c13))
for (var i=0; i<(name_list.length+1) ; i++){
    button_list.push(new Polygon_buttons(x+i*b,g+h,b,h, polygon_list[i+1], c11,c12,c13))
}

//defining the brush buttons
var brush_list = ["Brush", "S", "M", "L", "Line"]
var brush_button1 = new Button(z, g, 215, 55, brush_list[0], c11, c12, c13)
var brush_button2 = new Circle_buttons(z + 40, 370, 10, brush_list[1], c11, c12, c13)
var brush_button3 = new Circle_buttons(z + 100, 370, 15, brush_list[2], c11, c12, c13)
var brush_button4 = new Circle_buttons(z + 165, 370, 20, brush_list[3], c11, c12, c13)
var line_button = new Button(z, g+105, 215, 55, brush_list[4], c11, c12, c13)
button_list.push(brush_button1, brush_button2, brush_button3, brush_button4, line_button)


// defining the swatches
var Ys = 480;
var Ws = 455/10;
var Hs = 40;
for(var i=0; i<colArray.length; i++){
    for(var j=0; j<colArray[i].length; j++){
        button_list.push(new Swatch(x+j*Ws,Ys+i*Hs,Ws,Hs, colArray[i][j], c11))
    }
}

// defining the clear all and undo buttons
var clearall_button = new Button(25, 625, 215, 50, "Clear All", c11, colArray[0][2], colArray[1][1]);
var undo_button = new Button(260, 625, 215, 50,"Undo", c11, colArray[0][2], colArray[1][1]);
button_list.push(clearall_button, undo_button)


function animate(){
    // clear the drawing area
    ctx.clearRect(0,0,width,height);

    // update the canvas
    C.update();

    // update all the elements inside the button list
    for(var i=0;i<button_list.length;i++){
        button_list[i].update();
    }
    
    window.requestAnimationFrame(animate);
}
animate();

