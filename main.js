function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting object";
}
img="";
Status="";
objects=[];

function modelloaded(){
    console.log("modelLoaded");
    Status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}
function preload(){
    img=loadImage("Fan.jpg");
}
function draw(){
    image(img,0,0,640,420);
    if(Status != ""){
     for(i=0 ;i<objects.length;i++){
         document.getElementById("status").innerHTML="status:objectDetected";

         fill('blue');
         percent=floor(objects[i].confidence*100);
         text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
         noFill();
         stroke('blue');
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
     }   
    }
}