
var mySound;
var counter = 0;
var soundList = ['a.wav', 'z.wav', 'e.wav', 'r.wav', 't.wav', 'y.wav', 'u.wav', 'i.wav',
'o.wav', 'p.wav', 'q.wav', 's.wav', 'd.wav', 'f.wav', 'g.wav', 'h.wav', 'j.wav', 'k.wav',
'l.wav', 'm.wav', 'wv2.wav', 'x.wav', 'c.wav', 'v.wav', 'b.wav', 'n.wav'];

var thesounds = [];

var sound1, sound2, sound3;

function preload() {

  for (var i = 0; i < 26; i++) {
    thesounds[i] = loadSound('sounds_pa/' + soundList[i]);
  }

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 200, 200);
}

function draw(){}


function keyPressed() {

  if ((key == 'a') || (key == 'A')) {
    background(77, 24, 49);
    stroke(255);
    strokeWeight(5);
    line(random(width), random(height), random(width), random(height));

    thesounds[0].play();
  }


  if ((key == 'z') || (key == 'Z')) {
    background(255, 237, 12);
    stroke(12, 78, 255);
    strokeWeight(14);
    line(random(width), random(height), random(width), random(height));


    thesounds[1].play();
  }


  if ((key == 'e') || (key == 'E')) {
    background(30, 180, 255);
    stroke(255, 237, 12);
    strokeWeight(5);
    line(random(width), random(height), random(width), random(height));

  
    thesounds[2].play();
  }


  if ((key == 'r') || (key == 'R')) {
    background(95, 240, 72);
    stroke(240, 123, 72);
    strokeWeight(30);
    line(random(width), random(height), random(width), random(height));


    thesounds[3].play();
  }


  if ((key == 't') || (key == 'T')) {
    background(255, 78, 30);
    stroke(115, 24, 76);
    strokeWeight(5);
    line(random(width), random(height), random(width), random(height));

    thesounds[4].play();
  }


  if ((key == 'y') || (key == 'Y')) {
    background(255, 30, 136);
    stroke(255);
    strokeWeight(11);
    line(random(width), random(height), random(width), random(height));

    thesounds[5].play();
  }


  if ((key == 'u') || (key == 'U')) {
    background(252, 255, 30);
    stroke(255, 12, 0);
    strokeWeight(25);
    line(random(width), random(height), random(width), random(height));
  
    thesounds[6].play();
  }


  if ((key == 'i') || (key == 'I')) {
    background(255, 12, 93);
    stroke(255);
    strokeWeight(9);
    line(random(width), random(height), random(width), random(height));


    thesounds[7].play();
  }


  if ((key == 'o') || (key == 'O')) {
    background(147, 235, 255);
    stroke(241, 24, 149);
    strokeWeight(5);
    line(random(width), random(height), random(width), random(height));


    thesounds[8].play();
  }


  if ((key == 'p') || (key == 'P')) {
  background(255, 12, 93);
  stroke(0, 15, 255);
  strokeWeight(15);
  line(random(width), random(height), random(width), random(height));

  thesounds[9].play();
}



  if ((key == 'q') || (key == 'Q')) {
  thesounds[10].play();
}


  if ((key == 's') || (key == 'S')) {
  thesounds[11].play();
}


  if ((key == 'd') || (key == 'D')) {
  thesounds[12].play();
}


  if ((key == 'f') || (key == 'F')) {
  thesounds[13].play();
}


  if ((key == 'g') || (key == 'G')) {
  thesounds[14].play();
}


  if ((key == 'h') || (key == 'H')) {
  thesounds[15].play();
}


  if ((key == 'j') || (key == 'J')) {
  thesounds[16].play();
}

  if ((key == 'k') || (key == 'K')) {
  thesounds[17].play();
}

  if ((key == 'l') || (key == 'L')) {
  thesounds[18].play();
}


  if ((key == 'm') || (key == 'M')) {
  thesounds[19].play();
}


  if ((key == 'w') || (key == 'W')) {
  background(229, 165, 255);
  fill(165, 199, 255);
  ellipse(random(width), random(height), 1005, 1005);

  thesounds[20].play();
}


  if ((key == 'x') || (key == 'X')) {
  background(166, 30, 255);
  fill(random(255), random(255), random(255));
  rect(140, 200, 105, 360);
  rect(380, 200, 105, 250);

  thesounds[21].play();
}


  if ((key == 'c') || (key == 'C')) {
  fill(255);
  ellipse(random(width), random(height), 60, 60);
  ellipse(random(width), random(height), 60, 60);
  ellipse(random(width), random(height), 60, 60);
  ellipse(random(width), random(height), 60, 60);


  thesounds[22].play();
}


  if ((key == 'v') || (key == 'V')) {
  background(81, 0, 255);
  fill(random(255), random(255), random(255));
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));

  thesounds[23].play();
}


  if ((key == 'b') || (key == 'B')) {
  background(216, 255, 0);
  ellipse(random(width), random(height), 30, 30);
  ellipse(random(width), random(height), 30, 30);
  ellipse(random(width), random(height), 30, 30);
  ellipse(random(width), random(height), 30, 30);
  ellipse(random(width), random(height), 30, 30);
  ellipse(random(width), random(height), 30, 30);
  fill(random(255), random(255), random(255));

  thesounds[24].play();
}


  if ((key == 'n') || (key == 'N')) {
  background(255, 0, 93);
  ellipse(random(width), random(height), 105, 105);
  fill(random(255), random(255), random(255));

  thesounds[25].play();
}


}

function keyReleased() {
  background(255, 200, 200);
}