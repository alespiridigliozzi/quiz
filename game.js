import { questions } from "./questions/questions.js";

const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const questionsContainer = document.getElementById("questions__container");
const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers__container");
let shuffledQuestions;
let currentQuestion;

const startQuiz = () => {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  questionsContainer.classList.remove("hide");
  nextQuestion();
};

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  // currentQuestion++
  shuffledQuestions.shift();
  nextQuestion();
});

const nextQuestion = () => {
  reset();
  showQuestion(shuffledQuestions[currentQuestion]);
};

const showQuestion = qst => {
  questionElement.innerText = qst.question;
  qst.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.quizAnswer;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
};

const reset = () => {
  nextButton.classList.add("hide");
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }
};

const selectAnswer = e => {
  const selectedAnswer = e.target;
  const correct = selectedAnswer.dataset.correct;
  setStatusClass(selectedAnswer, correct);
  Array.from(answersContainer.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Start Again!";
    startButton.classList.remove("hide");
  }
};

const clearStatus = element => {
  element.classList.remove("correctAnswer");
  element.classList.remove("wrong");
};

const setStatusClass = (element, correct) => {
  clearStatus(element);
  if (correct) {
    element.classList.add("correctAnswer");
  } else {
    element.classList.add("wrong");
  }
};
