class Ball {
    constructor(x,y,radius){
        var option= {
            restitution : 0.8,
            density : 0.6,
            friction : 1.0
        }
        this.body= Bodies.circle(x,y,radius,option);
        this.radius=radius
       
        World.add (world,this.body);
    }
    
    display(){
        var pos=this.body.position;
       push();
        translate(pos.x,pos.y)
        stroke("black");
        fill("black");
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    
}