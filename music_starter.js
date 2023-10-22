
let rippleX = 500;
let rippleY = 500;
let rippleSize = 0;
let bassSize = 0;

let eyeX = 500
let eyeY = 500

let ringSize = -495
let ringStart = 500
let ringEnd = ringStart + ringSize


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB,100);
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  background(0);
  strokeWeight(2);
  noFill();

let otherMap2 = map(other, 0, 100, 0,100);
let bassMap = map(bass, 0, 100, 0, 200);
let vocalMap = map(vocal, 0, 100, 0, 50);
let vocalMap2 = map(vocal, 0, 100, 100, 0);
let drumRingSize = map(drum, 0, 100, 0, 200);

 function drawEye(eyeX, eyeY){
beginShape();
bezier(eyeX-100,eyeY,eyeX-60,eyeY-60,eyeX+60,eyeY-60,eyeX+100,eyeY);
bezier(eyeX-100,eyeY,eyeX-60,eyeY+60,eyeX+60,eyeY+60,eyeX+100,eyeY);
endShape();
    }

stroke(vocal,50,100);
for (let i=1; i <= vocalMap; i++){
  let ringStep = i*10;
   circle(ringStart, ringStep, ringEnd, ringStep);
   }

   stroke(vocal, 50, 100);
for (let i=1; i <= vocalMap2; i++){
  let ringStep = i*10;
 circle(ringStart+225, ringStep, ringEnd, ringStep);
 }
 stroke(vocal, 50, 100);
 for (let i=1; i <= vocalMap2; i++){
   let ringStep = i*10;
  circle(ringStart-225, ringStep, ringEnd, ringStep);
  }

  stroke(other, 50, 100);
  for (let i=1; i <= otherMap2; i++){
    let ringStep = i*10;
   circle(ringStart+425, ringStep, ringEnd, ringStep);
   }


   stroke(other, 50, 100);
   for (let i=1; i <= otherMap2; i++){
     let ringStep = i*10;
    circle(ringStart-425, ringStep, ringEnd, ringStep);
    }


stroke(drum,50,100);
 circle(500, 250, drumRingSize);
 circle(500, 800, drumRingSize+110);
 circle(500, 800, drumRingSize-20);
 circle(825, 500, drumRingSize-150);
 circle(175, 500, drumRingSize-150);

 stroke(bass,50,100);
 circle(500, 800, bassMap);

stroke(vocal, 50, 100);
 circle(725, 500, vocalMap);
 circle(925, 500, vocalMap);
 circle(925, 750, vocalMap);
 circle(725, 750, vocalMap);
 circle(825, 750, vocalMap+50);
 circle(75, 250, vocalMap);
 circle(175, 250, vocalMap+50);
 circle(275, 250, vocalMap);
 circle(75, 500, vocalMap);
 circle(275, 500, vocalMap);
 circle(275, 750, vocalMap);
 circle(75, 750, vocalMap);
 circle(175, 750, vocalMap+50);
 circle(725, 250, vocalMap);
 circle(825, 250, vocalMap+50);
 circle(925, 250, vocalMap);

 stroke(other,50,100);
 line(725,250,925,250);
 line(725,250,925,500);
 line(725,500,925,250);
 line(725,750,925,500);
 line(725,500,925,750);
 line(725,750,925,750);
 line(75,250,925,250);
 line(75,250,275,500);
 line(75,500,275,250);
 line(75,750,275,500);
 line(75,500,275,750);
 line(75,750,275,750);

 rippleSize += 1;
 bassSize += 1;

if (rippleSize >= 30){
      rippleSize = 0
   }
if (bassSize >= 30){
    bassSize = 0
  }

if (bass >= 65 && bass <=70){
  stroke(bass,50,100);
  circle(rippleX, rippleY-250, 30);
}  
if (bass >= 71 && bass <=75){
  stroke(bass,50,100);
  circle(rippleX, rippleY-250, 60);
} 
 if (bass >= 76 && bass <= 80){
  stroke(bass,50,100);
  circle(rippleX, rippleY-250, 100);
} 
 if (bass >= 81 && bass <= 85){
  stroke(bass,50,100);
  circle(rippleX, rippleY-250, 150);
} 
 if (bass >= 86){
  stroke(bass,50,100);
  circle(rippleX, rippleY-250, 210);
}  
if (bass <=69) {
    stroke(bass,50,100);
    circle(500, 220, bassSize);
    circle(500, 250, bassSize);
    circle(500, 280, bassSize);
  }


    if (vocal >= 40){  
      stroke(drum,50,100);
      strokeWeight(3)
      circle(rippleX, rippleY, 40);
      circle(rippleX, rippleY, 70);
      circle(rippleX, rippleY, 100);

      translate(-250,-250);
      scale(1.5)
      stroke(vocal,50,100);
      circle(rippleX, rippleY, rippleSize);
      circle(rippleX, rippleY, rippleSize+20);
      circle(rippleX, rippleY, rippleSize+40);

      drawEye(500, 500);
      line(420,479,400,460);//1
      line(430,470,410,440);//2
      line(445,465,425,420);//3
      line(460,460,450,430);//4
      line(480,455,475,410);//5
      line(500,455,500,430);//6
      line(520,455,525,410);//7
      line(540,460,550,430);//8
      line(555,465,575,420);//9
      line(570,470,590,440);//10
      line(580,479,600,460);//11

      line(420,521,400,545);
      line(430,530,410,565);
      line(445,535,425,585);
      line(460,540,450,575);
      line(480,545,475,595);
      line(500,545,500,575);
      line(520,545,525,595);
      line(540,540,550,575);
      line(555,535,575,585);
      line(570,530,590,565);
      line(580,521,600,545);
    } else if (vocal <=39){
      stroke(vocal,50,100);
      translate(-250,-250);
      scale(1.5)
      drawEye(500, 500);
      line(420,521,400,545);
      line(430,530,410,565);
      line(445,535,425,585);  
      line(460,540,450,575);
      line(480,545,475,595);
      line(500,545,500,575);
      line(520,545,525,595);
      line(540,540,550,575);
      line(555,535,575,585);
      line(570,530,590,565);
      line(580,521,600,545);
    }
  }  


