Status = "";
AC_image = "";

function preload(){
    AC_image = loadImage("ac.webp")
}

function setup(){
    canvas = createCanvas(600,425)
    canvas.position(400,150);
    objectdetector = ml5.objectDetector("cocossd", modalloaded)
    document.getElementById("status").innerHTML = "staus: Detecting object";
}


function modalloaded(){
    console.log("modal has been loaded")
    objectdetector.detect(AC_image, gotresults)
    }
    function gotresults(error, results){
    if(error){
        console.log("error")
    }
    else{
        console.log(results)
    }
    }
    