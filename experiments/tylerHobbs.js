const num = 2000;
const noiseScale = 0.05;
const particles = [];

function setup(){
    createCanvas(600, 600);

}

function particlesCreation(){
for( let i = 0; i < num; i++){
    // the following line was borrowed from https://editor.p5js.org/dobladov/sketches/E_Zbo5GgM
    particles.push(createVector(random(width), random(height)));
}

stroke(255);


}

function draw(){
    background(0);

    particlesCreation();

    strokeWeight(2.5);

    for(let i = 0; i < num; i++){
        // the following 6 lines was borrowed from https://editor.p5js.org/dobladov/sketches/E_Zbo5GgM 
        let p = particles[i];
        point(p.x, p.y);
        let n = noise(p.x * noiseScale, p.y * noiseScale);
        let a = TAU * n;
        p.x += cos(a);
        p.y +=  sin(a);

    }

}