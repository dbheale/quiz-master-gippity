import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setConfiguration, fetchQuestions } from '../slices/quizSlice';  // Make sure to import fetchQuestions
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.quiz.categories);
    const [numberOfQuestions, setNumberOfQuestions] = useState(5);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
    const [selectedType, setSelectedType] = useState('multiple');
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const startQuiz = () => {
        const config = {
            category: selectedCategory,
            difficulty: selectedDifficulty,
            type: selectedType,
            amount: numberOfQuestions,
        };
        dispatch(setConfiguration(config));
        dispatch(fetchQuestions(config)); // Fetch questions using the selected config
        navigate('/quiz');  // Navigate to the quiz screen
    };

    const viewStatistics = () => {
        navigate('/statistics');
    };

    return (
        <div className="welcome-screen">
            <h1>Welcome to Quiz Master!</h1>

            {/* Number of Questions Input */}
            <label>
                Number of Questions:
                <input
                    type="number"
                    value={numberOfQuestions}
                    min={5}
                    max={15}
                    onChange={(e) => setNumberOfQuestions(e.target.value)}
                />
            </label>

            {/* Category Select */}
            <label>
                Category:
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </label>

            {/* Difficulty Select */}
            <label>
                Difficulty:
                <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>

            {/* Type Select */}
            <label>
                Type:
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True/False</option>
                </select>
            </label>

            <button onClick={startQuiz}>Start Quiz</button>
            <button onClick={viewStatistics}>See My Statistics</button>  {/* Bring back statistics button */}
        </div>
    );
};

export default WelcomeScreen;
