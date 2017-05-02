var circles = [];
var numClicks = 0;
var date; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    var date = new Date();
    console.log(date);
}

function draw() {
    background(0);
    stroke(0, 204, 0);
    line(mouseX, 0, mouseX, windowHeight);
    line(0, mouseY, windowWidth, mouseY);
    //console.log(minute());

    noStroke();
    fill(0, 204, 0);
    textFont("Courier New");
    textSize(20);
    textStyle(BOLD);
    text("Mouse position: " + mouseX + " , " + mouseY, 10, 30);
    text("Session time", 10, 70);
    //display time for opening program
    text("Start: " + hour() + minute() + second() /*date.toString()*/, 10, 150);

    //display number of clicks 
    text("Number of clicks: " + numClicks, 10, 110);
    
    //display all circles in array
    for (var i = 0; i < circles.length; i++) {
        circles[i].display();
    }
    //nice to have: remove circles from array 
}


function mouseClicked() {
    //create circle when mouse is clicked
    circles[circles.length] = new MouseClickCircle(mouseX, mouseY);

    //increases by one for each mouse click
    numClicks++;
}