const questions = [
    {
        question: "¿Quién era Rubén Darío?",
        options: ["Un matemático", "Un revolucionario político", "Un poeta nicaragüense"],
        answer: 2
    },
    {
        question: "¿Cuándo nació y murió Rubén Darío?",
        options: ["1876-1950", "1867-1916", "1800-1880"],
        answer: 1
    },
    {
        question: "¿Cuáles son los 3 libros que publicó Rubén Darío?",
        options: ["El Quijote Azul Prosas profanas", "Azul Prosas profanas Cantos de vida y esperanza", "Los miserables La Odisea Azul"],
        answer: 1
    },
    {
        question: "¿A los cuantos años aprendió a leer Rubén Darío?",
        options: ["A los tres años", "A los diez años", "A los cinco años"],
        answer: 0
    },
    {
        question: "¿Quiénes eran los padres de Rubén Darío?",
        options: ["Manuel García y Rosa Sarmiento", "Pedro Darío y Ana Márquez", "Carlos Ruiz y Julia Salinas"],
        answer: 0
    },
    {
        question: "¿Cuál era el nombre completo de Rubén Darío?",
        options: ["José Rubén Gutiérrez", "Félix Rubén García Sarmiento", "Rubén Antonio Pérez"],
        answer: 1
    },
    {
        question: "¿Quién es el padre del modernismo?",
        options: ["Rubén Darío", "Pablo Neruda", "Gabriel García Márquez"],
        answer: 0
    },
    {
        question: "¿Qué extensión territorial tiene Nicaragua?",
        options: ["300000 km²", "130373 km²", "50000 km²"],
        answer: 1
    },
    {
        question: "¿Qué forma tiene el mapa de Nicaragua?",
        options: ["Cuadrada", "Triangular", "Circular"],
        answer: 1
    },
    {
        question: "¿Cuántos departamentos y regiones autónomas tiene Nicaragua?",
        options: ["5 departamentos y 2 regiones", "15 departamentos y 2 regiones", "20 departamentos y 3 regiones"],
        answer: 1
    },
    {
        question: "¿Cuál fue la primera capital de Nicaragua?",
        options: ["León", "Masaya", "Managua"],
        answer: 0
    },
    {
        question: "¿Cuál es la capital de Nicaragua actualmente?",
        options: ["Managua", "León", "Granada"],
        answer: 0
    },
    {
        question: "¿Cuál es la ciudad más antigua de Nicaragua?",
        options: ["Granada", "Managua", "Estelí"],
        answer: 0
    },
    {
        question: "¿Cuántos municipios tiene Nicaragua?",
        options: ["50 municipios", "153 municipios", "100 municipios"],
        answer: 1
    },
    {
        question: "¿Cuántos volcanes tiene Nicaragua?",
        options: ["30 volcanes", "50 volcanes", "5 volcanes"],
        answer: 1
    },
    {
        question: "¿Cuántos lagos tiene Nicaragua?",
        options: ["50 lagos", "10 lagos", "2 lagos importantes"],
        answer: 2
    },
    {
        question: "¿Cuál es el volcán activo más famoso de Nicaragua?",
        options: ["Telica", "Concepción", "Masaya"],
        answer: 2
    },
    {
        question: "¿En qué lago ubica la isla de Ometepe?",
        options: ["Lago de Nicaragua", "Lago Xolotlán", "Lago Titicaca"],
        answer: 0
    },
    {
        question: "¿Cuál es el instrumento musical más característico de Nicaragua?",
        options: ["Guitarra", "Marimba", "Violín"],
        answer: 1
    },
    {
        question: "¿Cuál es el volcán más alto de Nicaragua?",
        options: ["Mombacho", "San Cristóbal", "Cosigüina"],
        answer: 1
    },
    {
        question: "¿Quién fue el pirata que fundó la ciudad de Granada?",
        options: ["No fue un pirata", "Henry Morgan", "William Dampier"],
        answer: 0
    },
    {
        question: "¿Cuándo se firmó el acta de la independencia?",
        options: ["1812", "1821", "1900"],
        answer: 1
    },
    {
        question: "¿Cuándo ocurrió la batalla de San Jacinto?",
        options: ["1821", "14 de septiembre de 1856", "1900"],
        answer: 1
    },
    {
        question: "¿Dónde está ubicada la hacienda San Jacinto?",
        options: ["En el departamento de Managua", "En León", "En Granada"],
        answer: 0
    },
    {
        question: "¿Cuál de estas danzas es originaria de Nicaragua?",
        options: ["Jarabe tapatío", "El Güegüense", "La cueca"],
        answer: 1
    },
    {
        question: "¿Qué evento histórico marcó el inicio de la Revolución Sandinista?",
        options: ["La firma de la independencia", "El asesinato de Pedro Joaquín Chamorro", "La batalla de San Jacinto"],
        answer: 1
    },
    {
        question: "¿En qué continente se encuentra Nicaragua?",
        options: ["Asia", "América", "Europa"],
        answer: 1
    },
    {
        question: "¿Cuántos años está cumpliendo Granada actualmente?",
        options: ["100 años", "500 años", "200 años"],
        answer: 1
    },
    {
        question: "¿En qué mes se celebra la festividad de la Virgen María?",
        options: ["Noviembre", "Diciembre", "Enero"],
        answer: 1
    },
    {
        question: "¿Cuál fue el primer presidente de Nicaragua?",
        options: ["Anastasio Somoza", "Fruto Chamorro", "Rubén Darío"],
        answer: 1
    },
    {
        question: "¿Cuál es la comida típica elaborada del maíz?",
        options: ["Tamal", "Tortilla", "Nacatamal"],
        answer: 2
    },
    {
        question: "¿Cuál bebida típica es elaborada de maíz?",
        options: ["Horchata", "Pinolillo", "Cerveza"],
        answer: 1
    },
    {
        question: "¿Cuáles son los símbolos patrios de Nicaragua?",
        options: ["Bandera escudo himno nacional", "Moneda volcán playa", "Flor comida canción"],
        answer: 0
    },
    {
        question: "¿Cuáles son los símbolos nacionales de Nicaragua?",
        options: ["Sombrero camisa blanca", "Ave guardabarranco árbol de madroño flor sacuanjoche", "Caña de azúcar café guitarra"],
        answer: 1
    },
    {
        question: "¿En qué año se encontraron los restos fósiles en el centro paleontológico “El bosque“?",
        options: ["2007", "1995", "2020"],
        answer: 0
    },
    {
        question: "¿Cómo surgió el güegüense o Macho Ratón?",
        options: ["Como una obra teatral mestiza de la época colonial", "Como una canción tradicional", "Como una novela"],
        answer: 0
    },
    {
        question: "¿Cuál es el origen de los Nicaragüenses?",
        options: ["Mayas", "Mezcla indígena española y africana", "Aztecas"],
        answer: 1
    },
    {
        question: "¿Quiénes colonizaron Nicaragua?",
        options: ["Ingleses", "Españoles", "Franceses"],
        answer: 1
    },
    {
        question: "¿Quién era Augusto Cesar Sandino?",
        options: ["Un líder revolucionario nicaragüense", "Un pintor", "Un explorador"],
        answer: 0
    },
    {
        question: "¿Pueblo Nuevo es?",
        options: ["El pueblo de las güirilas", "El pueblo de las montucas", "El pueblo del pan"],
        answer: 1
    },
    {
        question: "¿Cuál es el deporte rey en Nicaragua?",
        options: ["Baloncesto", "Béisbol", "Fútbol"],
        answer: 1
    },
    {
        question: "¿Quién fue el mayor exponente del boxeo en Nicaragua?",
        options: ["Alexis Argüello", "Ricardo Mayorga", "Román “Chocolatito” González"],
        answer: 0
    },
    {
        question: "¿Cuál es el estadio más grande de Nicaragua?",
        options: ["Estadio Nacional de Fútbol", "Estadio Dennis Martínez", "Estadio Roberto Clemente"],
        answer: 1
    },
    {
        question: "¿Equipo más emblemático del béisbol de Nicaragua?",
        options: ["Dantos", "Los Indios del Bóer", "León"],
        answer: 1
    },
    {
        question: "¿Máximo ganador de campeonatos de béisbol en Nicaragua?",
        options: ["Granada", "León", "Matagalpa"],
        answer: 1
    },
    {
        question: "¿Cuál es la obra literaria declarada patrimonio de la humanidad?",
        options: ["Azul", "El Güegüense", "Prosas profanas"],
        answer: 1
    },
    {
        question: "¿Cuáles son las ciudades más viejas del continente americano?",
        options: ["Granada y León", "Managua y Matagalpa", "Estelí y Jinotega"],
        answer: 0
    },
    {
        question: "¿Cuál es el único país que tiene tiburones de agua dulce?",
        options: ["Honduras", "Nicaragua", "Costa Rica"],
        answer: 1
    },
    {
        question: "¿Cuál fue la primera ciudad bombardeada con aviones en América?",
        options: ["Managua", "Ocotal", "La Habana"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let selectedQuestions = [];

const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');
const backgroundMusic = new Audio('background.mp3'); // Sonido de fondo

backgroundMusic.loop = true; // Reproducir en bucle
backgroundMusic.volume = 0.2; // Atenuar el volumen

function startQuiz() {
    const username = document.getElementById('username').value;
    if (username.trim() === "") {
        alert("Por favor introduce tu nombre.");
        return;
    }
    selectedQuestions = getRandomQuestions(questions, 10);
    document.querySelector('.container').style.display = 'none';
    document.getElementById('question-box').style.display = 'block';
    document.getElementById('options-container').style.display = 'flex';
    document.getElementById('progress-container').style.display = 'block';
    backgroundMusic.play(); // Iniciar la música de fondo
    updateProgress();
    showQuestion();
}

function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function showQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        const questionBox = document.getElementById('question-box');
        questionBox.innerHTML = `<h2>${selectedQuestions[currentQuestionIndex].question}</h2>`;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        selectedQuestions[currentQuestionIndex].options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option-button';
            optionButton.innerText = option;
            optionButton.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(optionButton);
        });

        updateProgress();
    } else {
        showResults();
    }
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progressPercentage = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${selectedQuestions.length}`;
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === selectedQuestions[currentQuestionIndex].answer) {
        correctAnswers++;
        correctSound.play();  // Sonido correcto
    } else {
        wrongSound.play();  // Sonido incorrecto
    }
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    const score = Math.floor((correctAnswers / selectedQuestions.length) * 100);
    document.getElementById('question-box').innerHTML = `<h2>Tu puntuación fue: ${score}%</h2>`;
    document.getElementById('options-container').innerHTML = `
        <button class="option-button" onclick="location.reload()">Reiniciar quiz</button>
    `;

    const username = document.getElementById('username').value;
    const teacherEmail = document.getElementById('teacher-email').value;


    sendResultsByEmail(username, score, teacherEmail);
}

function sendResultsByEmail(name, score, teacherEmail) {
    const templateParams = {
        student_name: name,
        score: score,
        teacher_email: teacherEmail
    };

    emailjs.send('service_hsiujjo', 'template_4f10a09', templateParams)
        .then(function(response) {
           console.log('Correo enviado con éxito', response.status, response.text);
        }, function(error) {
           console.log('Error al enviar el correo', error);
        });
}

