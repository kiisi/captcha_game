export default class CaptchaQuiz{
    constructor(captcha_quiz_question, captcha_quiz_options, captcha_quiz_answer, captcha_quiz_image){
        this.captcha_quiz_answer = captcha_quiz_answer
        this.captcha_quiz_question = captcha_quiz_question
        this.captcha_quiz_options = captcha_quiz_options
        this.captcha_quiz_image = captcha_quiz_image
    }
}

// [
//     {
//         captcha_question: "Select Correct talent",
//         captcha_options: ["Miner", "Spectra", "Baller", "Alien"],
//         captcha_answer: "Spectra"
//     },
//     {
//         captcha_question: "Select Correct Career",
//         captcha_options: ["Miner", "Spectra", "Baller", "Alien"],
//         captcha_answer: "Baller"
//     }
// ]