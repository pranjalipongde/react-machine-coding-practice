import { useState } from "react";
import "./App.css";
import questions from "./constants/questions.json";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurretnQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurretnQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurretnQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>Play Quiz</h1>

      {currentQuestion < questions.length && (
        <Questions
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
