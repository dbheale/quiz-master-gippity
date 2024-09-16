import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const endQuiz = () => {
        setShowModal(true);
    };

    const confirmEndQuiz = () => {
        navigate('/');
    };

    const cancelEndQuiz = () => {
        setShowModal(false);
    };

    const finishQuiz = () => {
        navigate('/results');
    };

    return (
        <div className="quiz-screen">
            <h2>Quiz Question</h2>
            {/* Timer and other elements */}
            <button onClick={endQuiz}>End Quiz</button>

            {showModal && (
                <div className="modal">
                    <p>Are you sure you want to end the quiz?</p>
                    <button onClick={cancelEndQuiz}>Cancel</button>
                    <button onClick={confirmEndQuiz}>Confirm</button>
                </div>
            )}
        </div>
    );
};

export default QuizScreen;
