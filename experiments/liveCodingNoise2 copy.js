function setup(){
    createCanvas(600, 600);

}

const size = 10;
const divider = 25;
const numRows = 60;
const numCols = 60;


function draw(){
    background(255);
    noStroke();
    fill(0);
    colorMode(HSB, 100);

   for(let y = 0; y < numRows; y++){
    for(let x = 0; x < numCols; x++){
        const c = noise(x / divider, y / divider) * 100;
        const value = noise(x / divider, y / divider) * size;
        fill(c, 100, 80);
        ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
   }


    //will only draw it once
    noLoop();
}