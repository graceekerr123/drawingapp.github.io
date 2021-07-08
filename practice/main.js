console.log("main js is called")

// instatiating a rectangle to test it
//var R = new Rectangle(200,200,200,100,colArray[5]);
//var E = new Ellipse(100, 500, 150, 75, colArray[5]);
//var T = new Triangle(800,500,100,55,colArray[0][6])
//var P = new Polygon(0,0, 50, 5, colArray[0][3]);
//var L = new Line(0,0,500,500,10, colArray[0][3])
//var B = new Brush(400,100, 5, colArray[0][3])
var D = new Diamond(400,200,200,100,colArray[0][5])

// this is the management object of the program which includes representing the drawing object on the screen
var C = new ControlObject(canvas,500, 15, 485, 670);

// define the shape buttons
var name_list = ["Rectangle", "Ellipse", "Triangle","Line"]
var button_list=[]
var x = 25;
var y = 50;
var w = 200;
var h = 50;
for (var i=0; i<name_list.length ; i++){
    button_list.push(new Button(x,y+i*h,w,h, name_list[i], colArray[0][0], colArray[0][7], colArray[1][7]))
}

var name_list2 = ["Diamond", "Rotating Ellipse"]
var x = 250;
var y = 50;
var w = 200;
var h = 50;
for (var i=0; i<name_list2.length ; i++){
    button_list.push(new Button(x,y+i*h,w,h, name_list2[i], colArray[0][0], colArray[0][7], colArray[1][7]))
}


// define the polygon shape button and the polygon side length buttons
var polygon_list = ["Polygon", "5", "6", "7", "8"]
var button_polygon = []
var x1 = 25
var y2 = 275
var z = 50
var c11 = colArray[0][0]
var c12 = colArray[0][7]
var c13 = colArray[1][7]
var polygon_button1 = new Button(x1, y2, 200, 50, polygon_list[0], c11, c12, c13)
var polygon_button2 = new Polygon_buttons(x1 , y2 + z, 50, 50, polygon_list[1], c11, c12, c13)
var polygon_button3 = new Polygon_buttons(x1 + z, y2 + z, 50, 50, polygon_list[2], c11, c12, c13)
var polygon_button4 = new Polygon_buttons(x1 + 2*z, y2 + z, 50, 50, polygon_list[3], c11, c12, c13)
var polygon_button5 = new Polygon_buttons(x1 + 3*z, y2 + z, 50, 50, polygon_list[4], c11, c12, c13)
button_polygon.push(polygon_button1, polygon_button2, polygon_button3, polygon_button4, polygon_button5)

// defining the clear all and undo buttons
var clearall_button = new Button(50, 625, 200, 50, "Clear All", c11, c12, c13);
var undo_button = new Button(250, 625, 200, 50,"Undo", c11, c12, c13);
button_list.push(clearall_button, undo_button)

//defining the brush buttons
var brush_list = ["Brush", "S", "M", "L"]
var button_brush = []
var x1a = 250
var z1 = 50

var brush_button1 = new Button(x1a, y2, 200, 50, brush_list[0], c11, c12, c13)
var brush_button2 = new Circle_buttons(x1a + 35, 350, 10, brush_list[1], c11, c12, c13)
var brush_button3 = new Circle_buttons(x1a + 90, 350, 15, brush_list[2], c11, c12, c13)
var brush_button4 = new Circle_buttons(x1a + 150, 350, 20, brush_list[3], c11, c12, c13)
button_brush.push(brush_button1, brush_button2, brush_button3, brush_button4)


//var B = new Button(25,125,60,40,"Polygon", colArray[0][0], colArray[0][7], colArray[1][7])

var swatch_list=[]
var outline = colArray[0][0]
var Xs = 50;
var Ys = 500;
var Ws = 40;
var Hs = 40;
for(var i=0; i<colArray.length; i++){
    for(var j=0; j<colArray[i].length; j++){
        swatch_list.push(new Swatch(Xs+j*Ws,Ys+i*Hs,Ws,Hs, colArray[i][j], outline))
    }
}

function animate(){
    ctx.clearRect(0,0,width,height);

    C.update();

    for(var i=0;i<button_list.length;i++){
        button_list[i].update();
    }

    //for(var i=0;i<button_list2.length;i++){
        //button_list2[i].update();
    //}

    for(var i=0;i<button_polygon.length;i++){
        button_polygon[i].update();
    }

    for(var i=0;i<button_brush.length;i++){
        //console.log("creating brush buttons")
        button_brush[i].update();
    }

    for(var i=0;i<swatch_list.length;i++){
        swatch_list[i].update();
    }
   
    D.update();

    window.requestAnimationFrame(animate);
}
animate();

