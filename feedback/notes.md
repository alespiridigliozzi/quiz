# Feedback

## Goals

1. A working Game - done

   - 100% It is cool, so many challenging features you have added and have got them to work in the game.
   - Separating the questions is a good touch

2. Practice using Git & Github-flow - done

   - 1 Branches, 12 commits

3. Apply what you are learning - done

   - SCSS, BEM , Classes etc.... So much good stuff

## Specification

- PSEUDOCODE - done

  - I can not see any psuedo code but I can see how you have broke it down.
  - Your code well structured with meaningful function names. This might of how you broke the game down.
  - ^^ Looking at the commits I can see you pseudo code all good.

- Github repo & README.MD - done

  - Repo has been set up perfect
  - You need to add more to the README.md
    - Talk about the project, what was the brief? How long did it take?
    - How do you clone it and set it up?
    - the link to the live site?

- 25 Commits - not done

  - 12 commits so about half way there

- Use click or key press event in JS - done

- Mobile first/Responsive - done

- No tutorials - done

- Link to the project on your portfolio - not sure

## Overall

This is a great game that is really well structured. You have pushed yourself and even though you were not confident with JS you have built a very modular game. To add more questions you just need to update your data file. This is great, I think it just needs some functionality to make it completely polished. 

The styles are great. You can see that you have taken everything we have learned so far and put it into this project. Well everything but testing :P.

## To work on

In terms of functionality you need to add a end to the quiz, otherwise you get stuck in a infinite quizzical loop.

I will list some features you should consider adding. You do not have to add them but you could.

### Features to add

- Remove the question after it has been added -> no duplicate questions

```js
// 20 - 24
nextButton.addEventListener("click", () => {
  // currentQuestion++
  // instead of incrementing through the array remove a question once it has been answered
  shuffledQuestions.shift();
  nextQuestion();
});
```

- End the quiz when answered all the questions

```js
// 20 - 24
nextButton.addEventListener("click", () => {
  shuffledQuestions.shift();
  if (shuffledQuestions.length > 0) {
    // how do you end the game?
    endGame();
  } else {
    nextQuestion();
  }
});
```

- Score?
- Lives? 3 wrong answers and its game over
- Themes? 
    - You can choose different questions
    - You have different data objects for each theme

---
