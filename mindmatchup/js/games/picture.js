class PictureGame extends BaseGame {
    constructor(difficulty) {
        super(difficulty);
        this.questions = gameTypes.picture.difficulties[difficulty].questions;
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
            <div class="picture-question">
                <p>${question.question}</p>
                <img src="${question.image}" alt="Question image">
                <div class="options-grid">
                    ${question.options.map((option, index) => `
                        <button class="option-button" onclick="currentGame.checkAnswer(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
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