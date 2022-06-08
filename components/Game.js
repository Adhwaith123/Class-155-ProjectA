AFRAME.registerComponent("gameplay",{
    schema:{
        elementId:{type:"string",default:"#ring1"}
    },
    init:function(){
        console.log("hello")
        this.isCollider(this.data.elementId);
    },
    isCollider:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#ring")){
                element.setAttribute("visible",false)
                this.updateScore()
                this.updateTarget()
            }
            if(hurdle){

            }
        })
    },
    updateTarget:function(){
        const element=document.querySelector("#targetrings")
        var count=element.getAttribute("text").value
        let CurrentTarget=parseInt(count)
        CurrentTarget-=1
        element.setAttribute("text",{
          value:CurrentTarget
        })
      },
      updateScore: function(){
        const element=document.querySelector("#score")
        var count=element.getAttribute("text").value
        let CurrentScore=parseInt(count)
        CurrentScore+=50
        element.setAttribute("text",{
        value:CurrentScore
        })
      }
    

})
