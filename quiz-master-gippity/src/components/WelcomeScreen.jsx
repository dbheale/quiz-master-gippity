import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate('/quiz');
    };

    const viewStatistics = () => {
        navigate('/statistics');
    };

    return (
        <div className="welcome-screen">
            <h1>Welcome to Quiz Master!</h1>
            {/* ... */}
            <button className="start-btn" onClick={startQuiz}>Start Quiz</button>
            <button className="stats-btn" onClick={viewStatistics}>See My Statistics</button>
        </div>
    );
};

export default WelcomeScreen;
