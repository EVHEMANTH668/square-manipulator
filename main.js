noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO)
    video.size(550,500)
    video.position(75,75)

    canvas = createCanvas(550,500)
    canvas.position(650,75)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses);
}

function preload(){

}

function draw(){
    background("violet")
    fill("red")
    square(noseX,noseY,difference)
}


function modelLoaded(){
    console.log("The PoseNet is Initialized");
}

function gotPoses(Results){
    if(Results.length > 0){
        console.log(Results);
        noseX = Results[0].pose.nose.x;
        noseY = Results[0].pose.nose.y;
        console.log("The Nose coordinates are X =" + noseX + "Y = " + noseY)

        leftWristX = Results[0].pose.leftWrist.x;
        rightWristX = Results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        

        console.log("Left Hand X = " + leftWristX + "Right Hand X = " + rightWristX + "Differece = " + difference)
    }
}