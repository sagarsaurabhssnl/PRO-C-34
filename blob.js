class Blob {
    constructor(x, y) {
        var options = {
            restitution: 1.25,
            density: 5
        }

        this.body = Bodies.circle(x, y, 30, options);
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        fill(100);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 60, 60);
        pop();
    }
}