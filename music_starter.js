
let rippleX = 500;
let rippleY = 500;
let rippleSize = 0;

// let rippleArray = [];

// class Ripple {
//   constructor (x,y){
// this.x = x,
// this.y = y,
// this.s = 0
//   }
//   draw(){
//     this.s += 1
//     circle(this.x, this.y, this.s);
//   }
// }
// you have to somehow figure out a way for it to not continuously draw the samething over and over again in the same spot

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB,100);
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);


    background(60,30,60);
    stroke("white");
    strokeWeight(5);
    noFill();
    
    // for (let i = 0; i < rippleArray.length; i++){
    //   rippleArray[i].draw();
    // }
    
    rippleSize += 1;
    circle(rippleX, rippleY, rippleSize);
    
    // push();
    // fill("white");
    // strokeWeight(1);
    // textSize(50)
    // text("rippleX:" + rippleX,50,50);
    // text("rippleY:" + rippleY,50,100);
    
    // pop();

    if (rippleSize >= 1000){
       rippleSize = 0
    }

// rippleArray.push(new Ripple(rippleX, rippleY));
  }  



// let ringSize = drum+100;
// let vocalMap = map(vocal, 100, 0, 100, 10);
// let bassMap = map(bass,100,0, 20,100);
// let otherMap = map(bass,100,0, 30,80);
// let drumMap = map(bass,100,0, 90,10);
// let drumHeight= map(drum,100,0, ringSize/4, height);
// let bassHeight = map(bass,100,0,ringSize/4, height)
// let lineSize = 50
// let lineStart = 0
// let lineEnd = lineStart + lineSize

// let circleSize = 25
// let circlePosition = 15




// ellipse(circlePosition,circlePosition,circleSize,circleSize)
// ellipse(circlePosition+30,circlePosition,circleSize,circleSize)
// ellipse(circlePosition+60,circlePosition,circleSize,circleSize)
// ellipse(circlePosition+90,circlePosition,circleSize,circleSize)
// ellipse(circlePosition+120,circlePosition,circleSize,circleSize)
// ellipse(circlePosition+150,circlePosition,circleSize,circleSize)
// ellipse(circlePosition+180,circlePosition,circleSize,circleSize)
// ellipse(circlePosition+210,circlePosition,circleSize,circleSize)
// ellipse(circlePosition+240,circlePosition,circleSize,circleSize)


// noFill();
// strokeWeight(2);
// stroke(255);
//   ellipse(width/2, height/2, other+100,other+100);
//   ellipse(width/2, bassHeight, bass+100,bass+100);
//   ellipse(width/2, height/2, vocal+250,vocal+150);
//   ellipse(width/2, drumHeight, ringSize);

// stroke(bass,50,50);


//  line(lineStart, 480, lineEnd, 480);
//   line(lineStart, 490, lineEnd, 490);

//   for (let i=1; i <= vocalMap; i++){
//  let lineStep = i*10;
//   line(lineStart, lineStep, lineEnd, lineStep);
//   }
//   for (let i=1; i <= drumMap; i++){
//   let lineStep = i*10;
//  line(lineStart+100, lineStep, lineEnd+100, lineStep);
//  }
//   for (let i=1; i <= bassMap; i++){
//   let lineStep = i*10;
//   line(lineStart+50, lineStep, lineEnd+50, lineStep);
//   }
//   for (let i=1; i <= otherMap; i++){
//   let lineStep = i*10;
//   line(lineStart+150, lineStep, lineEnd+150, lineStep);
//   }
//   for (let i=1; i <= vocalMap; i++){
//   let lineStep = i*10;
//   line(lineStart+200, lineStep, lineEnd+200, lineStep);
//   }
//   for (let i=1; i <= drumMap; i++){
//   let lineStep = i*10;
//   line(lineStart+250, lineStep, lineEnd+250, lineStep);
//   }
//   for (let i=1; i <= bassMap; i++){
//   let lineStep = i*10;
//   line(lineStart+300, lineStep, lineEnd+300, lineStep);
//   }
//   for (let i=1; i <= otherMap; i++){
//   let lineStep = i*10;
//  line(lineStart+350, lineStep, lineEnd+350, lineStep);
//   }
//   for (let i=1; i <= vocalMap; i++){
//     let lineStep = i*10;
//    line(lineStart+400, lineStep, lineEnd+400, lineStep);
//     }
//  for (let i=1; i <= drumMap; i++){
// let lineStep = i*10;
//   line(lineStart+450, lineStep, lineEnd+450, lineStep);
//  }
//  for (let i=1; i <= bassMap; i++){
//   let lineStep = i*10;
//   line(lineStart+500, lineStep, lineEnd+500, lineStep);
//  }
// }


  // let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);

