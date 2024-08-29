function setup(){
    createCanvas(600, 600);

}

const amount = 18;

function squares(){
    noFill();
    stroke(255);

for(let y = 0; y < amount; y++){
    for(let x = 0; x < amount; x++){
        let x = Math.floor(Math.random() * 500 + 60);
        let y = Math.floor(Math.random() * 500 + 60); 
        let size = Math.floor(Math.random() * 60 + 10);
        rectMode(CENTER);
        rect(x,y, size, size);

        noLoop();
    }
}
}

function draw(){
    background(0);

    squares();
}