// let bucketX = 0; // starting x position of the bucket
// const bucketWidth = 50; // width of the bucket
// const bucketHeight = 70; // height of the bucket
// const canvasWidth = 700; // width of the canvas
// const canvasHeight = 700; // height of the canvas
// let eggs = []; // array to hold eggs
// let bombs = []; // array to hold bombs

// function setup() {
//   createCanvas(canvasWidth, canvasHeight);
// }

// function draw() {
//   background(220);

//   // draw the bucket
//   stroke(0); // black stroke
//   fill(255, 200, 0); // darker yellow color
//   rect(bucketX, canvasHeight - bucketHeight - 10, bucketWidth, bucketHeight);

//   // move the bucket
//   if (keyIsDown(LEFT_ARROW)) {
//     bucketX -= 5;
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     bucketX += 5;
//   }

//   // constrain the bucket within the canvas
//   bucketX = constrain(bucketX, 0, canvasWidth - bucketWidth);

//   // spawn eggs randomly
//   if (frameCount % 60 === 0) {
//     let egg = new Egg(random(width), 0);
//     eggs.push(egg);
//   }

//   // spawn bombs randomly
//   if (frameCount % 120 === 0) {
//     let bomb = new Bomb(random(width), 0);
//     bombs.push(bomb);
//   }

//   // update and display all eggs
//   for (let i = eggs.length - 1; i >= 0; i--) {
//     eggs[i].update();
//     eggs[i].display();

//     // check if egg is caught by bucket
//     if (eggs[i].caught(bucketX, bucketWidth, bucketHeight)) {
//       eggs.splice(i, 1);
//     }
//   }

//   // update and display all bombs
//   for (let i = bombs.length - 1; i >= 0; i--) {
//     bombs[i].update();
//     bombs[i].display();

//     // check if bomb hits bucket
//     if (bombs[i].hits(bucketX, bucketWidth, bucketHeight)) {
//       bombs.splice(i, 1);
//     }
//   }
// }

// // egg class
// class Egg {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.speed = random(1, 5);
//   }

//   // update egg position
//   update() {
//     this.y += this.speed;
//   }

//   // display egg
//   display() {
//     fill(255);
//     ellipse(this.x, this.y, 20, 30);
//   }

//   // check if egg is caught by bucket
//   caught(bucketX, bucketWidth, bucketHeight) {
//     if (
//       this.y + 15 >= canvasHeight - bucketHeight - 10 &&
//       this.x >= bucketX &&
//       this.x <= bucketX + bucketWidth
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// // bomb class
// class Bomb {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.speed = random(2, 8);
//   }

//   // update bomb position
//   update() {
//     this.y += this.speed;
//   }

//   // display bomb
//   display() {
//     fill(255, 0, 0);
//     rect(this.x, this.y, 20, 20);
//   }

//   // check if bomb hits bucket
//   hits(bucketX, bucketWidth, bucketHeight) {
//     if (
//       this.y + 20 >= canvasHeight - bucketHeight - 10 &&
//       this.x + 20 >= bucketX &&
//       this.x <= bucketX + bucketWidth
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
let bucketX = 0; // starting x position of the bucket
const bucketWidth = 50; // width of the bucket
const bucketHeight = 70; // height of the bucket
const canvasWidth = 700; // width of the canvas
const canvasHeight = 700; // height of the canvas
let eggs = []; // array to hold eggs
let bombs = []; // array to hold bombs
let points = 0; // initialize point counter

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(220);

  // display point counter
  textSize(24);
  fill(0);
  text(`Points: ${points}`, 10, 30);

  // draw the bucket
  stroke(0); // black stroke
  fill(255, 200, 0); // darker yellow color
  rect(bucketX, canvasHeight - bucketHeight - 10, bucketWidth, bucketHeight);

  // move the bucket
  if (keyIsDown(LEFT_ARROW)) {
    bucketX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    bucketX += 5;
  }

  // constrain the bucket within the canvas
  bucketX = constrain(bucketX, 0, canvasWidth - bucketWidth);

  // spawn eggs randomly
  if (frameCount % 60 === 0) {
    let egg = new Egg(random(width), 0);
    eggs.push(egg);
  }

  // spawn bombs randomly
  if (frameCount % 120 === 0) {
    let bomb = new Bomb(random(width), 0);
    bombs.push(bomb);
  }

  // update and display all eggs
  for (let i = eggs.length - 1; i >= 0; i--) {
    eggs[i].update();
    eggs[i].display();

    // check if egg is caught by bucket
    if (eggs[i].caught(bucketX, bucketWidth, bucketHeight)) {
      eggs.splice(i, 1);
      points++; // increment point counter
    }
  }

  // update and display all bombs
  for (let i = bombs.length - 1; i >= 0; i--) {
    bombs[i].update();
    bombs[i].display();

    // check if bomb hits bucket
    if (bombs[i].hits(bucketX, bucketWidth, bucketHeight)) {
      bombs.splice(i, 1);
      points--; // decrement point counter
    }
  }
}

// egg class
class Egg {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 5);
  }

  // update egg position
  update() {
    this.y += this.speed;
  }

  // display egg
  display() {
    fill(255);
    ellipse(this.x, this.y, 20, 30);
  }

  // check if egg is caught by bucket
  caught(bucketX, bucketWidth, bucketHeight) {
    if (
      this.y + 15 >= canvasHeight - bucketHeight - 10 &&
      this.x >= bucketX &&
      this.x <= bucketX + bucketWidth
    ) {
      return true;
    } else {
      return false;
    }
  }
}

// bomb class
class Bomb {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(2, 8);
  }

  // update bomb position
  update() {
    this.y += this.speed;
  }

  // display bomb
  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 20, 20);
  }

  // check if bomb hits the bucket
  hits(bucketX, bucketWidth, bucketHeight) {
    if (
      this.y + 10 >= canvasHeight - bucketHeight - 10 &&
      this.x >= bucketX &&
      this.x <= bucketX + bucketWidth
    ) {
      return true;
    } else {
      return false;
    }
  }
}
