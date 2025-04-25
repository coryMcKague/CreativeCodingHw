var leftGuitar;


function preload(){

    leftGuitar = loadSound('./musicSources/bass.wav');


}

function setup(){
    createCanvas(200,200);
    leftGuitar.play();
}