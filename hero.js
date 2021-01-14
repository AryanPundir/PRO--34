class Hero{
    constructor(x,y,weidth,height){
        var options={
            density:1,
            frictionAir:1,
            isStatic : false

        }
this.body = Bodies.rectangle(x,y,weidth,height,options)
this.weidth = weidth
this.height = height
this.image = loadImage("Superhero-01.png");
World.add(world,this.body)


    }

    display(){
        var pos = this.body.position   
        push()
        fill("white")
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.weidth,this.height)
        pop();
    }
}