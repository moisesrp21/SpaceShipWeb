class Ship {
    constructor(ship,x,y) {
        this.width = 20;
        this.height = 40;
        this.ship = ship;
        this.x = x;
        this.y = y;
        this.destination = null;
        this.direction = 0;
        this.counter = 0;
        this.index = 0;
        this.timeForEachFrame = 300; // 1 sec
        // this.shipResize();
    }
    shipResize() {
        let shipHeightPerc = 0.04;
        this.height = game_h*shipHeightPerc;
        this.width = game_w*0.03;
        for (let i = 0; i<this.ship.length;i++)
            this.ship[i].resize(this.width,this.height);
    }

    draw() {
        if (this.destination==null) {
            this.index = 2;
        }
        else if (this.direction>0 && this.counter >= this.timeForEachFrame) {
            this.index = ((this.index-1)>=0)? this.index-1 : this.index;
            this.counter = 0;
        }
        else {
            if (this.counter >= this.timeForEachFrame) {
                this.index = ((this.index+1)<5)? this.index+1 : this.index;
                this.counter = 0;
            }
        }
        image(this.ship[this.index],this.x,this.y);
        this.counter += deltaTime;
    }
    update() {
        let center = (this.x+this.width/2);
        if (this.destination == null) {
            this.direction = 0;
        }
        else if ( center <= (this.destination+5)
            && center >= (this.destination-5)) {
            this.direction = 0;
            this.x = this.destination - (this.width/2);
            bullets.bullets.push({x: this.destination, y: game_h*0.8});
            this.destination = null;
        }
        else if (center < this.destination)
            this.direction = 1;
        else
            this.direction = -1;
        this.x += this.direction*(deltaTime / 5);
    }
}
