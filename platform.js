class Platform {
    constructor(x, y, w, h) {
        var options = {
            "restitution": 0.8,
            "isStatic": true
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    show() {
        push();
        rectMode(CENTER);
        fill(107, 49, 21);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}