class Monster{
    constructor(x,y,r){
        var options={
            density:0.01,
            frictionAir:0.01,
            isStatic : false

        }

this.x = x
this.y = y
this.r = r
this.image= loadImage("Monster-01.png")
this.body = Bodies.circle(this.x,this.y,(this.r)/2,options)
World.add(world,this.body)


    }

    display(){
        var pos = this.body.position   
        push()
        fill("white")
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop();
    }
}