import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import StatisticsScreen from './components/StatisticsScreen';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/quiz" element={<QuizScreen />} />
                <Route path="/results" element={<ResultScreen />} />
                <Route path="/statistics" element={<StatisticsScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
