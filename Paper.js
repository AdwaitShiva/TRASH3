class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2,
            }
        
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius
        this.image= loadImage("baper.png");
       
        World.add(world, this.body);
    }
    display () {
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
        this.width=15
        this.height=15
    }       
 };