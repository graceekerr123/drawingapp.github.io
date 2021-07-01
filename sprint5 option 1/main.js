console.log("main js is called")

// instatiating a rectangle to test it
//var R = new Rectangle(200,200,200,100,colArray[5]);
//var E = new Ellipse(100, 500, 150, 75, colArray[5]);
//var T = new Triangle(800,500,100,55,colArray[0][6])
//var P = new Polygon(0,0, 50, 5, colArray[0][3]);

var C = new ControlObject(canvas,500, 15, 485, 670);

var name_list = ["Rectangle", "Ellipse", "Triangle", "Pentagon", "Hexagon", "Heptagon"]
var button_list=[]
var x = 150;
var y = 100;
var w = 200;
var h = 50;

for (var i=0; i<name_list.length ; i++){
    button_list.push(new Button(x,y+i*h,w,h, name_list[i], colArray[0][0], colArray[0][7], colArray[1][7]))
}



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

    for(var i=0;i<swatch_list.length;i++){
        swatch_list[i].update();
    }
   
    //P.update();

    window.requestAnimationFrame(animate);
}
animate();

