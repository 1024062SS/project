var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    console.log(img_id);

 Webcam.snap(function(data_uri){
if(img_id=="selfie1"){
    document.getElementById("result").innerHTML = '<img id=selfie_image" src"'+data_uri +'">';
}
Webcam.snap(function(data_uri){
    if(img_id=="selfie2"){
        document.getElementById("result").innerHTML = '<img id=selfie_image" src"'+data_uri +'">';
    }

    Webcam.snap(function(data_uri){
        if(img_id=="selfie3"){
            document.getElementById("result").innerHTML = '<img id=selfie_image" src"'+data_uri +'">';
        }
});
})



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
img_id= "selfie1";
take_snapshot();
speak_data = "Taking your next Selfie in 10 seonds"
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
    }, 10000);

    img_id= "selfie2";
    take_snapshot();
    speak_data = "Taking your next Selfie in 15 seonds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
        } 15000;

        img_id= "selfie3";
        take_snapshot();
        speak_data = "Taking your next Selfie in 20 seonds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }), 20000;


    


}
