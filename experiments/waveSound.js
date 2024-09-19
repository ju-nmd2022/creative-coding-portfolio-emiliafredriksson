// the following code is written after yt tutorial: https://www.youtube.com/watch?v=vmhRlDyPHMQ 

function setup(){
    // WEBGL made it possible to make it 3D
    createCanvas(innerWidth, innerHeight, WEBGL);
    angleMode(DEGREES);

    window.addEventListener("load", () => {
        oscillator = new Tone.Oscillator(440, "sine").toDestination();
        oscillator.frequency.value = 440; // Set to a default frequency
        oscillator.start(); // Start the oscillator
    });
}

function createWave(){
rotateX(60);
noFill();

    for(let i = 0; i < 15; i++){

        const r = map(sin(frameCount), -1, 1, 0, 255);
        const g = map(i, 0, 50, 0, 255);
        const b = map(cos(frameCount), -1, 1, 255, 0);

        stroke(r, g, b);

        const strokeW = Math.floor(Math.random() * 5 + 2);

        strokeWeight(strokeW);

        rotate(5);

        beginShape();
        for (let j = 0; j < 360; j += 100){
            const rad = i * 20;
            const x = rad * cos(j);
            const y = rad * sin(j);
// makes it move up and down, + i * nr creates the wave effect
            const z = sin(frameCount * 3 + i * 20) * 70;

            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
}

function draw(){
    background(0);

    createWave();
}