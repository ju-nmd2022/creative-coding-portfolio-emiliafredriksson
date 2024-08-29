function setup(){
    createCanvas(600, 600);

}

let amount = 15;

function squares(){
    noFill();
    stroke(0);

for(let y = 0; y < amount; y++){
    for(let x = 0; x < amount; x++){
        let x = Math.floor(Math.random() * 495 + 50);
        let y = Math.floor(Math.random() * 495 + 50); 
        let size = Math.floor(Math.random() * 60 + 10);  

        rectMode(CENTER);
        rect(x,y, size, size);

        noLoop();
    }
}
}

function draw(){
    background(255);

    squares();
}