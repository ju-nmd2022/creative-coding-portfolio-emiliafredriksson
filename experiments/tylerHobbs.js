const num = 2000;
const noiseScale = 0.02;
const particles = [];
const lengths = [];
const speed = 0.03;

function setup(){
    createCanvas(600, 600);

}

function particlesCreation(){
for( let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
    lengths.push(random(5, 100));
}

stroke(255);
}

function draw(){
    background(0);

    particlesCreation();

    strokeWeight(2.5);

    for(let i = 0; i < num; i++){
        let p = particles[i]; 
        let len = lengths[i];
        
        let n = noise(p.x * noiseScale, p.y * noiseScale);
        let a = TAU * n;

        let endX = p.x + cos(a) * len * speed;
        let endY = p.y + sin(a) * len * speed;

       line(p.x, p.y, endX, endY);

       p.x = endX;
       p.y = endY;

    }

}