const size = 80;
const layers = 10;

function setup(){
    createCanvas(innerWidth, innerHeight);
    background(0,0,0);
}

function getRandomValue(pos, variance){
    return pos + map(Math.random(), 0, 1, -variance, variance);
}

function squareLayers(x, y, size, layers){
    const variance = size / layers;
    noFill();

    strokeR = Math.floor(Math.random() * 256);
    strokeG = Math.floor(Math.random() * 256);
    strokeB = Math.floor(Math.random() * 256);

    stroke(strokeR,strokeG,strokeB);

    strokeW = Math.floor(Math.random() * 2 + 1);
    
    strokeWeight(strokeW);
    
    for(let i = 0; i < layers; i++){
        if(Math.random() > 1){
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
    }
}

function draw(){
    for(let y = 1; y < 6; y++){
        for(let x = 1; x < 6; x++){
           squareLayers(size / 2 + x * size, size / 2 + y * size, size, layers); 
        }
    }

    noLoop();
}

//making a rect with randomnized length on the lines