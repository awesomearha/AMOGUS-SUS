https://teachablemachine.withgoogle.com/models/ibtmnLXsw/

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90  
  });
  
  camera = document.getElementById("camera");
  
  Webcam.attach("#camera");
  
  function take_snapshot()
  {
      Webcam.snap(function(data_uri) {
          document.getElementById("result").innerHTML = '<img id="captured_" src="'+data_uri+'"/>';
  
      });
  }
  
  console.log('ml5 version', ml5.version);
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ibtmnLXsw/model.json',modelLoaded);