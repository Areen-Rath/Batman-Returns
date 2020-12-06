class Drop {
    constructor(x, y){
        var options = {
            friction: 1,
            resttution: 0.4
        }
        this.body = Bodies.circle(x, y, 3, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        noStroke();
        fill("blue");
        circle(pos.x, pos.y, 3);
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: Math.round(random(0, 400)), y: Math.round(random(0, 400))});
        }
        pop();
    }
}