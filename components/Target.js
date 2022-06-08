// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `ring${i}`;

      //position variables
      var posX = Math.random() * 3000 + (-1000);      
      var posY = Math.random() * 2 + (-1);
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createRings(id, position);
    }
  },

  createRings: function(id,position) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id",id);
    ringEl.setAttribute("material","color","#ff9100");
    ringEl.setAttribute("position",position);
    ringEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   
    ringEl.setAttribute("static-body",{
      shape:"sphere",
      sphereRadius:2
    })
    ringEl.setAttribute("gameplay",{
      elementId:`#${id}`
    })
        
    terrainEl.appendChild(ringEl);
  }
  
});
AFRAME.registerComponent("score",{
  init:function(){
    var duration=120
    const timerel=document.querySelector("#counter")
    this.startTimer(duration,timerel)
  },
  startTimer:function(duration,timerel){
    var minutes,seconds
    setInterval(()=>{
      if(duration>=0){
        minutes=parseInt(duration/60)
        seconds=parseInt(duration%60)
        if(minutes<10){
          minutes="0"+minutes
        }
        if(seconds<10){
          seconds="0"+seconds

        }
        timerel.setAttribute("text",{
          value:minutes+":"+seconds
        })
        duration-=1
      }
    },1000)
  },

})
