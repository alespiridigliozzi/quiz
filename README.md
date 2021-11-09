# JavaScript Trivia Game
[Check out the Live Demo Here](https://alessandrothedev.github.io/quiz/)

![triviaquiz](https://github.com/alessandrothedev/quiz/blob/main/jstriviapreview.png)

## The Design :large_blue_diamond:
This JavaScript Trivia Quiz was designed with a **mobile-first approach**, using a _css-grid_ & _flexbox_.

## The Code :large_orange_diamond:
The quiz uses an `Object` array where we store our data i.e. our questions. Each question is an object with keys of _Question_, an array of _answers_. Each answer array contains 4 different objects where we store our answers, and we use a key _correct_ with a value of `true` for the correct answer and `false` for the remaining answers.

```javascript
const questions = [
    {
        question: 'How many stripes are there on the US flag?',
        answers: [
            {quizAnswer: '13', correct: true},
            {quizAnswer: '11', correct: false},
            {quizAnswer: '15', correct: false},
            {quizAnswer: '51', correct: false}
        ]
    }
```

The questions are shuffled using the `.sort()` and `Math.random()` methods, so that each time the user plays, the order of the questions displayed will change.
