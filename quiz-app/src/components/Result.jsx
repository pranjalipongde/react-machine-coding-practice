import React from "react";

const Result = ({ userAnwers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnwers.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions
        correctly.
        <span onClick={resetQuiz}>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnwers.index}>
              Q{index + 1}. {question.question}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
