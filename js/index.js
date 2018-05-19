var rocket 			= document.getElementsByClassName("rocket")[0] 
var finishArea 	= document.getElementsByClassName("box")[0]
var launch			= document.getElementById("launch")
var rocketSpeed = 16.6666
var rocketY			= 0
var rocketspeed2 = 1

//attack click event to launch button
launch.addEventListener("click", launchRocket)
document.addEventListener("keydown", launchRocket)
//this function will animate rocket going up
function launchRocket(e){
    //begin interval for animation
    console.log(e.keyCode)
    setInterval(function(){
    //get rocket and finish area offsets
    var rocketOffset = rocket.getBoundingClientRect()
    var finishOffset = finishArea.getBoundingClientRect()

    //check if rocket hit finish area
    if( rocketOffset.top < (finishOffset.height + finishOffset.top) ){
    	finishArea.classList.add("active")
			finishArea.innerHTML = "Finish"
    }
    
  	rocketY = rocketY + rocketspeed2
      rocket.style.transform = "translateY(-"+rocketY+"px)"
  }, rocketSpeed)



  setInterval(function(){
    rocketspeed2 = rocketspeed2 + 0.05
  }, rocketSpeed)
}