// quiz.js

const quizData = [
    {
        question: 'Wie viele Blöcke gibt es in einem Minecraft-Stack?',
        options: ['32', '64', '128'],
        correctAnswer: '64'
    },
    {
        question: 'Aus welchem Material muss man einen Craftingtable craften?',
        options: ['Holzbretter', 'Eisenbarren', 'Stein', 'Obsidian'],
        correctAnswer: 'Holzbretter'
    },
    {
        question: 'Welcher Block wird benötigt, um ins Nether zu gelangen?',
        options: ['Enderperle', 'Obsidian', 'Redstone', 'Diamantblock'],
        correctAnswer: 'Obsidian'
    },

    {
        question: 'Wie nennt man den Endboss in Minecraft?',
        options: ['Enderman', 'Enderdrache', 'Herobrine', 'Illager-König'],
        correctAnswer: 'Enderdrache'
    },
    {
        question: 'Welches Element wird benötigt, um Gegenstände am Enchantingtable zu verzaubern?',
        options: ['Lapislazuli', 'Diamanten', 'Goldbarren', 'Redstone'],
        correctAnswer: 'Lapislazuli'
    },

    {
        question: 'Wie heißt der standardmäßige Spielercharakter in Minecraft?',
        options: ['Steve', 'Alex', 'Herobrine', 'Notch'],
        correctAnswer: 'Steve'
    },

    {
        question: 'Welche der folgenden Figuren ist das Gesicht von Minecraft?',
        options: ['Alex', 'Enderman', 'Creeper', 'Zombie'],
        correctAnswer: 'Creeper'
    },
    {
        question: 'Eine Legende besagt, dass ein mysteriöser Charakter namens ______ im Spiel existiert!',
        options: ['Herobrine', 'Vogelman', 'Null', 'Slenderman'],
        correctAnswer: 'Herobrine'
    },


    {
        question: 'Was ist ein Wort welches der Enderman (sehr verzerrt) sagt?',
        options: ['Enderperle', 'Apfel', 'Baum', 'Hello'],
        correctAnswer: 'Hello'
    },

    {
        question: 'Welcher Entwickler hat Minecraft ursprünglich erschaffen?',
        options: ['Notch', 'Arazhul_HD', 'Gronkh', 'Microsoft'],
        correctAnswer: 'Notch'
    },
    {
        question: 'Wie nennt man den Endboss vom Nether?',
        options: ['Wither', 'Enderdrache', 'Illager-König', 'Golem'],
        correctAnswer: 'Wither'
    },
    {
        question: 'Welcher Block wird benötigt, um einen Golem in Minecraft zu erschaffen?',
        options: ['Diamantblöcke', 'Eisenblöcke', 'Goldblöcke', 'Obsidian'],
        correctAnswer: 'Eisenblöcke'
    },


    {
        question: 'Wovor haben Enderman angst?',
        options: ['Katzen', 'Kartoffeln', 'Kürbis', 'Schnee'],
        correctAnswer: 'Kürbis'
    },
    {
        question: 'Welche der folgenden Kreaturen kommen nicht in der Oberwelt natürlich vor?',
        options: ['Villager', 'Zombies', 'Enderman', 'Piglins'],
        correctAnswer: 'Piglins'
    },

    {
        question: 'Welche der folgenden Ressourcen ist nicht im Nether zu finden?',
        options: ['Glowstone Dust', 'Quarz', 'Cobblestone', 'Magma Block'],
        correctAnswer: 'Cobblestone'
    },
    {
        question: 'Was passiert, wenn ein Enderman direkt in die Augen sieht?',
        options: ['Er teleportiert sich', 'Er wird aggressiv', 'Er verschwindet', 'Er wird friedlich'],
        correctAnswer: 'Er wird aggressiv'
    },

    {
        question: 'Wie nennt man die fliegenden Kreaturen, die im Nether vorkommen?',
        options: ['Drachen', 'Ghast', 'Enderdrachen', 'Wächter'],
        correctAnswer: 'Ghast'
    },

    {
        question: 'Wofür benötigt man 3 Fäden und 3 Stöcke ?',
        options: ['Angel', 'Schaufel', 'Bogen', 'Den magischen Mega Käsestab'],
        correctAnswer: 'Bogen'
    },
    {
        question: 'Wie nennt man die aggressive Kreatur, die im Nether vorkommt und mit Feuer angreift?',
        options: ['Wächter', 'Magma Cube', 'Blaze', 'Wither'],
        correctAnswer: 'Blaze'
    },

    {
        question: 'Wie nennt man die speziellen Villager, die in den Dörfern Fleischhandel treiben?',
        options: ['Butcher', 'Illager', 'Priester', 'Schmied'],
        correctAnswer: 'Butcher'
    },

    {
        question: 'Welcher Block wird benötigt, um Enderaugen zu craften?',
        options: ['Blaze Powder', 'Endstein', 'Obsidian', 'Endermantränen'],
        correctAnswer: 'Blaze Powder'
    },
    {
        question: 'Welche Kreaturen kann man mit Knochen zähmen?',
        options: ['Skellette', 'Wölfe', 'Eisengolems', 'Ozelots'],
        correctAnswer: 'Wölfe'
    },


    {
        question: 'Was ist die Hauptnahrungsquelle für Villager?',
        options: ['Karotten', 'Brot', 'Zombiefleisch', 'Fleisch'],
        correctAnswer: 'Brot'
    },

    {
        question: 'Wie nennt man die fliegenden Kreaturen die erscheinen wenn man nicht Schläft?',
        options: ['Phantom', 'Herobrine', 'Wächter', 'Schwebender Augapfel'],
        correctAnswer: 'Phantom'
    },


    {
        question: 'Welcher Block wird benötigt, um einen Ofen zu craften?',
        options: ['Holzbretter', 'Eisenbarren', 'Cobblestone', 'Redstone'],
        correctAnswer: 'Cobblestone'
    },
    {
        question: 'Welches Werkzeug wird benötigt, einen Kürbis zu schnitzen?',
        options: ['Axt', 'Schwert', 'Scherre', 'Schaufel'],
        correctAnswer: 'Scherre'
    },
    {
        question: 'Wie nennt man die Biome mit schneebedecktem Boden und Tannenbäumen?',
        options: ['Desert', 'Taubenschwanzwald', 'Ocean', 'Taiga'],
        correctAnswer: 'Taiga'
    },


    {
        question: 'Welches Biom ist bekannt für seine riesigen Pilze und Pilzkuh?',
        options: ['Taubenschwanzwald', 'Mushroomisland', 'Mushroomcave', 'Magic Forest'],
        correctAnswer: 'Mushroomisland'
    },
    // Add more questions here
];



let currentQuestion = 0;
let correctAnswers = 0;
let userName;

function startQuiz() {
    userName = document.getElementById('nameInput').value;

    if (userName.trim() === '') {
        alert('Please enter your name to start the quiz.');
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
        setTimeout(showQuestion, 1000);
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
        <p>Dein Preis: Ein Minecraft Account</p>
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
