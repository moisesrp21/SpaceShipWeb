let p;
let far;
let close;
let no_moving;
let stars_qt = 10;
let less = 3;
let stars;
let ship;
let enemy;
let bullets;
let moises = [];
let youWin;
let playing = true;

function preload() {
    moises.push({x: 0, y: 0, i: loadImage("assets/images/M01.png")});
    moises.push({x: 0, y: 0, i: loadImage("assets/images/O01.png")});
    moises.push({x: 0, y: 0, i: loadImage("assets/images/I01.png")});
    moises.push({x: 0, y: 0, i: loadImage("assets/images/S011.png")});
    moises.push({x: 0, y: 0, i: loadImage("assets/images/E01.png")});
    moises.push({x: 0, y: 0, i: loadImage("assets/images/S012.png")});
    moises.push({x: 0, y: 0, i: loadImage("assets/images/R01.png")});
    moises.push({x: 0, y: 0, i: loadImage("assets/images/P01.png")});
    youWin = loadImage("assets/images/YouWin.png");
    let shipImg = [];
    shipImg.push(loadImage("assets/images/ship-1.png"));
    shipImg.push(loadImage("assets/images/ship-2.png"));
    shipImg.push(loadImage("assets/images/ship-3.png"));
    shipImg.push(loadImage("assets/images/ship-4.png"));
    shipImg.push(loadImage("assets/images/ship-5.png"));
    ship = new Ship(shipImg,game_w/2,game_h*0.8);
}

function setup() {
    createCanvas(game_w, game_h);
    stars = new Stars(10);
    enemy = new Enemy(moises);
    bullets = new Bullets();
    ship.shipResize();
}

function draw() {
    background(0,0,0);
    stars.run();
    enemy.draw();
    if (playing === true) {
        playing = enemy.collide(bullets.bullets);
        ship.update();
        ship.draw();
        bullets.update();
        bullets.draw();
    }
    else
        image(youWin,game_w*0.3,game_h/2);
}

function mouseClicked() {
    ship.destination = mouseX;
    if (!playing) {
        enemy.reset();
        playing = true;
    }
}

function windowResized() {
    resizeCanvas(game_w,game_h);
}
