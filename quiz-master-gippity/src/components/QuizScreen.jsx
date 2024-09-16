import React from 'react';

const mockQuestion = {
    question: "What is the capital of France?",
    type: "multiple", // could be "boolean" for true/false
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
    currentQuestion: 1,
    totalQuestions: 5,
    timeLimit: "1m"
};

const QuizScreen = () => {
    const { question, type, options, currentQuestion, totalQuestions, timeLimit } = mockQuestion;

    return (
        <div className="quiz-screen">
            {/* Question text */}
            <h2>{question}</h2>

            {/* Progress bar (text-based for now) */}
            <div className="progress">
                Question {currentQuestion} of {totalQuestions}
            </div>

            {/* Timer */}
            <div className="timer">
                Time remaining: {timeLimit}
            </div>

            {/* Answer buttons */}
            <div className="answers">
                {type === "boolean" ? (
                    <>
                        <button>True</button>
                        <button>False</button>
                    </>
                ) : (
                    options.map((option, index) => (
                        <button key={index}>{option}</button>
                    ))
                )}
            </div>

            {/* End quiz button */}
            <button className="end-quiz">End Quiz</button>
        </div>
    );
};

export default QuizScreen;
