console.log("main js is called")

// this is the management object of the program which includes representing the drawing object on the screen
var C = new ControlObject(canvas,500, 15, 485, 670);

var c11 = colArray[0][0]
var c12 = colArray[0][7]
var c13 = colArray[1][7]

// define the shape buttons
var name_list = ["Rectangle", "Ellipse", "Triangle","Line"]
var button_list=[]
var x = 25;
var y = 50;
var w = 200;
var h = 50;
for (var i=0; i<name_list.length ; i++){
    button_list.push(new Button(x,y+i*h,w,h, name_list[i], c11,c12,c13))
}

var name_list2 = ["Diamond", "Rotating Ellipse", "Cool Star"]
var x = 250;
var y = 50;
var w = 200;
var h = 50;
for (var i=0; i<name_list2.length ; i++){
    button_list.push(new Button(x,y+i*h,w,h, name_list2[i], colArray[0][0], colArray[0][7], colArray[1][7]))
}

// define the polygon shape button and the polygon side length buttons
var polygon_list = ["Polygon", "5", "6", "7", "8"]
var x = 25
var y = 275
var z = 50
var polygon_button1 = new Button(x, y, 200, 50, polygon_list[0], c11, c12, c13)
var polygon_button2 = new Polygon_buttons(x , y + z, 50, 50, polygon_list[1], c11, c12, c13)
var polygon_button3 = new Polygon_buttons(x + z, y + z, 50, 50, polygon_list[2], c11, c12, c13)
var polygon_button4 = new Polygon_buttons(x + 2*z, y+ z, 50, 50, polygon_list[3], c11, c12, c13)
var polygon_button5 = new Polygon_buttons(x + 3*z, y + z, 50, 50, polygon_list[4], c11, c12, c13)
button_list.push(polygon_button1, polygon_button2, polygon_button3, polygon_button4, polygon_button5)

// defining the clear all and undo buttons
var clearall_button = new Button(50, 625, 200, 50, "Clear All", c11, c12, c13);
var undo_button = new Button(250, 625, 200, 50,"Undo", c11, c12, c13);
button_list.push(clearall_button, undo_button)

//defining the brush buttons
var brush_list = ["Brush", "S", "M", "L"]
var x = 250
var brush_button1 = new Button(x, y, 200, 50, brush_list[0], c11, c12, c13)
var brush_button2 = new Circle_buttons(x + 35, 350, 10, brush_list[1], c11, c12, c13)
var brush_button3 = new Circle_buttons(x + 90, 350, 15, brush_list[2], c11, c12, c13)
var brush_button4 = new Circle_buttons(x + 150, 350, 20, brush_list[3], c11, c12, c13)
button_list.push(brush_button1, brush_button2, brush_button3, brush_button4)


// deffing the swatches
var outline = colArray[0][0]
var Xs = 50;
var Ys = 500;
var Ws = 40;
var Hs = 40;
for(var i=0; i<colArray.length; i++){
    for(var j=0; j<colArray[i].length; j++){
        button_list.push(new Swatch(Xs+j*Ws,Ys+i*Hs,Ws,Hs, colArray[i][j], outline))
    }
}

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

