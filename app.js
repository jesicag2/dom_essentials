const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score-container");
const scoreId = document.getElementById("score")
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
        question: "What is opportunity cost?",
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
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    // disabled next button
    nextButton.disabled = true;
    // clears the previos question
    optionsContainer.innerHTML = '';

    // displays current question
    questionContainer.textContent = currentQuestion.question;

    // loops through each option for the current question
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button"); // creates button for option
        optionButton.classList.add("btn", "btn-light")
        optionButton.textContent = option; // sets button text to the option

        // adds event for when a option is clicked
        optionButton.addEventListener("click", () => selectOption(index));
        // adds the option buttons to the option container
        optionsContainer.appendChild(optionButton);
    });
};

function selectOption(selectedIndex) {

    // selects buttons within option container
    const buttons = optionsContainer.querySelectorAll("button");

    // loop through and disable all buttons in option container
    buttons.forEach(button => {
        button.disabled = true;
    });

    // checking if option selected is correct answer
    const correctIndex = quizData[currentQuestionIndex].answer;
    const isCorrect = selectedIndex === correctIndex;

    // highlights correct or incorrect also tracks score
    if (isCorrect) {
        buttons[selectedIndex].classList.replace("btn-light", "btn-success");
        score++;
    } else {
        buttons[selectedIndex].classList.replace("btn-light", "btn-danger");
        // highlight correct answer
        buttons[correctIndex].classList.replace("btn-light", "btn-outline-success");
    };

    // enables next button
    nextButton.disabled = false;
};

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.classList.add("hidden");
        scoreContainer.classList.remove("hidden");
        scoreId.textContent = `You scored a ${score} out of ${quizData.length}`;
    }
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
});

document,addEventListener("DOMContentLoaded", loadQuestion);


