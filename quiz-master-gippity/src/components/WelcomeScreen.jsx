import React from 'react';
import { motion } from 'framer-motion';
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
        <motion.div 
            className="welcome-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Welcome to Quiz Master!</h1>
            <button className="start-btn" onClick={startQuiz}>Start Quiz</button>
            <button className="stats-btn" onClick={viewStatistics}>See My Statistics</button>
        </motion.div>
    );
};

export default WelcomeScreen;
