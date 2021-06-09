console.log("main.js is called")

// instatiating a rectangle to test it
//var R = new Rectangle(200,200,200,100,colArray[5]);
//var E = new Ellipse(100, 500, 150, 75, colArray[5]);

var C = new ControlObject(canvas,500, 15, 485, 670);

var name_list = ["Rectangle", "Ellipse"]
var button_list=[]
var x = 150;
var y = 100;
var w = 200;
var h = 50;

for (var i=0; i<name_list.length ; i++){
    button_list.push(new Button(x,y+i*h,w,h, name_list[i], colArray[0], colArray[7], colArray[6]))
}

function animate(){
    ctx.clearRect(0,0,width,height);
    
    C.update();
    for(var i=0;i<button_list.length;i++){
        button_list[i].update();
    }


    window.requestAnimationFrame(animate);
}


animate();