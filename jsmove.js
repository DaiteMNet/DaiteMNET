var it = document.getElementById("id");
		document.addEventListener("mousemove", getMouse); 


		it.style.position = "absolute"; //css		
		var itpos = {x:0, y:0};

		setInterval(followMouse, 50);
		
		var mouse = {x:0, y:0}; //mouse.x, mouse.y
		
		var dir = "right";
		function getMouse(e){
			mouse.x = e.pageX;
			mouse.y = e.pageY;
        //Checking directional change
        if(mouse.x > itpos.x){
          dir = "right";
        } else {
          dir = "left";
        }
		}
		
		function followMouse(){
			//1. find distance X , distance Y
			var distX = mouse.x - itpos.x;
			var distY = mouse.y - itpos.y;
			//Easing motion
       //Progressive reduction of distance 
			idpos.x += distX/5;
			idpos.y += distY/2;
			
			it.style.left = itpos.x + "px";
			it.style.top = itpos.y + "px";
      
      
        //Apply css class 
        if (dir == "right"){
          it.setAttribute("class", "right");
        } else {
          it.setAttribute("class", "left");        
        }
			
		}