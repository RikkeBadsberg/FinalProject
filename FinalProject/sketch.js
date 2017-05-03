var circles = [];
var numClicks = 0;
var currentDate;
var startDate;
var feed;
var dots = [];
var marker;
var lines = [];

function preload() {
    feed = loadImage("assets/feed.png");
    marker = loadImage("assets/marker.png");


}

function setup() {
    createCanvas(windowWidth, windowHeight);
    startDate = new Date();
    //frameRate(10);
}

function draw() {
    
    currentDate = new Date();
    background(feed);

    noStroke();
    fill(0, 0, 0, 150);
    rect(0, 0, 250, windowHeight);

    stroke(0, 204, 0);
    strokeWeight(3);
    
    line(mouseX, 0, mouseX, windowHeight);
    line(0, mouseY, windowWidth, mouseY);
    
    noStroke();
    fill(0, 204, 0);
    textFont("Courier New");
    textSize(20);
    textStyle(BOLD);
    
    //text(currentDate.getHours() + "." + currentDate.getMinutes() + "." + currentDate.getSeconds(), 10, 80);
    text(startDate.toLocaleDateString()+ " " + startDate.toLocaleTimeString(), 10, 20);
    text(currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString(), 10, 50);
    text(currentDate - startDate, 10, 80);

    
   

    text(mouseX + " , " + mouseY, 10, 110);
    text((mouseX - pmouseX).toString() + " , " + (mouseY - pmouseY).toString(), 10, 140);
    //display time for opening program
    //display number of clicks 
    text(numClicks, 10, 170);

    strokeWeight(1);
    //display all circles in array
    for (var i = 0; i < circles.length; i++) {
        circles[i].display();
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].display();
    }

    for (var i = 0; i < lines.length; i++) {
        lines[i].display();
    }
    //nice to have: remove circles from array 

}


function mouseClicked() {
    //create circle when mouse is clicked
    circles[circles.length] = new MouseClickCircle(mouseX, mouseY);

    //increases by one for each mouse click
    numClicks++;

    //draws a location marker where the mouse is when it is clicked
    dots[dots.length] = new mouseDot(mouseX, mouseY, marker);

    if (dots.length > 1) {
        //GØR LIGE DET HER
    }
}