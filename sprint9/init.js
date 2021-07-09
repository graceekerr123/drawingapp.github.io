console.log("init js is called")

// basic connecting code
canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 1000;
var height = 700;
canvas.width = width;
canvas.height = height;

// colour array

var colArray=[
    ["rgba(255,255,255, 1)", "rgba(0,0,0, 1)", "rgba(160,160,160, 1)", "rgba(255,42,0, 1)", 
    "rgba(255,128,0,1)", "rgba(255,255,0,1)", "rgba(128,255,0,1)", 
    "rgba(0,42,255, 1)", "rgba(128,0,255,1)", "rgba(255,0,212,1)"],

    ["rgba(255,255,255,0.6)", "rgba(0,0,0,0.6)", "rgba(160,160,160, 0.6)", "rgba(255,42,0,0.6)", 
    "rgba(255,128,0,0.6)", "rgba(255,255,0,0.6)", "rgba(128,255,0,0.6)", 
    "rgba(0,42,255,0.6)", "rgba(128,0,255,0.6)", "rgba(255,0,212,0.6)"],

    ["rgba(255,255,255,0.2)", "rgba(0,0,0,0.2)", "rgba(160,160,160, 0.2)", "rgba(255,42,0,0.2)", 
    "rgba(255,128,0,0.2)", "rgba(255,255,0,0.2)", "rgba(128,255,0,0.2)", 
    "rgba(0,42,255,0.2)", "rgba(128,0,255,0.2)", "rgba(255,0,212,0.2)"]
]

// test for the colArray - it worked!
/*
console.log(colArray[1]);
console.log(colArray[4]);
*/
