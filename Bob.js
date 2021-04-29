class Bob {
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius/2,options); 
        ellipse(0,0,this.radius,this.radius);
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER)
        ellipse(0,0,this.radius);
        pop();
    }
}