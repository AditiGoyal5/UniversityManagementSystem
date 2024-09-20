import { useState } from 'react';

export default function MultiStepQuiz() {
  
  const questions = [
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      options: [
        "<script href='script.js'></script>",
        "<script name='script.js'></script>",
        "<script src='script.js'></script>",
        "<script link='script.js'></script>"
      ],
      answer: "<script src='script.js'></script>"
    },
    {
      question: "How do you write 'Hello World' in an alert box in JavaScript?",
      options: [
        "alert('Hello World');",
        "msg('Hello World');",
        "alertBox('Hello World');",
        "msgBox('Hello World');"
      ],
      answer: "alert('Hello World');"
    },
    {
      question: "Which built-in method combines the text of two strings and returns a new string?",
      options: [
        "append()",
        "concat()",
        "attach()",
        "combine()"
      ],
      answer: "concat()"
    },
    {
      question: "How do you declare a JavaScript variable?",
      options: [
        "v carName;",
        "variable carName;",
        "var carName;",
        "string carName;"
      ],
      answer: "var carName;"
    },
    {
      question: "Which of the following is not a reserved word in JavaScript?",
      options: [
        "interface",
        "throws",
        "program",
        "short"
      ],
      answer: "program"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);  

  const handleOptionChange = (option) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = option;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let totalScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        totalScore += 10;
      }
    });
    setScore(totalScore);
    setQuizSubmitted(true);  // Set quiz as submitted
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">JavaScript Quiz</h1>

        {/* Only display the quiz if it has not been submitted */}
        {!quizSubmitted ? (
          <div>
            {/* Display current question */}
            <h2 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h2>
            <div className="mb-4">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option}
                      checked={selectedAnswers[currentQuestion] === option}
                      onChange={() => handleOptionChange(option)}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 disabled:bg-gray-300"
              >
                Previous
              </button>

              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        ) : (
          // Display score and celebratory image after quiz is submitted
          <div className="mt-6 text-center">
            <img
              src="https://clipart-library.com/image_gallery2/Fireworks-Free-PNG-Image.png"
              alt="Fireworks"
              className="w-48 mx-auto mb-4"
            />
            <h2 className="text-xl font-bold">Your Score: {score} / {questions.length * 10}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
