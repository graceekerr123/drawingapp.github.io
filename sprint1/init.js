console.log("init js is called")

// basic connecting code
canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// colour array
var colArray=[
    "rgb(255,255,255)", "rgb(0,0,0)", "rgb(255,42,0)", 
    "rgb(255,128,0)", "rgb(255,255,0)", "rgb(128,255,0)", 
    "rgb(0,42,255)", "rgb(128,0,255)", "rgb(255,0,212)",
]

// test for the colArray - it worked!
/*
console.log(colArray[1]);
console.log(colArray[4]);
*/
