// the following code is written after yt tutorial: https://www.youtube.com/watch?v=vmhRlDyPHMQ 

let synth;
let soundStarted = false;

function setup() {
    // WEBGL made it possible to make it 3D
    createCanvas(innerWidth, innerHeight, WEBGL);
    angleMode(DEGREES);

    canvas.addEventListener("click", () => {
        // Initialize Tone.js audio context and start oscillator
        if (!soundStarted) {  
            Tone.start();
            synth = new Tone.PolySynth().toDestination();
            soundStarted = true; 
        } else {
            synth.releaseAll();
            soundStarted = false;
        }
    });
}

function createWave() {
    rotateX(60);
    noFill();

    for (let i = 0; i < 15; i++) {
        const r = map(sin(frameCount), -1, 1, 0, 255);
        const g = map(i, 0, 50, 0, 255);
        const b = map(cos(frameCount), -1, 1, 255, 0);

        stroke(r, g, b);
        
        if (soundStarted) {

        /* let frequency = map(r, 0, 255, 100, 3000);
        synth.triggerAttackRelease(frequency, '4n'); */

        if(r > 0 && r < 32){
            synth.triggerAttackRelease(["C3", "E3"], "4n");
        } else if(r > 32 && r < 64){
            synth.triggerAttackRelease(["D3", "F3"], "4n");
        } else if(r > 64 && r < 96){
            synth.triggerAttackRelease(["E3", "G3"], "4n");
        } else if(r > 96 && r < 128){
            synth.triggerAttackRelease(["F3", "A3"], "4n");
        } else if(r > 128 && r < 160){
            synth.triggerAttackRelease(["G3", "B3"], "4n");
        } else if(r > 160 && r < 192){
            synth.triggerAttackRelease(["A3", "C4"], "4n");
        } else if(r > 192 && r < 224){
            synth.triggerAttackRelease(["B3", "D4"], "4n");
        } else if(r > 224 && r < 255){
            synth.triggerAttackRelease(["C4", "E4"], "4n");
        }
        }

        const strokeW = Math.floor(Math.random() * 5 + 2);
        strokeWeight(strokeW);
        rotate(5);

        beginShape();
        for (let j = 0; j < 360; j += 100) {
            const rad = i * 20;
            const x = rad * cos(j);
            const y = rad * sin(j);

            const z = sin(frameCount * 3 + i * 20) * 70;
            vertex(x, y, z);
        }
        endShape(CLOSE);
    }

    
    
}

function draw() {
    background(0);
    createWave();
}
