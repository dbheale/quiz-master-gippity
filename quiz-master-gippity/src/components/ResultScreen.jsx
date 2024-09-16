import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ResultScreen = () => {
    const stats = useSelector((state) => state.stats);
    const navigate = useNavigate();

    const restartQuiz = () => {
        navigate('/quiz');
    };

    const chooseAnotherQuiz = () => {
        navigate('/');
    };

    return (
        <div className="result-screen">
            <h2>Quiz Results</h2>
            <p>
                You answered {stats.totalCorrect} out of {stats.totalQuestions} questions correctly.
            </p>

            <h3>Category Breakdown</h3>
            {Object.entries(stats.categoryStats).map(([category, count], index) => (
                <p key={index}>
                    {category}: {count} questions
                </p>
            ))}

            <h3>Difficulty Breakdown</h3>
            {Object.entries(stats.difficultyStats).map(([difficulty, count], index) => (
                <p key={index}>
                    {difficulty}: {count} questions
                </p>
            ))}

            <h3>Type Breakdown</h3>
            {Object.entries(stats.typeStats).map(([type, count], index) => (
                <p key={index}>
                    {type}: {count} questions
                </p>
            ))}
            <button onClick={restartQuiz}>Restart Quiz</button>
            <button onClick={chooseAnotherQuiz}>Choose Another Quiz</button>
        </div>
    );
};

export default ResultScreen;
