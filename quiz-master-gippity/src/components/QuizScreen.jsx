import React from 'react';
import { motion } from 'framer-motion';

const QuizScreen = () => {
    return (
        <motion.div
            className="quiz-screen"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Quiz Question</h2>
            <button>End Quiz</button>
        </motion.div>
    );
};

export default QuizScreen;
