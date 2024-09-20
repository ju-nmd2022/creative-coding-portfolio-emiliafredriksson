// the following code is written after yt tutorial: https://www.youtube.com/watch?v=vmhRlDyPHMQ 

let oscillator;
let soundStarted = false;

function setup() {
    // WEBGL made it possible to make it 3D
    createCanvas(innerWidth, innerHeight, WEBGL);
    angleMode(DEGREES);

    canvas.addEventListener("click", () => {
        // Initialize Tone.js audio context and start oscillator
        if (!soundStarted) {  
            Tone.start();
            oscillator = new Tone.Oscillator(440, "sine").toDestination();
            oscillator.start();
            soundStarted = true; 
        } else {
            oscillator.stop();
            soundStarted = false;
        }
    });
}

function createWave() {
    rotateX(60);
    noFill();

    let ySum = 0; // Reset ySum at the start of the wave creation

    for (let i = 0; i < 15; i++) {
        const r = map(sin(frameCount), -1, 1, 0, 255);
        const g = map(i, 0, 50, 0, 255);
        const b = map(cos(frameCount), -1, 1, 255, 0);

        stroke(r, g, b);

        const strokeW = Math.floor(Math.random() * 5 + 2);
        strokeWeight(strokeW);
        rotate(5);

        beginShape();
        for (let j = 0; j < 360; j += 100) {
            const rad = i * 20;
            const x = rad * cos(j);
            const y = rad * sin(j);

            // Accumulate ySum for only the first square (i === 0)
            if (i === 0) {
                 ySum += sin(frameCount * 0.05 + j) * 50;
            }

            const z = sin(frameCount * 3 + i * 20) * 70;
            vertex(x, y, z);
        }
        endShape(CLOSE);
    }

    // Calculate the frequency based on the ySum of the selected square (i === 0)
    const yAvg = ySum / (360 / 100); // Adjust yAvg calculation

    console.log(`ySum: ${ySum}, yAvg: ${yAvg}`); // Debugging output

    // Map yAvg to frequency
    const frequency = map(yAvg, -300, 300, 200, 1000);

    // Update oscillator frequency
    if (oscillator) {
        oscillator.frequency.value = frequency;
    }
}

function draw() {
    background(0);
    createWave();
}
