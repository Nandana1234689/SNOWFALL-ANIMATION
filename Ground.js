class Ground
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		
		this.body=Bodies.rectangle(600,630,1200,20, options);
 		World.add(world, this.body);

	}
	display()
	{
			
				

			push()
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER)
			strokeWeight(4);
			noStroke();
			noFill()
			rect(0,0,1200,10);
			pop()
			
	}

}