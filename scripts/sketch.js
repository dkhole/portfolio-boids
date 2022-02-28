let w = window.innerWidth;
let h = window.innerHeight;
let n = 100;

const flock = [];
let qt;

let alignSlider, cohesionSlider, separationSlider;

const optButton = document.getElementById("opt-button");
let showTree = false;

optButton.addEventListener("click", updateButton);

function updateButton() {
  showTree ? (showTree = false) : (showTree = true);
}

function setup() {
  let canv = createCanvas(w, h);
  const canvWrap = document.getElementById("p5-wrap");
  let originParent = canv.parent();
  originParent.remove();
  canv.parent(canvWrap);

  separationSlider = createSlider(0, 5, 1, 0.1).parent("separation-wrap");
  alignSlider = createSlider(0, 5, 1, 0.1).parent("align-wrap");
  cohesionSlider = createSlider(0, 5, 1, 0.1).parent("cohesion-wrap");
  for (let i = 0; i < n; i++) {
    let position;
    if (i < n / 2) {
      position = createVector(random(-50, 0), random(0, -50));
      flock.push(new Boid(position, [random(255), random(255), random(255)]));
    } else {
      position = createVector(
        random(width, width + 100),
        random(height, height + 100)
      );
      flock.push(new Boid(position, [random(255), random(255), random(255)]));
    }
  }
}

function draw() {
  background(0);
  let boundary = new Rectangle(w / 2, h / 2, w, h);
  qtree = new QuadTree(boundary, 4);
  //put all boids into a bintree
  //sort boids into buckets depending on position
  for (let boid of flock) {
    //boid.seek(createVector(mouseX, mouseY));
    let point = new Point(boid.position.x, boid.position.y, boid);
    qtree.insert(point);
    boid.flock(qtree);
    boid.avoid(createVector(mouseX, mouseY));
    boid.update();
    boid.edges();
    boid.display();
  }

  if (showTree) {
    qtree.show();
  }
}

window.onresize = function () {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  resizeCanvas(w, h);
};
