Webcam.set({
    width:350,
    height:300,
    image_format:"jpg",
    jpg_quality:100
});

var cam=document.getElementById("camera_display");
Webcam.attach(cam);

function picture_click(){
    Webcam.snap(function(data_uri){
      document.getElementById("snapshot").innerHTML='<img id="selfie" src="'+data_uri+'">';  
    });
}

console.log("ml5 version", ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uh9gweX16/model.json",model_loaded);

function model_loaded(){
    console.log("Model is initialised");
}