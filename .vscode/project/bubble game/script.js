  var score=0;
  var hitrn=0;
  function scorefun(){
    score +=10;
    document.querySelector("#score").textContent=score;

  }
 
 function makebubble(){
  var clutter="";
  for(var i=1;i<70;i++){
    var rm=Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rm}</div>`;
  }
  document.querySelector("#pbtm").innerHTML=clutter;
    
  }

  var time=6;
  function runtime(){
    var timer=setInterval(function(){
  if(time>0){
      time--;
    

        document.querySelector("#timer").textContent=time;
    }else{
      clearInterval(timer);
      document.querySelector("#pbtm").innerHTML="<h1>GAME OVER!</h1>";
    }
    },1000)
  }

  function hit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitt").textContent=hitrn;
  }

   var score=0;
  function scorefun(){
    score +=10;
    document.querySelector("#scoree").textContent=score;
  }

  document.querySelector("#pbtm").addEventListener("click",function(dets){
  var clicked=(Number(dets.target.textContent));
  if(clicked === hitrn){
      scorefun();
      makebubble();
      hit();
  }
  })




runtime();
 makebubble();
hit();
