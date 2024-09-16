import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, clearQuizData } from '../slices/quizSlice';
import { useNavigate } from 'react-router-dom';

const ResultScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const config = useSelector((state) => state.quiz.configuration);

    const restartQuiz = () => {
        dispatch(fetchQuestions(config));
        navigate('/quiz');
    };

    const chooseAnotherQuiz = () => {
        dispatch(clearQuizData());
        navigate('/');
    };

    return (
        <div>
            <h2>Quiz Results</h2>
            <button onClick={restartQuiz}>Restart Quiz</button>
            <button onClick={chooseAnotherQuiz}>Choose Another Quiz</button>
        </div>
    );
};

export default ResultScreen;
