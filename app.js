const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const quizData = [
    {
        question: "Which examines how individuals, institutions, or society make decisions under conditions of scarcity?",
        options: ["Management", "Economics", "Finance", "Accounting"],
        answer: 1
    },
    {
        question: "When unlimited wants exceed the limited resources available to fulfill those wants.",
        options: ["Efficiency", "Uniqueness", "Scarcity", "Capital"],
        answer: 2
    },
    {
        question: "What is a payment for labor?",
        options: ["Wages", "Taxes", "Rent", "Interest"],
        answer: 0
    },
    {
        question: "Goods are:",
        options: ["Financial", "Human", "Rare", "Tangible"],
        answer: 3
    },
    {
        question: "What entails rational decision making?",
        options: ["Process of ignoring potential outcomes.", "Process of making a pro/con list.", "Method of making random decisions.", "Technique of relying on intuition only."],
        answer: 1
    },
    {
        question: "What is oppurtunity cost?",
        options: ["The money spent on a purchase.", "The price of the product.", "The amount of money earned.", "What you give up when you make a choice."],
        answer: 3
    },
    {
        question: "Services are:",
        options: ["Movable", "Financial", "Intangible", "Tangible"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
// let score = 0;

const currentQuestion = quizData[currentQuestionIndex];

function loadQuestion() {
    // disabled next button
    nextButton.disabled = true;
    // clears the previos question
    optionsContainer.innerHTML = '';

    // displays current question
    questionContainer.textContent = currentQuestion.question;

    // loops through each option for the current question
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button"); // creates cutton for option
        optionButton.classList.add("btn", "btn-secondary", "btn-sm")
        optionButton.textContent = option; // sets button text to the option

        // adds event for when a option is clicked
        optionButton.addEventListener("click", () => selectOption(index));
        // adds the option buttons to the option container
        optionsContainer.appendChild(optionButton);
    });
};

loadQuestion();


