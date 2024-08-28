let flowerSize = 20;
let amount = 4;
let gap = 90;

function setup(){
    createCanvas(innerWidth, innerHeight);
    background(255);
    colorMode(RGB);
}

function flower(){
    noStroke();
    let petals = 11;

    for(let y = 0; y < petals; y++){
        for(let x = 0; x < petals; x++){ 
    // pink part
        fill(255,0,255);
        rect(x,y,40,1);
    // main flower
        fill(0,255,255);
        rect(x,y,10,15);
    // center of flower
        fill(255,255,0);
        ellipse(x,y,5);

        rotate(PI / 5);}
    }
   

}

function draw(){
//translate(100,100);
let y = (height - flowerSize * amount - gap * (amount -1)) / 2; 
for( let i = 0; i < amount; i++){
    let x = (width - flowerSize * amount - gap * (amount -1)) / 2;
    for(let j = 0; j < amount; j++){
        push();
        translate(x, y);
        flower();
        pop();
        x += flowerSize + gap;
    }
    y += flowerSize + gap;
}
}

