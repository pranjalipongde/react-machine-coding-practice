const Questions = ({ question, onAnswerClick = () => {} }) => {
  return (
    <div className="questions">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((option) => {
          return (
            <li key={option.answerText}>
              <button onClick={() => onAnswerClick(option.isCorrect)}>
                {option.answerText}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Questions;
