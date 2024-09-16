import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateStats } from '../slices/statsSlice';
import { clearQuizData } from '../slices/quizSlice';

const ResultScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const quizConfig = useSelector((state) => state.quiz.configuration);
    const questions = useSelector((state) => state.quiz.questions);
    const correctAnswers = questions.filter(q => q.correct).length;

    const saveStats = () => {
        const statsData = {
            questions: questions.length,
            correct: correctAnswers,
            category: quizConfig.category,
            difficulty: quizConfig.difficulty,
            type: quizConfig.type,
        };
        dispatch(updateStats(statsData));
    };

    const chooseAnotherQuiz = () => {
        dispatch(clearQuizData());
        saveStats();
        navigate('/');
    };

    return (
        <div>
            <h2>Quiz Results</h2>
            <button onClick={chooseAnotherQuiz}>Choose Another Quiz</button>
        </div>
    );
};

export default ResultScreen;
