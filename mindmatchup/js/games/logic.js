class LogicGame extends BaseGame {
    constructor(difficulty) {
        super(difficulty);
        this.questions = gameTypes.logic.difficulties[difficulty].questions;
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
            <p>${question.question}</p>
            <div class="options-grid">
                ${question.options.map((option, index) => `
                    <button class="option-button" onclick="currentGame.checkAnswer(${index})">
                        ${option}
                    </button>
                `).join('')}
            </div>
        `;
    }

    checkAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestion];
        if (selectedIndex === question.correct) {
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