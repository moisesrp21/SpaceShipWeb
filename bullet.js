class Bullets {
    constructor() {
        this.bullets = [];
    }
    draw() {
        for(let i = 0;i<this.bullets.length;i++) {
            fill(color(255, 204, 0));
            noStroke();
            if (this.bullets[i].y > 0)
                rect(this.bullets[i].x, this.bullets[i].y,4,14);
        }
    }
    update() {
        let b = this.bullets;
        for(let i =0; i<b.length; i++) {
            b[i].y -= 10;
            if (b[i].y <= 30)
                b.shift();
        }
    }
}
