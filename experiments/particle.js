const particles = [];

function setup(){
    createCanvas(innerWidth, innerHeight);
    background(20);

}

class Particle {
    constructor(){
        this.x = 200;
        this.y = 200;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.opacity = opacity;
    }

    finished(){
        return this.opacity < 0;
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= 5;
    }

    show(){
        noStroke();
        fill(255,255,255, this.opacity);
        ellipse(this.x, this.y, 3);
    }
}

function createParticles(){
    for(let i = 0; i < 5; i++){
        let p = new Particle();
        particles.push(p);
    }
}

function draw(){
for(let particle of particles){
    particle.update();
    particle.show();

}
}