img = "";
state = "";
objects = [];


function preload(){
    img=loadImage("TV.png");
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function modelLoaded() {
    console.log("Model Loaded");
    state = true;

}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}
function draw() {
    image(img, 0, 0, 640, 420);
    
}
