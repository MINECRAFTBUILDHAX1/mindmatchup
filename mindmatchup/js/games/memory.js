class MemoryGame extends BaseGame {
    constructor(difficulty) {
        super(difficulty);
        this.pairs = gameTypes.memory.difficulties[difficulty].pairs;
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.initializeCards();
    }

    initializeCards() {
        const emojis = ['🎮', '🎲', '🎯', '🎨', '🎭', '🎪', '🎟️', '🎠', '🎡', '🎢', '🎣', '🎤', '🎧', '🎨', '🎩', '🎪'];
        for (let i = 0; i < this.pairs; i++) {
            this.cards.push(emojis[i]);
            this.cards.push(emojis[i]);
        }
        this.shuffleCards();
    }

    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    start() {
        super.start();
        const main = document.querySelector('.question-card');
        main.innerHTML = `
            <div class="memory-grid">
                ${this.cards.map((card, index) => `
                    <div class="memory-card" onclick="currentGame.flipCard(${index})">
                        <div class="card-inner">
                            <div class="card-front">?</div>
                            <div class="card-back">${card}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    flipCard(index) {
        if (this.flippedCards.length === 2 || this.flippedCards.includes(index)) return;

        const card = document.querySelectorAll('.memory-card')[index];
        card.classList.add('flipped');
        this.flippedCards.push(index);

        if (this.flippedCards.length === 2) {
            setTimeout(() => this.checkMatch(), 1000);
        }
    }

    checkMatch() {
        const [first, second] = this.flippedCards;
        const cards = document.querySelectorAll('.memory-card');
        const firstCard = cards[first];
        const secondCard = cards[second];

        if (this.cards[first] === this.cards[second]) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            this.matchedPairs++;
            this.score += this.getPoints();
            this.playSound('correct');
            this.updateScoreDisplay();

            if (this.matchedPairs === this.pairs) {
                this.endGame();
            }
        } else {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            this.playSound('wrong');
        }

        this.flippedCards = [];
    }
} 