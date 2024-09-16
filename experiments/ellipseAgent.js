class Agent {
    constructor(x, y){
        this.position = createVector(x, y);
        this.size = 5;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.opacity = random(100);
    }

    update(){
        this.size += 0.3;

        if(this.size > 50){
            this.size = 1;
            this.r = random(255);
            this.g = random(255);
            this.b = random(255);
        }
    }

    draw(){
        noStroke();

        push();
        fill(this.r, this.g, this.b, this.opacity);
        ellipse(this.position.x, this.position.y, this.size);
        pop();
    }
}

function setup(){
    createCanvas(innerWidth, innerHeight);
    background(20);
    field = generateField();
    generateAgents();
}

function generateField(){
    noiseSeed(Math.random() * 100);
    for(let x = 0; x < maxCols; x++){
        for(let y = 0; y < maxRows; y++){
            const  value = noise(x / divider, y / divider) * Math.PI * 2;
        }
    }
}

function generateAgents(){
    for(let i = 0; i < 500; i++){
        let agent = new Agent(
            Math.random() * innerWidth,
            Math.random() * innerHeight,
            2,
            0.6
        );
        agents.push(agent);
    }
}

const fieldSize = 10;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 4;
let agents = [];

function draw(){
    for(let agent of agents){
        const x = Math.floor(agent.position.x / fieldSize);
        const y = Math.floor(agent.position.y / fieldSize);
        agent.update();
        agent.draw();
    }
}