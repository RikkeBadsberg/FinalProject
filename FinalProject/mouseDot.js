
function mouseDot(positionX, positionY, marker) {
    this.posX = positionX;
    this.posY = positionY;


    this.display = function () {
 
        //display the location marker
        image(marker, this.posX - 25, this.posY - 50);

        noStroke();
        fill(0, 204, 0);
        textSize(16);
        text(this.posX + "," + this.posY, this.posX + 5, this.posY);
    
    }
}