function setup(){
    createCanvas(600, 600);

}

const amount = 16;

function squares(){
    noFill();

for(let y = 0; y < amount; y++){
    for(let x = 0; x < amount; x++){
        const strokeW = Math.floor(Math.random() * 3 + 0.5);
        strokeWeight(strokeW);

        if(strokeW > 2.5){
            stroke(255,0,255);
        } else {
            stroke(255);
        }

        let x = Math.floor(Math.random() * 495 + 50);
        let y = Math.floor(Math.random() * 495 + 50); 
        let height = Math.floor(Math.random() * 60 + 10);
        let width = Math.floor(Math.random() * 60 + 10);
        rectMode(CENTER);
        rect(x,y, height, width);

       noLoop();
    }
}
}

function draw(){
    background(0);

    squares();
}