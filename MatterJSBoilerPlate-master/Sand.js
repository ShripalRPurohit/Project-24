class Sand{

    constructor(x,y,radius){

        var options={
            restitution:0.3,
            friction:0.5,
            density:3,
        }

        this.body= Bodies.circle(x,y,radius,options)
        this.width = radius
        this.height = radius
        World.add(world,this.body)

    }


    display(){

        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("yellow")
        ellipseMode(RADIUS)
        ellipse(0,0,this.width,this.height)
        pop();


    }

}