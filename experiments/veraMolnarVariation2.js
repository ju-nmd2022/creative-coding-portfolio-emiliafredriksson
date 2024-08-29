const size = 80;
const layers = 9;

function setup(){
    createCanvas(580, 580);
    background(0);
}

function getRandomValue(pos, variance){
    return pos + map(Math.random(), 0, 0.5, -variance, variance);
}

function squareLayers(x, y, size, layers){
    const variance = size / layers;
    noFill();

    colorMode(HSB * 100);
    col = noise(x, y) * 100;

    stroke(col, 10, 40);

    strokeW = Math.floor(Math.random() * 2 + 1);

    strokeWeight(strokeW);
    
    for(let i = 0; i < layers; i++){
        if(Math.random() > 1){
            continue;
        }

        const s = (size / layers) * i;
        const half = s / 1.5;
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