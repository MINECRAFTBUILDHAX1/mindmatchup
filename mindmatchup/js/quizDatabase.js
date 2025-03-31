const quizDatabase = {
    general: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "What is the capital of France?",
                    options: ["London", "Berlin", "Paris", "Madrid"],
                    correct: 2
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correct: 1
                },
                {
                    question: "What is the largest mammal in the world?",
                    options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                    correct: 1
                }
            ]
        },
        medium: {
            points: 15,
            questions: [
                {
                    question: "Who painted the Mona Lisa?",
                    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                    correct: 2
                },
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Ag", "Au", "Fe", "Cu"],
                    correct: 1
                },
                {
                    question: "Which country invented tea?",
                    options: ["India", "China", "Japan", "England"],
                    correct: 1
                }
            ]
        },
        hard: {
            points: 20,
            questions: [
                {
                    question: "What is the speed of light in meters per second?",
                    options: ["299,792,458", "199,792,458", "399,792,458", "499,792,458"],
                    correct: 0
                },
                {
                    question: "Who wrote 'The Theory of Relativity'?",
                    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
                    correct: 1
                },
                {
                    question: "What is the atomic number of carbon?",
                    options: ["4", "6", "8", "10"],
                    correct: 1
                }
            ]
        }
    },
    math: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "What is 2 + 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 1
                },
                {
                    question: "What is 5 × 3?",
                    options: ["10", "12", "15", "18"],
                    correct: 2
                },
                {
                    question: "What is 10 ÷ 2?",
                    options: ["3", "4", "5", "6"],
                    correct: 2
                }
            ]
        },
        medium: {
            points: 15,
            questions: [
                {
                    question: "What is the square root of 16?",
                    options: ["2", "3", "4", "5"],
                    correct: 2
                },
                {
                    question: "What is 15% of 200?",
                    options: ["20", "25", "30", "35"],
                    correct: 2
                },
                {
                    question: "What is the area of a square with sides of length 5?",
                    options: ["15", "20", "25", "30"],
                    correct: 2
                }
            ]
        },
        hard: {
            points: 20,
            questions: [
                {
                    question: "What is the value of π (pi) to two decimal places?",
                    options: ["3.12", "3.14", "3.16", "3.18"],
                    correct: 1
                },
                {
                    question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
                    options: ["24", "32", "40", "48"],
                    correct: 1
                },
                {
                    question: "What is the sum of the angles in a triangle?",
                    options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
                    correct: 1
                }
            ]
        }
    },
    science: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "What is the chemical symbol for water?",
                    options: ["H2O", "CO2", "O2", "N2"],
                    correct: 0
                },
                {
                    question: "What is the closest planet to the Sun?",
                    options: ["Venus", "Mercury", "Earth", "Mars"],
                    correct: 1
                },
                {
                    question: "What is the largest organ in the human body?",
                    options: ["Heart", "Brain", "Skin", "Liver"],
                    correct: 2
                }
            ]
        },
        medium: {
            points: 15,
            questions: [
                {
                    question: "What is the process by which plants convert light energy into chemical energy?",
                    options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                    correct: 1
                },
                {
                    question: "What is the atomic number of oxygen?",
                    options: ["6", "7", "8", "9"],
                    correct: 2
                },
                {
                    question: "What is the speed of sound in air at room temperature?",
                    options: ["300 m/s", "340 m/s", "400 m/s", "440 m/s"],
                    correct: 1
                }
            ]
        },
        hard: {
            points: 20,
            questions: [
                {
                    question: "What is the name of the force that keeps planets in orbit around the Sun?",
                    options: ["Magnetic force", "Gravitational force", "Nuclear force", "Electromagnetic force"],
                    correct: 1
                },
                {
                    question: "What is the chemical formula for glucose?",
                    options: ["C6H12O6", "C12H22O11", "CH3COOH", "NaCl"],
                    correct: 0
                },
                {
                    question: "What is the process by which a solid turns directly into a gas?",
                    options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
                    correct: 2
                }
            ]
        }
    },
    history: {
        easy: {
            points: 10,
            questions: [
                {
                    question: "Who was the first President of the United States?",
                    options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                    correct: 2
                },
                {
                    question: "In which year did World War II end?",
                    options: ["1943", "1944", "1945", "1946"],
                    correct: 2
                },
                {
                    question: "Who painted the Sistine Chapel ceiling?",
                    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
                    correct: 1
                }
            ]
        },
        medium: {
            points: 15,
            questions: [
                {
                    question: "What was the name of the first human to walk on the Moon?",
                    options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Yuri Gagarin"],
                    correct: 1
                },
                {
                    question: "In which year did the French Revolution begin?",
                    options: ["1776", "1789", "1799", "1804"],
                    correct: 1
                },
                {
                    question: "Who was the first Emperor of China?",
                    options: ["Qin Shi Huang", "Han Wudi", "Tang Taizong", "Kublai Khan"],
                    correct: 0
                }
            ]
        },
        hard: {
            points: 20,
            questions: [
                {
                    question: "What was the name of the first civilization to develop writing?",
                    options: ["Egyptians", "Sumerians", "Greeks", "Romans"],
                    correct: 1
                },
                {
                    question: "In which year did the Berlin Wall fall?",
                    options: ["1987", "1988", "1989", "1990"],
                    correct: 2
                },
                {
                    question: "Who was the first woman to win a Nobel Prize?",
                    options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
                    correct: 0
                }
            ]
        }
    }
}; 