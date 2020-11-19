
class dustbin {
    constructor(x, y) {
      var options = {
           isStatic:true
      }
      
      //this.body=Bodies.rectangle(x,y,width,height,options);
     
this.x=x
this.y=y
this.dustbinwidth=200
this.dustbinheight=100
this.wallthickness=20
this.angle=0
this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,options)
 this.leftWallBody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2, this.wallthickness,this.dustbinheight,options)
Matter.Body.setAngle(this.leftWallBody,this.angle)
this.rightWallBody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight.options)
Matter.Body.setAngle(this.rightWallBody,this.angle)
World.add(world,this.bottomBody)
World.add(world,this.leftWallBody)
World.add(world,this.rightWallBody)
    }
   
  display(){
var  posbottom =  this.bottomBody.position
var  posright =  this.rightWallBody.position
var  posleft =  this.leftWallBody.position
push();
translate(posleft.x,posleft.y)
rectMode(CENTER)
rotate (this.angle)
fill (255)
rect(0,0,this.wallthickness,this.dustbinheight);
pop();

push();
translate(posright.x,posright.y)
rectMode(CENTER)
rotate (this.angle *(-1))
fill (255)
rect(0,0,this.wallthickness,this.dustbinheight);
pop();

push();
translate(posbottom.x,posbottom.y)
rectMode(CENTER)
fill (255)
rect(0,0,this.dustbinwidth,this.wallthickness);
pop();
  }
}