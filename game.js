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
    question: "The clock above reads 10:10 am. How many degrees will the minute hand have turned when the time reaches 11:00 am?",
    choice1: "260",
    choice2: "270",
    choice3: "264",
    choice4: "257",
    answer: 2
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  },
  {
    question: "The formation of coal is explained by:?",
    choice1: "ex-situ theory",
    choice2: "in-situ theory",
    choice3: "molecular theory",
    choice4: "nuclear thoery",
    answer: 2
  },
  {
    question: "It takes MArtin 1/2 hour to get washed and changed before school. It takes him 1/4 of an hour to go downstairs and breakfast.It   takes him 1 and 1/4 hours on the bus to school.How much time does it take Martin to get ready & get to school?",
    choice1:"2hours",
    choice2:"1 1/2",
    choice3:"2 1/2",
    choice4:"1 3/4",
    answer: 1
},
{
    question: "Arun,kartik and mira can do work in 90,30,45 days respectively. If they work together , in how many days will they complete work?",
    choice1: "15",
    choice2: "10",
    choice3: "20",
    choice4: "25",
    answer: 1
},
{   
    question: "The distance light travels in one year is approximately 5,870,000,000 miles. The distance light travels in 100 years is:",
    choice1:"587*10^8 miles",
    choice2:"587*10^-10 miles",
    choice3:"587*10^12 miles",
    choice4:"587*10^-12 miles",
    answer: 2
},
{
    question: "If (0.2)^x=2 & log2=0.3910, then value of x to the nearest tenth is:",
    choice1:"-10.0",
    choice2:"-5.0",
    choice3:"-0.4",
    choice4:"-0.2",
    answer: 3
},
{
    question: "How much water must be added to a bucket which contains 40 litres of milk at the cost price of $3.50 per litre so that cost of milk reduced to $2 per litre ?",
    choice1:"25 litres",
    choice2:"28 litres",
    choice3:"30 litres",
    choice4:"35 litres",
    answer:3
},
{
    question: "The fraction (5x-11)/(2x^2+x-6) was obtained by adding the two fraction A/(x+2) & B/(2x-3). The values of A&B must be respectively",
    choice1: "5x,-11",
    choice2: "-11,5x",
    choice3: "-1,3",
    choice4: "3,-1",
    answer:4
},
{
   question: "A,B,C start a bussiness , each investing $20000.After a math A withdraw $5000,B $4000 & C invested $6000 more.At the end of year  a total profit of $69900 was recorded .What is share of B?",
   choice1:"20500",
   choice2:"21200",
   choice3:"24300",
   choice4:"28300",
   answer:2
},
{
   question:"A man spends 1/4th of his income on food 2/3rd of it on house rent & the remaining income which is rs.630 another commodities , find his house rent",
   choice1:"Rs.5040",
   choice2:"Rs.3520",
   choice3:"Rs.4890",
   choice4:"Rs.5345",
   answer: 1
},
{
   question:"A,B&C togrther can do a work in 8 days if A&B can do it in 20&30 days resp.In how many days c alone can complete it ?",
   choice1:"16",
   choice2:"18",
   choice3:"34",
   choice4:"24",
   answer: 4
},
{
   question:"A single person takes 4 minutes to type a page it from 12 noon to 1:00pm , 1080 pages are to be typed , how many person should be employeed on this job ?",
   choice1:"108",
   choice2:"60",
   choice3:"128",
   choice4:"72",
   answer: 4
},
{ 
   question:"Navneet & Nitin can complete a work in 20 & 25 days resp. They work for Rs.4500.Find their wages? ",
   choice1:"RS.2000,Rs.2500",
   choice2:"RS.2300,Rs.2540",
   choice3:"RS.2500,Rs.2000",
   choice4:"RS.2000,Rs.2344",
   answer: 3
},
{
   question:"Information travels between components on the mother board through",
   choice1:"flash memory",
   choice2:"cmos",
   choice3:"bays",
   choice4:"busses",
   answer: 3
},
{
   question:"the moisture in the environment____?____the oxidation",
   choice1:"increases",
   choice2:"neutralise",
   choice3:"do not change",
   choice4:"decreases",
   answer: 1
},
{
   question:"Energy possesed by a body in a motion is called as____",
   choice1:"kinetic energy",
   choice2:"potential energy",
   choice3:"both a and b",
   choice4:"none of these",
   answer:1
},
{
   question:"what is the scale used for measuring the intensity of the earthquake?",
   choice1:"metric scale",
   choice2:"quake scale",
   choice3:"richter scale",
   choice4:"epicentre scale",
   answer:3
},
{
   question:"______ is the purest form of water obtained by natural distillation",
   choice1:"under ground water",
   choice2:"sea water",
   choice3:"river water",
   choice4:"rain water",
   answer:4
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
    return window.location.assign("end.html");
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
