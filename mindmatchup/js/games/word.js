class WordGame extends BaseGame {
    constructor(difficulty) {
        super(difficulty);
        this.words = gameTypes.word.difficulties[difficulty].words;
    }

    start() {
        super.start();
        this.showWord();
    }

    showWord() {
        if (this.currentQuestion >= this.words.length) {
            this.endGame();
            return;
        }

        const word = this.words[this.currentQuestion];
        const main = document.querySelector('.question-card');
        main.innerHTML = `
            <h2>Word ${this.currentQuestion + 1} of ${this.words.length}</h2>
            <div class="word-scramble">
                <p>Unscramble the word:</p>
                <div class="scrambled-word">${word.scrambled}</div>
                <input type="text" class="word-input" placeholder="Enter your answer" onkeypress="if(event.key === 'Enter') currentGame.checkAnswer(this.value)">
                <button class="cta-button" onclick="currentGame.checkAnswer(document.querySelector('.word-input').value)">Submit</button>
            </div>
        `;
    }

    checkAnswer(answer) {
        const word = this.words[this.currentQuestion];
        if (answer.toLowerCase() === word.word.toLowerCase()) {
            this.score += this.getPoints();
            this.playSound('correct');
        } else {
            this.playSound('wrong');
        }
        this.updateScoreDisplay();
        this.currentQuestion++;
        this.showWord();
    }
} 