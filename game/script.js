var btn = document.querySelector("button")
var screen = document.querySelectorAll(".screen")
var allelem = document.querySelectorAll(".elem")
var img = document.querySelectorAll(".elem img")
var selected = " "
var startgame = document.querySelector("#startgame")
var scoreVal = document.querySelector("#nav h3 span")
var Time = document.querySelector("#nav h2 span")
var timer = 30 ;
var score = 0 ;
var playground = document.querySelector("#playground")

btn.addEventListener("click", function(){
   screen[1].style.transform = "translateY(-100% )" ;
   screen[1].style.transition = "all ease 1s"
})

function runtimer(){
  var  clrinterval = setInterval(function(){
   if(timer>0){
    timer--;
    Time.innerHTML = timer ;
   }
   else{
       
     clearInterval(clrinterval);   
     createImage = null ;
     playground.innerHTML = `<h1> GAME OVER <br> Your Score is : ${score} </h1> ` 
   
        
   }
  },1000)
}
runtimer()

allelem.forEach(function(elem){
    elem.addEventListener("click",function(){
        screen[2].style.transform = "translateY(-200%)"
        screen[2].style.transition = "all ease 1s"
        selected = elem.childNodes[3].getAttribute("src") 
      
       setInterval(function(){
        createImage()
       },1000)
      
     
    })
})
function catchimg(){
    var image = document.querySelectorAll("#playground img")
    image.forEach(function(elem){
    elem.addEventListener("click" , function(){
      console.log("cllicked")
       if(timer > 0){
        score++ ;
        scoreVal.innerHTML = score 
       }
       else{

        return 
       }
    })
    })
}
function createImage(){
    var newImg = document.createElement("img")
     newImg.setAttribute("src" , selected)
    var x = Math.random()*100
    var y = Math.random()*100
    var rot = Math.random()*360
            newImg.style.left =x+"%"
            newImg.style.top = y+"%"
            newImg.style.rotate = rot+"deg" ;
            playground.appendChild(newImg) ;
         catchimg()      
         setInterval(function(){
          playground.removeChild(newImg)
        },1400)
       
}



 