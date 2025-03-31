class MathGame extends BaseGame {
    constructor(difficulty) {
        super(difficulty);
        this.questions = gameTypes.math.difficulties[difficulty].questions;
    }

    start() {
        super.start();
        this.showQuestion();
    }

    showQuestion() {
        if (this.currentQuestion >= this.questions.length) {
            this.endGame();
            return;
        }

        const question = this.questions[this.currentQuestion];
        const main = document.querySelector('.question-card');
        main.innerHTML = `
            <h2>Question ${this.currentQuestion + 1} of ${this.questions.length}</h2>
            <div class="math-question">
                <p>${question.question}</p>
                <input type="number" class="math-input" placeholder="Enter your answer" onkeypress="if(event.key === 'Enter') currentGame.checkAnswer(this.value)">
                <button class="cta-button" onclick="currentGame.checkAnswer(document.querySelector('.math-input').value)">Submit</button>
            </div>
        `;
    }

    checkAnswer(answer) {
        const question = this.questions[this.currentQuestion];
        if (parseInt(answer) === question.answer) {
            this.score += this.getPoints();
            this.playSound('correct');
        } else {
            this.playSound('wrong');
        }
        this.updateScoreDisplay();
        this.currentQuestion++;
        this.showQuestion();
    }
} 