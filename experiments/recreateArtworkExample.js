function setup(){
    createCanvas(1000,1000);
}

const size = 100;
const layers = 10;

function getRandomValue(pos, variance){
    return pos + map(Math.random(), 0, 1, -variance, variance);
}

function drawLayers(x,y,size,layers){
   const variance = size / layers;
    noFill();
    strokeR = Math.floor(Math.random() * 256);
    strokeG = Math.floor(Math.random() * 256);
    strokeB = Math.floor(Math.random() * 256);

    stroke(strokeR,strokeG,strokeB);
    strokeWeight(3);
    // rectMode(CENTER);
    for( let i = 0; i < layers; i++){
        if(Math.random() > 0.8){
            continue; 
        }

        const s = (size / layers) * i;
        const half = s / 1.8;
        beginShape();
        vertex(getRandomValue(x - half, variance), getRandomValue(y - half, variance));
        vertex(getRandomValue(x + half, variance), getRandomValue(y - half, variance));
        vertex(getRandomValue(x + half, variance), getRandomValue(y + half, variance));
        vertex(getRandomValue(x - half, variance), getRandomValue(y + half, variance));
        endShape(CLOSE);
        // rect(x - half,y -half,s,s);
    }
}

function draw(){
    background(255);

    for(let y = 0; y < 6; y++){
        for(let x = 0; x < 6; x++){
           drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers); 
        }
    }

    noLoop();
}