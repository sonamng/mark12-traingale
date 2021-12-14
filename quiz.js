
const quizFormAll = document.querySelector(".quiz-form")
const answerButton = document.querySelector("#submit-answers-btn")
const outPutScore = document.querySelector("#output")

const answerArray = ["90°", "Right angled", "One rigth angle", "12, 16, 20",
    "Equilateral triangle", "100°", "30°", "a + b + c", "No", "45°"
]


function calculateAnswerScore() {
    const fromDataResult = new FormData(quizFormAll)

    let index = 0
    let score = 0
    for (value of fromDataResult.values()) {
        if (value === answerArray[index]) {
            k = answerArray[index]
            score = score + 1


        }
        index = index + 1
    }
    outPutScore.innerText = `Your Score is:${score}`


}


answerButton.addEventListener("click", calculateAnswerScore)