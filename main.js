var noseX=0
var noseY=0
var difference=0
var rightrWristX=0
var leftwristX=0

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150)
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialised!")
}

function getPoses(results)
{
    if(results.length > 0) 
    {
     console.log(results); 
     noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
       console.log("noseX = " + noseX +" noseY = " + noseY); 
       leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
     }
    
}

function draw()
{
    background("blue");
    document.getElementById("square").innerHTML="width and heigth of a square will be"+difference+"px";
    fill("red");
    stroke("red");
    square(noseX,noseY,difference);
}