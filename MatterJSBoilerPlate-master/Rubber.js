class Rubber{

    constructor(x,y,radius){

        var options={
            restitution:0.3,
            friction:5,
            density:1,
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
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(0,0,this.width,this.height)
        pop();


    }

}