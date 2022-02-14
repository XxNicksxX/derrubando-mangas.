class launcher {
   constructor(bodyA,pointB){


    this.launcher = Constraint.create({
       bodyA : bodyA,
       pointB : pointB,
       stiffness:0.004,
       length:1
    })

    World.add(world, this.launcher)
    
   }
   attach(body){
   this.launcher.bodyA = body
   }
        fly(){

    this.launcher.bodyA = null
    }

}