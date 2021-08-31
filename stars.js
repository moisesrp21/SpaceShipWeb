class Stars {
    constructor(stars_qt) {
        let x;
        let y;
        this.stars_qt = stars_qt;
        this.no_moving = [];
        this.far = [];
        this.close = [];
        for (let i = 0;i<stars_qt; i++) {
            x = random(0,game_w);
            y = random(0,game_h);
            this.no_moving[this.no_moving.length] = createVector(x,y);
            x = random(0,game_w);
            y = random(0,game_h);
            this.far[this.far.length] = createVector(x,y);
            x = random(0,game_w);
            y = random(0,game_h);
            this.close[this.close.length] = createVector(x,y);
        }
    }
    run() {
        this.update();
        this.draw();
    }
    update() {
        for (let i = 0; i<this.stars_qt; i++) {
            this.close[i].y = (this.close[i].y<game_h)? (this.close[i].y + 2) : (0);
            this.far[i].y = (this.far[i].y<game_h)? (this.far[i].y + 1) : (0);
        }
    }
    draw() {
        for( let i = 0; i<this.stars_qt; i++) {
            stroke(252, 250, 250);
            strokeWeight(1);
            point(this.no_moving[i]);

            stroke(176, 176, 176);
            strokeWeight(2);
            point(this.far[i]);

            stroke(252, 250, 250);
            strokeWeight(3);
            point(this.close[i]);
        }
    }
}
