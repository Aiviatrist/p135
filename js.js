statius="";
function setup(){
    canvas=createCanvas(480,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}
function Start(){
    od=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
    input=document.getElementById("input").value;
}
function modelloaded(){
    console.log("model loaded!");
    statius=true;
}
function draw(){
    image(video,0,0,400,400);
}
object=[];
function gotResults(results){
    object=[results];
    if(object[i]==object_name){
        lol=object[0].confidence;
        percent= floor(object[i].confidence*100); 
        obx=object[0].x;
        oby=object[0].y;
        
    }
}
