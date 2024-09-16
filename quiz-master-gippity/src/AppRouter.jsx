import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import StatisticsScreen from './components/StatisticsScreen';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/quiz" element={<QuizScreen />} />
            <Route path="/results" element={<ResultScreen />} />
            <Route path="/statistics" element={<StatisticsScreen />} />
        </Routes>
    );
};

export default AppRouter;
