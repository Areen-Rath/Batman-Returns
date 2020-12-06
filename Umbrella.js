class Umbrella {
    constructor(){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.circle(205, 450, 60, options);
        World.add(world, this.body);
    }
}