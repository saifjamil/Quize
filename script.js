const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false },
      { text: 'Paris', correct: true },
      { text: 'Lisbon', correct: false }
    ]
  },
  {
    question: 'Who is the President of the USA?',
    answers: [
      { text: 'Barack Obama', correct: false },
      { text: 'Donald Trump', correct: false },
      { text: 'Joe Biden', correct: true },
      { text: 'George Bush', correct: false }
    ]
  },
  {
    question: 'Which planet is closest to the Sun?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Mars', correct: false },
      { text: 'Mercury', correct: true },
      { text: 'Earth', correct: false }
    ]
  },
  {
    question: 'In which year did World War I start?',
    answers: [
      { text: '1912', correct: false },
      { text: '1914', correct: true },
      { text: '1916', correct: false },
      { text: '1918', correct: false }
    ]
  },
  {
    question: 'What is the largest ocean on Earth?',
    answers: [
      { text: 'Atlantic Ocean', correct: false },
      { text: 'Indian Ocean', correct: false },
      { text: 'Pacific Ocean', correct: true },
      { text: 'Arctic Ocean', correct: false }
    ]
  },
  {
    question: 'Who wrote "Hamlet"?',
    answers: [
      { text: 'Charles Dickens', correct: false },
      { text: 'Leo Tolstoy', correct: false },
      { text: 'William Shakespeare', correct: true },
      { text: 'Mark Twain', correct: false }
    ]
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    answers: [
      { text: 'Iron', correct: false },
      { text: 'Diamond', correct: true },
      { text: 'Gold', correct: false },
      { text: 'Platinum', correct: false }
    ]
  },
  {
    question: 'Which element has the chemical symbol O?',
    answers: [
      { text: 'Oxygen', correct: true },
      { text: 'Osmium', correct: false },
      { text: 'Oganesson', correct: false },
      { text: 'Ozone', correct: false }
    ]
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: [
      { text: 'Michelangelo', correct: false },
      { text: 'Raphael', correct: false },
      { text: 'Leonardo da Vinci', correct: true },
      { text: 'Pablo Picasso', correct: false }
    ]
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: [
      { text: 'Earth', correct: false },
      { text: 'Saturn', correct: false },
      { text: 'Jupiter', correct: true },
      { text: 'Neptune', correct: false }
    ]
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    answers: [
      { text: 'China', correct: false },
      { text: 'Japan', correct: true },
      { text: 'South Korea', correct: false },
      { text: 'Thailand', correct: false }
    ]
  },
  {
    question: 'Which continent is the Sahara Desert located on?',
    answers: [
      { text: 'Asia', correct: false },
      { text: 'Africa', correct: true },
      { text: 'Australia', correct: false },
      { text: 'South America', correct: false }
    ]
  },
  {
    question: 'Who developed the theory of relativity?',
    answers: [
      { text: 'Isaac Newton', correct: false },
      { text: 'Albert Einstein', correct: true },
      { text: 'Stephen Hawking', correct: false },
      { text: 'Galileo Galilei', correct: false }
    ]
  },
  {
    question: 'What is the capital of Japan?',
    answers: [
      { text: 'Beijing', correct: false },
      { text: 'Seoul', correct: false },
      { text: 'Tokyo', correct: true },
      { text: 'Shanghai', correct: false }
    ]
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    answers: [
      { text: 'Tiger', correct: false },
      { text: 'Elephant', correct: false },
      { text: 'Lion', correct: true },
      { text: 'Gorilla', correct: false }
    ]
  },
  {
    question: 'Which gas is most abundant in the Earth’s atmosphere?',
    answers: [
      { text: 'Oxygen', correct: false },
      { text: 'Nitrogen', correct: true },
      { text: 'Carbon dioxide', correct: false },
      { text: 'Hydrogen', correct: false }
    ]
  },
  {
    question: 'In what year did the Titanic sink?',
    answers: [
      { text: '1910', correct: false },
      { text: '1912', correct: true },
      { text: '1915', correct: false },
      { text: '1918', correct: false }
    ]
  },
  {
    question: 'What is the chemical symbol for gold?',
    answers: [
      { text: 'Au', correct: true },
      { text: 'Ag', correct: false },
      { text: 'Fe', correct: false },
      { text: 'Pb', correct: false }
    ]
  },
  {
    question: 'Which country hosted the 2016 Summer Olympics?',
    answers: [
      { text: 'China', correct: false },
      { text: 'Brazil', correct: true },
      { text: 'Russia', correct: false },
      { text: 'USA', correct: false }
    ]
  },
  {
    question: 'How many continents are there in the world?',
    answers: [
      { text: '5', correct: false },
      { text: '6', correct: false },
      { text: '7', correct: true },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'Who was the first person to walk on the moon?',
    answers: [
      { text: 'Yuri Gagarin', correct: false },
      { text: 'Buzz Aldrin', correct: false },
      { text: 'Neil Armstrong', correct: true },
      { text: 'John Glenn', correct: false }
    ]
  },
  {
    question: 'What is the smallest country in the world by land area?',
    answers: [
      { text: 'Monaco', correct: false },
      { text: 'Vatican City', correct: true },
      { text: 'Malta', correct: false },
      { text: 'San Marino', correct: false }
    ]
  },
  {
    question: 'What is the largest mammal in the world?',
    answers: [
      { text: 'Elephant', correct: false },
      { text: 'Blue whale', correct: true },
      { text: 'Giraffe', correct: false },
      { text: 'Hippopotamus', correct: false }
    ]
  },
  {
    question: 'Which instrument has 88 keys?',
    answers: [
      { text: 'Violin', correct: false },
      { text: 'Piano', correct: true },
      { text: 'Guitar', correct: false },
      { text: 'Harp', correct: false }
    ]
  },
  {
    question: 'In which year did the Berlin Wall fall?',
    answers: [
      { text: '1987', correct: false },
      { text: '1989', correct: true },
      { text: '1991', correct: false },
      { text: '1993', correct: false }
    ]
  },
  {
    question: 'Which ocean is Bermuda located in?',
    answers: [
      { text: 'Indian Ocean', correct: false },
      { text: 'Pacific Ocean', correct: false },
      { text: 'Atlantic Ocean', correct: true },
      { text: 'Arctic Ocean', correct: false }
    ]
  },
  {
    question: 'Who invented the telephone?',
    answers: [
      { text: 'Alexander Graham Bell', correct: true },
      { text: 'Thomas Edison', correct: false },
      { text: 'Nikola Tesla', correct: false },
      { text: 'Guglielmo Marconi', correct: false }
    ]
  },
  {
    question: 'What is the square root of 64?',
    answers: [
      { text: '6', correct: false },
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false }
    ]
  },{
    question: 'Who painted the ceiling of the Sistine Chapel?',
    answers: [
      { text: 'Raphael', correct: false },
      { text: 'Michelangelo', correct: true },
      { text: 'Leonardo da Vinci', correct: false },
      { text: 'Donatello', correct: false }
    ]
  },
  {
    question: 'What is the chemical symbol for Iron?',
    answers: [
      { text: 'Fe', correct: true },
      { text: 'Ir', correct: false },
      { text: 'In', correct: false },
      { text: 'I', correct: false }
    ]
  },
  {
    question: 'Which country is famous for the Great Wall?',
    answers: [
      { text: 'Japan', correct: false },
      { text: 'China', correct: true },
      { text: 'India', correct: false },
      { text: 'Russia', correct: false }
    ]
  },
  {
    question: 'How many degrees are in a circle?',
    answers: [
      { text: '360', correct: true },
      { text: '180', correct: false },
      { text: '90', correct: false },
      { text: '45', correct: false }
    ]
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: [
      { text: 'Mars', correct: true },
      { text: 'Venus', correct: false },
      { text: 'Jupiter', correct: false },
      { text: 'Saturn', correct: false }
    ]
  },
  {
    question: 'What is the hardest naturally occurring mineral?',
    answers: [
      { text: 'Gold', correct: false },
      { text: 'Diamond', correct: true },
      { text: 'Silver', correct: false },
      { text: 'Platinum', correct: false }
    ]
  },
  {
    question: 'Who is known as the Father of Computers?',
    answers: [
      { text: 'Bill Gates', correct: false },
      { text: 'Charles Babbage', correct: true },
      { text: 'Steve Jobs', correct: false },
      { text: 'Alan Turing', correct: false }
    ]
  },
  {
    question: 'What is the boiling point of water?',
    answers: [
      { text: '100°C', correct: true },
      { text: '90°C', correct: false },
      { text: '110°C', correct: false },
      { text: '80°C', correct: false }
    ]
  },
  {
    question: 'Which element is a noble gas?',
    answers: [
      { text: 'Oxygen', correct: false },
      { text: 'Helium', correct: true },
      { text: 'Nitrogen', correct: false },
      { text: 'Carbon', correct: false }
    ]
  },
  {
    question: 'What is the largest bone in the human body?',
    answers: [
      { text: 'Femur', correct: true },
      { text: 'Skull', correct: false },
      { text: 'Humerus', correct: false },
      { text: 'Spine', correct: false }
    ]
  },
  {
    question: 'Who invented the lightbulb?',
    answers: [
      { text: 'Thomas Edison', correct: true },
      { text: 'Nikola Tesla', correct: false },
      { text: 'Alexander Graham Bell', correct: false },
      { text: 'Benjamin Franklin', correct: false }
    ]
  },
  {
    question: 'Which country won the FIFA World Cup in 2018?',
    answers: [
      { text: 'Brazil', correct: false },
      { text: 'France', correct: true },
      { text: 'Germany', correct: false },
      { text: 'Argentina', correct: false }
    ]
  },
  {
    question: 'What is the powerhouse of the cell?',
    answers: [
      { text: 'Nucleus', correct: false },
      { text: 'Mitochondria', correct: true },
      { text: 'Ribosome', correct: false },
      { text: 'Golgi Apparatus', correct: false }
    ]
  },
  {
    question: 'Who was the first woman to win a Nobel Prize?',
    answers: [
      { text: 'Marie Curie', correct: true },
      { text: 'Florence Nightingale', correct: false },
      { text: 'Mother Teresa', correct: false },
      { text: 'Rosalind Franklin', correct: false }
    ]
  },
  {
    question: 'What is the capital of Canada?',
    answers: [
      { text: 'Toronto', correct: false },
      { text: 'Ottawa', correct: true },
      { text: 'Montreal', correct: false },
      { text: 'Vancouver', correct: false }
    ]
  },
  {
    question: 'Which planet is known as the Morning Star?',
    answers: [
      { text: 'Mars', correct: false },
      { text: 'Venus', correct: true },
      { text: 'Mercury', correct: false },
      { text: 'Jupiter', correct: false }
    ]
  },
  {
    question: 'Who discovered penicillin?',
    answers: [
      { text: 'Louis Pasteur', correct: false },
      { text: 'Alexander Fleming', correct: true },
      { text: 'Marie Curie', correct: false },
      { text: 'Joseph Lister', correct: false }
    ]
  },
  {
    question: 'How many planets are in our solar system?',
    answers: [
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'Who is known as the King of Pop?',
    answers: [
      { text: 'Elvis Presley', correct: false },
      { text: 'Michael Jackson', correct: true },
      { text: 'Prince', correct: false },
      { text: 'Freddie Mercury', correct: false }
    ]
  },
  {
    question: 'Which river flows through Egypt?',
    answers: [
      { text: 'Amazon', correct: false },
      { text: 'Nile', correct: true },
      { text: 'Danube', correct: false },
      { text: 'Ganges', correct: false }
    ]
  },
  {
    question: 'What is the longest bone in the human body?',
    answers: [
      { text: 'Tibia', correct: false },
      { text: 'Femur', correct: true },
      { text: 'Humerus', correct: false },
      { text: 'Fibula', correct: false }
    ]
  },
  {
    question: 'What is the capital city of Australia?',
    answers: [
      { text: 'Sydney', correct: false },
      { text: 'Melbourne', correct: false },
      { text: 'Canberra', correct: true },
      { text: 'Perth', correct: false }
    ]
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    answers: [
      { text: 'J.D. Salinger', correct: false },
      { text: 'Harper Lee', correct: true },
      { text: 'F. Scott Fitzgerald', correct: false },
      { text: 'Mark Twain', correct: false }
    ]
  },
  {
    question: 'What is the most abundant gas in the Earth’s atmosphere?',
    answers: [
      { text: 'Oxygen', correct: false },
      { text: 'Nitrogen', correct: true },
      { text: 'Carbon Dioxide', correct: false },
      { text: 'Helium', correct: false }
    ]
  },
  {
    question: 'Which famous scientist introduced the theory of evolution?',
    answers: [
      { text: 'Charles Darwin', correct: true },
      { text: 'Gregor Mendel', correct: false },
      { text: 'Isaac Newton', correct: false },
      { text: 'Albert Einstein', correct: false }
    ]
  },
  {
    question: 'What is the main ingredient in guacamole?',
    answers: [
      { text: 'Tomato', correct: false },
      { text: 'Avocado', correct: true },
      { text: 'Onion', correct: false },
      { text: 'Garlic', correct: false }
    ]
  },
  {
    question: 'Which continent is the country of Brazil located in?',
    answers: [
      { text: 'North America', correct: false },
      { text: 'South America', correct: true },
      { text: 'Europe', correct: false },
      { text: 'Asia', correct: false }
    ]
  },
  {
    question: 'What is the chemical formula for water?',
    answers: [
      { text: 'CO2', correct: false },
      { text: 'H2O', correct: true },
      { text: 'O2', correct: false },
      { text: 'CH4', correct: false }
    ]
  },
  {
    question: 'Which country is home to the kangaroo?',
    answers: [
      { text: 'New Zealand', correct: false },
      { text: 'Australia', correct: true },
      { text: 'South Africa', correct: false },
      { text: 'Canada', correct: false }
    ]
  }
];
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let score = 0;

// Array of questions with answers


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    nextButton.style.display = 'none'; // Hide the next button initially
    showQuestion();
}

function showQuestion() {
    resetState(); // Function to clear previous answers
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer));
        answerButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none'; // Hide the next button after each question
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild); // Remove old answer buttons
    }
}

function selectAnswer(button, answer) {
    if (answer.correct) {
        button.classList.add('correct'); // Highlight correct answer in green
        score++; // Increase score if the answer is correct
    } else {
        button.classList.add('wrong'); // Highlight wrong answer in red
    }

    // Disable all answer buttons after selection
    Array.from(answerButton.children).forEach(btn => {
        btn.disabled = true;
        // Highlight the correct answer in green even if the user selected the wrong one
        if (questions[currentQuestionIndex].answers.find(a => a.correct).text === btn.innerHTML) {
            btn.classList.add('correct');
        }
    });

    nextButton.style.display = 'block'; // Show the next button
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Restart';
    nextButton.style.display = 'block';
    nextButton.removeEventListener('click', nextQuestion);
    nextButton.addEventListener('click', startQuiz);
}

// Start the quiz when the page loads
startQuiz();

