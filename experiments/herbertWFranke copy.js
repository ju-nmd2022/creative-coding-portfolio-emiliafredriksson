function setup(){
    createCanvas(innerHeight, innerWidth);

}

const amount = 10;

function squares(){
    noFill();
    stroke(255);

for(let y = 0; y < amount; y++){
    for(let x = 0; x < amount; x++){
        let x = Math.floor(Math.random() * 600 + 10);
        let y = Math.floor(Math.random() * 600 + 10); 
        let height = Math.floor(Math.random() * 60 + 10);
        let width = Math.floor(Math.random() * 60 + 10);
        rect(x,y, height, width);

        noLoop();
    }
}
}

function draw(){
    background(0);

    squares();
}