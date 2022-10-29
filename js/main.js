import CaptchaBrain from "./CaptchaBrain.js";
import CaptchaChart from "./CaptchaChart.js";

let app = document.querySelector("#app");
let btn = document.querySelector(".btn");


class Captcha {
    constructor(root, modal) {
        this.root = root
        this.captchaBrain = new CaptchaBrain()
        this.score = 0
        this.root.innerHTML = `
        <div class="captcha">
        <div class="captcha__header">
            <h1>Rare Games Demo</h1>
        </div>
        <div class="captcha__quiz">
            <div class="captcha__quiz--number"></div>
            <div class="captcha__quiz--header"></div>
            <div class="captcha__quiz--image">
                <img src="./img/0000.PNG"alt="quiz image"/>
            </div>
            <div class="captcha__quiz--options">
                <label class="captcha__quiz--options__btn" for="captcha-radio-1">
                    <input type="radio" name="captcha-radio"id="captcha-radio-1" value="">
                    <span class="captcha__quiz--options__btn--radio">
                        <div class="captcha__quiz--options__btn--radio__dot"></div>
                    </span>
                    <span class="captcha__quiz--options__btn--text"></span>
                </label>
                <label class="captcha__quiz--options__btn" for="captcha-radio-2">
                    <input type="radio" name="captcha-radio"id="captcha-radio-2" value="">
                    <span class="captcha__quiz--options__btn--radio">
                        <div class="captcha__quiz--options__btn--radio__dot"></div>
                    </span>
                    <span class="captcha__quiz--options__btn--text"></span>
                </label>
                <label class="captcha__quiz--options__btn" for="captcha-radio-3">
                    <input type="radio" name="captcha-radio"id="captcha-radio-3" value="">
                    <span class="captcha__quiz--options__btn--radio">
                        <div class="captcha__quiz--options__btn--radio__dot"></div>
                    </span>
                    <span class="captcha__quiz--options__btn--text"></span>
                </label>
                <label class="captcha__quiz--options__btn" for="captcha-radio-4">
                    <input type="radio" name="captcha-radio"id="captcha-radio-4" value="">
                    <span onclick="event.stopPropagation()" class="captcha__quiz--options__btn--radio">
                        <div class="captcha__quiz--options__btn--radio__dot"></div>
                    </span>
                    <span onclick="event.stopPropagation()" class="captcha__quiz--options__btn--text"></span>
                </label>
            </div>
        </div>
    </div>
        `;

        this.updateCaptcha = () => {
            this.root.querySelector(".captcha__quiz--header").textContent = this.captchaBrain.getQuestionText();
            this.root.querySelector(".captcha__quiz--number").textContent = `${this.captchaBrain.getQuestionIndex().index}/${this.captchaBrain.getQuestionIndex().total}`;
            this.root.querySelectorAll(".captcha__quiz--options__btn").forEach((elem, index) => {
                elem.children[0].value = this.captchaBrain.getQuestionOptions()[index]
                elem.children[2].textContent = this.captchaBrain.getQuestionOptions()[index]
            })
            this.root.querySelector(".captcha__quiz--image img").src = this.captchaBrain.getQuestionImage();
        }
        /* Event Listeners for the options  */
        this.root.querySelector(".captcha__quiz--options").addEventListener("change", (e) => {
            if (e.target.value === this.captchaBrain.getQuestionAnswer()) {
                this.score += 6;
            }
            if (this.captchaBrain.questionMonitor()) {
                this.captchaBrain.nextQuestion()
                setTimeout(() => {
                    this.root.querySelectorAll(".captcha__quiz--options__btn input").forEach(radio => radio.checked = false)
                    this.updateCaptcha()
                }, 400)
            } else {
                console.log("Game End")
                this.root.innerHTML =
                    `
                <div class="modal-wrapper">
                    <div class="modal">
                        <div class="modal-close">
                            <span class="material-icons">close</span>
                        </div>
                        <div class="modal-body">
                            <div class="chart-wrapper">
                                <div class="container chart" data-size="200" data-value="${this.score}" data-arrow="up"></div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="modal-footer--btn">Restart</div>
                        </div>
                    </div>
                </div>
                `;

                new CaptchaChart()
                this.root.querySelector(".modal-close").addEventListener("click", this.restartGame)
                this.root.querySelector(".modal-footer--btn").addEventListener("click", this.restartGame)
            }
        })

        this.restartGame = () =>{
            location.reload()
        }
        
    }
}

btn.addEventListener("click", () => {
    let captcha = new Captcha(app)
    captcha.updateCaptcha()
})







