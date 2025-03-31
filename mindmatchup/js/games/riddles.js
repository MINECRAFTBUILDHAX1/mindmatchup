class RiddlesGame extends BaseGame {
    constructor(difficulty) {
        super(difficulty);
        this.questions = gameTypes.riddles.difficulties[difficulty].questions;
        this.showingHint = false;
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
            <h2>Riddle ${this.currentQuestion + 1} of ${this.questions.length}</h2>
            <p>${question.question}</p>
            <div class="hint-section">
                <button class="hint-button" onclick="currentGame.showHint()">Show Hint</button>
                <div class="hint-display">${this.showingHint ? question.hint : ''}</div>
            </div>
            <div class="answer-section">
                <input type="text" class="answer-input" placeholder="Enter your answer" onkeypress="if(event.key === 'Enter') currentGame.checkAnswer(this.value)">
                <button class="submit-button" onclick="currentGame.checkAnswer(document.querySelector('.answer-input').value)">Submit</button>
            </div>
        `;
    }

    showHint() {
        this.showingHint = true;
        this.showQuestion();
    }

    checkAnswer(answer) {
        const question = this.questions[this.currentQuestion];
        if (answer.toLowerCase() === question.answer.toLowerCase()) {
            this.score += this.getPoints();
            this.playSound('correct');
        } else {
            this.playSound('wrong');
        }
        this.updateScoreDisplay();
        this.currentQuestion++;
        this.showingHint = false;
        this.showQuestion();
    }
} 