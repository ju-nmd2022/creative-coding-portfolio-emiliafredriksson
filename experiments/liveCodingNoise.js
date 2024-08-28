function setup(){
    createCanvas(600, 600);

}

function draw(){
    background(255);

    const originalY = 300;
    const divider = 25;
    noiseSeed(69);
    beginShape();
    for (let x = 0; x < 600; x++){
      //  const y = originalY + Math.random() * 100;
        const y = originalY + noise(x / divider) * 100;
        vertex(x,y);
    }
    endShape();


    //will only draw it once
    noLoop();
}