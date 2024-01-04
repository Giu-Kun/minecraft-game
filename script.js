// script.js

import { quizData } from './quiz.js';

let currentQuestion = 0;
let correctAnswers = 0;
let userName;

function startQuiz() {
    userName = document.getElementById('nameInput').value;

    if (userName.trim() === '') {
        alert('Bitte gib deinen Namen ein, um das Quiz zu starten.');
        return;
    }
    document.getElementById('quiz-content').style.display = 'none';

    showQuestion();
}


function showQuestion() {
    const quizContainer = document.getElementById('quiz');
    const questionData = quizData[currentQuestion];

    quizContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options.map(option => `<button onclick="checkAnswer('${option}')">${option}</button>`).join('')}
    `;
}

function checkAnswer(userAnswer) {
    const questionData = quizData[currentQuestion];

    if (userAnswer === questionData.correctAnswer) {
        correctAnswers++;
        showCorrectScreen();
    } else {
        showWrongScreen();
    }
}

function showCorrectScreen() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <h2>Correct. Good Job ${userName}!</h2>
        <p>Remaining Questions: ${quizData.length - (currentQuestion + 1)}</p>
    `;

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        setTimeout(showQuestion, 2000);
    } else {
        setTimeout(showFinalScreen, 2000);
    }
}

function showWrongScreen() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <h2>Wrong! Try again. ${userName}, you can do it!</h2>
    `;

    setTimeout(showQuestion, 2000);
}


function showFinalScreen() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <h2>Herzlichen Glückwunsch ${userName}!</h2>
        <p>Du hast das Minecraft Geburtstags-Quiz mit ${correctAnswers} richtigen Antworten abgeschlossen.</p>
        <p>Dein Preis: [Preis]</p>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Famyknichols.files.wordpress.com%2F2014%2F06%2Fcreeper.png&f=1&nofb=1&ipt=5007172df1d3fe10b1bcf83b14578454e896128478f698d0e878dbc9d952f13d&ipo=images" alt="Creeper Image" id="creeper-image">
        <button onclick="restartQuiz()">Quiz neu starten</button>
    `;

    // Adjust the CSS for the final screen
    const finalScreen = document.getElementById('result-screen');
    finalScreen.style.display = 'block';

    const creeperImage = document.getElementById('creeper-image');
    creeperImage.style.maxWidth = '100%';
    creeperImage.style.height = 'auto';

    // Hide other elements
    document.getElementById('quiz-content').style.display = 'none';
}




function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
}
