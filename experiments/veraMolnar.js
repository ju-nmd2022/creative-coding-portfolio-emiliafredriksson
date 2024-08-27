const size = 80;

function setup(){
    createCanvas(800, 800);
    background(0,0,0);
}

function draw(){
    noFill();
    stroke(255,255,255);
    strokeWeight(3);

    const x = (width - size) / 2;
    const y = (height - size) / 2;
    lenghtX = Math.floor(Math.random() * 80) + 10;
    lengthY = Math.floor(Math.random() * 80) + 10;
    rect(x, y, lenghtX, lengthY);
}

//making a rect with randomnized length on the lines