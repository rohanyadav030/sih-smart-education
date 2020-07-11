const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "A jet wngine works on principle of conservation of _______",
    choice1: "Linear momentum",
    choice2: "Angular momentum",
    choice3: "Energy mass",
    choice4: "Mass velocity",
    answer: 1
  },
  {
    question:"Bolometer is used to measure _______",
    choice1: "Frequency",
    choice2: "Temperature",
    choice3: "Velocity",
    choice4: "Wavelength",
    answer: 3
  },
  {
    question: "what is the unit of astronomical unit?",
    choice1: "Light year",
    choice2: "Armgstrong",
    choice3: "Webber",
    choice4: "Lux",
    answer: 1
  },
  {
    question: "Which law states thatIf external force acts on a system of bodies, the total linear momentum of the system of bodies remains constant____",
    choice1: "Newton's First Law",
    choice2: "Newton's Second Law",
    choice3: "Newton's Third Law",
    choice4: "Principle of conversartion of linear momentum",
    answer: 4
  },
  {
    question: "which transition are studied by uv spectrometers?",
    choice1:"rotational",
    choice2:"electronic",
    choice3:"nuclear",
    choice4:"vibrational",
    answer: 2
},
{
    question: "which one of the following vitamins is essential for coagulation of blood?",
    choice1: "k",
    choice2: "c",
    choice3: "a",
    choice4: "b1",
    answer: 1
},
{   
    question: "Isomers have the same_____",
    choice1:"structral formula",
    choice2:"chemical properties",
    choice3:"mocular formula",
    choice4:"physical properties",
    answer: 3
},
{
    question: "Heating of rubber with sulphur is known as__________",
    choice1:"Galvanization",
    choice2:"Vulcantion",
    choice3:"Bessemerization",
    choice4:"Sulphonation",
    answer: 2
},
{
    question: "Which of the following pass has been created by the Indus River?",
    choice1:"Baralachala pass",
    choice2:"Rohtas pass",
    choice3:"Nathula pass",
    choice4:"Banihal pass",
    answer:4
},
{
    question: "Which of the following water bodies is the home of lakshadweep?",
    choice1: "Arabian sea",
    choice2: "Bay of Bengal",
    choice3: "Indian ocean",
    choice4: "Atlantic ocean",
    answer:1
},
{
   question: "The highest peak in the Eastern Ghats in_____________",
   choice1:"Anai Mudi",
   choice2:"Mahendragiri",
   choice3:"Kanchenjunga",
   choice4:"Khasi",
   answer:2
},
{
   question:"The balance-sheet is only___________",
   choice1:"An account",
   choice2:"A summary",
   choice3:"A statment",
   choice4:"None of the above",
   answer: 3
},
{
   question:"who introduced the concept of MBO?",
   choice1:"Mary parker",
   choice2:"keith Device",
   choice3:"Peter Drucker",
   choice4:"None of the above",
   answer: 3
},
{
   question:"In 'Direction' who is given importance?",
   choice1:"To machines",
   choice2:"To paper work",
   choice3:"To man",
   choice4:"To production",
   answer: 3
},
{ 
   question:"who is father of scientific Management? ",
   choice1:"Hanry Fayol", 
   choice2:"Elton mayo",
   choice3:"Chester Bernard",
   choice4:"F.W Taylor",
   answer: 4
},
{
   question:"Appointment of a company secretary is made by___________",
   choice1:"Promoters",
   choice2:"Board of Direction",
   choice3:"Debenture holder",
   choice4:"Goverment",
   answer: 2
},
{
   question:"How is profit prior to incorporation treated as?",
   choice1:"Revenue reserve",
   choice2:"Secret reserve",
   choice3:"Captial reserve",
   choice4:"General reserve",
   answer: 3
},
{
   question:"Which of the following is a common form of inequality found in India?",
   choice1:"Colour of skin",
   choice2:"Healthy vs sick",
   choice3:"Caste form",
   choice4:"Cricket player vs football player",
   answer:3
},
{
   question:"who said these words,'....Nothing is more disgraceful for a brave man than to live life devoid of self-respect",
   choice1:"Omprakash valmiki",
   choice2:"Omprakash chauthala",
   choice3:"BR.Ambedkar",
   choice4:"M.K Gandhi",
   answer:3
},
{
   question:"Who is invented periodic table?",
   choice1:"Dmitri Mendelivs",
   choice2:"Antoine Lavoisler",
   choice3:"Dalton",
   choice4:"Newton",
   answer:2
}
];

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 20;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end1.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
