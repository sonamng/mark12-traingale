const trianglesInput=document.querySelectorAll(".angles-input")
const trianglesButton=document.querySelector("#angles-btn")
const trianglesOutput=document.querySelector("#output")

function sumCalcuateSumOfangles(angles1,angles2,angles3){
    const anglesOfSum=angles1+angles2+angles3
    return (anglesOfSum)

}


function isTriangle(){
    const anglesOfSum=sumCalcuateSumOfangles(Number(trianglesInput[0].value),Number(trianglesInput[1].value),Number(trianglesInput[2].value))
    if(anglesOfSum===180){ //put the condition and check its trianlge or not
        // console.log('Great!,The angles from a trianlge')
        trianglesOutput.innerText='Great!,The angles from a trianlge'
    }else{
        // console.log("Oops! The anlges don't from a trianle")
        trianglesOutput.innerText="Oops! The anlges don't from a trianle"
    }

    
}

trianglesButton.addEventListener("click",isTriangle)