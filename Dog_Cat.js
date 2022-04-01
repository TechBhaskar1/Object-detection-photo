img = "";
state = "";
objects = [];

function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded() {
    console.log("Model Loaded");
    state = true;
    objectDetector.detect(img, gotResult);
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
