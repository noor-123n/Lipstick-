lipsX=0
lipsY=0

function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.position(550, 150);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
    
}
function gotPoses(results){

}

function modelLoaded(){
console.log("Model has Loaded!");
}