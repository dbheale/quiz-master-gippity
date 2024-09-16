import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultScreen = () => {
    const navigate = useNavigate();

    const restartQuiz = () => {
        navigate('/quiz');
    };

    const chooseAnotherQuiz = () => {
        navigate('/');
    };

    return (
        <div className="result-screen">
            <h2>Thank you for completing this quiz!</h2>
            {/* ... */}
            <button onClick={restartQuiz}>Restart Quiz</button>
            <button onClick={chooseAnotherQuiz}>Choose Another Quiz</button>
        </div>
    );
};

export default ResultScreen;
