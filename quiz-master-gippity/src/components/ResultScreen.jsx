import React from 'react';

const mockResults = {
    correctAnswers: 5,
    totalQuestions: 10,
    category: "General Knowledge",
    type: "Multiple Choice",
    difficulty: "Medium",
    timeTaken: "2m 30s",
    timeLimit: "5m"
};

const ResultScreen = () => {
    const { correctAnswers, totalQuestions, category, type, difficulty, timeTaken } = mockResults;

    return (
        <div className="result-screen">
            {/* General result text */}
            <h2>Thank you for completing this quiz. Here are your results:</h2>

            {/* Result in numbers */}
            <div className="result">
                You answered {correctAnswers} out of {totalQuestions} questions correctly.
            </div>

            {/* Quiz configuration */}
            <div className="quiz-config">
                <p>Category: {category}</p>
                <p>Type: {type}</p>
                <p>Difficulty: {difficulty}</p>
                <p>Time Taken: {timeTaken}</p>
            </div>

            {/* Buttons */}
            <div className="button-group">
                <button className="restart-btn">Restart</button>
                <button className="new-quiz-btn">Choose Another Quiz</button>
            </div>
        </div>
    );
};

export default ResultScreen;
