  Nose_x=0;
  Nose_y=0;

function preload() {
Clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  Posenet= ml5.poseNet(video,modelloaded);
  Posenet.on('pose',gotposes);  

}
function draw() {
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(Nose_x,Nose_y,20);

image(Clown_nose,Nose_x,Nose_y,30,30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
function modelloaded(){
console.log('modelloaded');
}
function gotposes(results){
if (results.length>0){
    console.log(results);
  Nose_x=results[0].pose.nose.x-15;
  Nose_y=results[0].pose.nose.y-15;
  console.log("Nose X position = "+Nose_x);
  console.log("Nose Y position = "+Nose_y);
}

}
