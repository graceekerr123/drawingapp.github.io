console.log("main.js is called")

// instatiating a rectangle to test it
//var R = new Rectangle(200,200,200,100,colArray[5]);

var C = new ControlObject(canvas,500, 15, 485, 670);

function animate(){
    ctx.clearRect(0,0,width,height);
    //R.update();
    C.update();

    window.requestAnimationFrame(animate);
}


animate();