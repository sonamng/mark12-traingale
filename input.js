

const inputSideOfTrianlge=document.querySelectorAll(".side-of-triangle")
const sideButton=document.querySelector("#calculate-btn")
const resultOutput=document.querySelector("#output")

function calculateSideOfAnagles(a,b,c){
    const areaOfTrianlge=(1.73*a*a)/4
    return areaOfTrianlge
    

}


function calculateAreaOfAngels(){

    const angleOfNumber=calculateSideOfAnagles(Number(inputSideOfTrianlge[0].value),Number(inputSideOfTrianlge[1].value),Number(inputSideOfTrianlge[2].value))
    const lengthOfAreaOfAnlge=(angleOfNumber)

    if(angleOfNumber){
        resultOutput.innerText=`Area of a triangle using heron's formula is:${angleOfNumber}`

    }else{
        resultOutput.innerText=`Enter valid side lengths such that each side lengths`

    }
    
    
   
}

sideButton.addEventListener("click",calculateAreaOfAngels)