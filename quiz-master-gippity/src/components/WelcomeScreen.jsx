import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setConfiguration } from '../slices/quizSlice';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.quiz.categories);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const startQuiz = () => {
        const config = {
            category: 9, // Replace with selected category value
            difficulty: 'medium', // Replace with selected difficulty
            type: 'multiple', // Replace with selected type
            amount: 10, // Replace with selected number of questions
        };
        dispatch(setConfiguration(config));
        dispatch(fetchQuestions(config));
        navigate('/quiz');
    };

    return (
        <div>
            <h1>Configure Quiz</h1>
            <select>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
};

export default WelcomeScreen;
