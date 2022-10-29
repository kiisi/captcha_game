import CaptchaQuiz from "./CaptchaQuiz.js"

export default class CaptchaBrain {
    #question_number
    #question_store

    constructor() {
        this.#question_number = 0
        this.#question_store = [
            new CaptchaQuiz("Select Correct Talent", ["Gutter", "Miner", "Sharman", "Spectra"], "Miner", "./img/0000.PNG"),
            new CaptchaQuiz("Select Correct Class", ["Service", "Warrior", "Creator", "Explorer"], "Warrior", "./img/0001.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Cammer", "Leftover", "Gutter", "Tripper"], "Cammer", "./img/0002.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Alien", "Cammer", "Astronomer", "Busker"], "Astronomer", "./img/0003.PNG"),
            new CaptchaQuiz("Select Correct Class", ["Leftover", "Service", "Warrior", "Explorer"], "Service", "./img/0004.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Gene Editor", "Busker", "Cammer", "Leftover"], "Gene Editor", "./img/0005.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Cammer", "Gunter", "Leftover", "Gargoyle"], "Gunter", "./img/0006.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Mercenary", "Enforcer", "Looter", "Gargoyle"], "Enforcer", "./img/0007.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Ai", "Leftover", "Hacker", "Cammer"], "Hacker", "./img/0008.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Alien", "Gene Editor", "Ai", "Creator"], "Alien", "./img/0009.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Astronomer", "Pilot", "Mercenary", "Explorer"], "Astronomer", "./img/0010.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Leftover", "Service", "Explorer", "None"], "None", "./img/0011.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Creator", "Service", "Explorer", "Leftover"], "Explorer", "./img/0012.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Cammer", "Hacker", "Cleanup Crew", "Tripper"], "Tripper", "./img/0013.PNG"),
            new CaptchaQuiz("Select Correct Talent", ["Service", "Creator", "Explorer", "Warrior"], "Explorer", "./img/0014.PNG")
        ]
        this.questionMonitor = () => {
            if (this.#question_number < this.#question_store.length - 1) {
                return true
            }
            return false
        }
    }

    nextQuestion() {
        return this.#question_number++
    }

    getQuestionText() {
        return this.#question_store[this.#question_number].captcha_quiz_question;
    }
    getQuestionOptions() {
        return this.#question_store[this.#question_number].captcha_quiz_options
    }
    getQuestionAnswer() {
        return this.#question_store[this.#question_number].captcha_quiz_answer
    }
    getQuestionImage() {
        return this.#question_store[this.#question_number].captcha_quiz_image
    }
    getQuestionIndex() {
        return { index: this.#question_number + 1, total: this.#question_store.length }
    }


}





