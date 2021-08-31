class Enemy {
    constructor(moises) {
        this.index = 0;
        this.moises = moises;
        this.moises[this.index].x = random(0,game_w-55);
        this.moises[this.index].y = random(60,game_h - (game_h*0.2+55));
        this.location = 20;
    }

    draw() {
        for (let i = 0; i<= this.index; i++) {
            image(this.moises[i].i, this.moises[i].x, this.moises[i].y);
            // console.log(i+"_("+ this.moises[this.index].x+", "+ this.moises[this.index].x + ")");
        }

    }

    collide(bullets) {
        let bX;
        let bY;
        for(let i = 0; i<bullets.length; i++) {
            bX = bullets[i].x;
            bY = bullets[i].y;
            if (bY <= (this.moises[this.index].y+35) && bY >= this.moises[this.index].y
                && bX >= this.moises[this.index].x && bX <= (this.moises[this.index].x+35))
            {
                bullets[i].y = 0;
                // this.moises[this.index].i.resize(32,0);
                this.moises[this.index].x = this.location;
                this.moises[this.index].y = 20;
                this.location += 40;

                if ((this.index+1)<8)
                    this.index++;
                else
                    return false;

                this.moises[this.index].x = random(0,game_w-55);
                this.moises[this.index].y = random(60,game_h - (game_h*0.2+55));
            }
        }
        return true;
    }
    reset() {
        this.location = 20;
        this.index = 0;
        this.moises[this.index].x = random(0,game_w-55);
        this.moises[this.index].y = random(60,game_h - (game_h*0.2+55));
    }
}
