class Cradle {
    constructor(body1, point2) {
        var options = {
            "bodyA": body1,
            "pointB": point2,
            stiffness: 1,
            length: 200
        }
        this.pointB = point2
        this.cradle= Matter.Constraint.create(options);
        World.add(world, this.cradle);
    }

    show() {
        var body1 = this.cradle.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(7);
        line(body1.x, body1.y, pointB.x, pointB.y);
        pop();      
    }
}