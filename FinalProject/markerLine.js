
function markerLine(positionX, positionY, endX, endY) {
    this.posX = positionX;
    this.posY = positionY;
    this.endX = endX;
    this.endY = endY;

    this.display = function () {
 
        //display line
        stroke(0, 204, 0);
        line(this.posX, this.posY, this.endX, this.endY);
    
    }
}