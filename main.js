Avengers_theme_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
   Avengers_theme_song = loadSound("the-avengers-theme-ringtone.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}