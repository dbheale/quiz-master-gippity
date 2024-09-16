import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateStats } from '../slices/statsSlice';

const QuizScreen = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.quiz.questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const navigate = useNavigate();

    const handleAnswerSelect = (answer) => {
        setSelectedAnswers((prev) => [
            ...prev,
            {
                question: questions[currentQuestionIndex].question,
                selectedAnswer: answer,
                correctAnswer: questions[currentQuestionIndex].correct_answer,
                isCorrect: answer === questions[currentQuestionIndex].correct_answer,
                category: questions[currentQuestionIndex].category,
                difficulty: questions[currentQuestionIndex].difficulty,
                type: questions[currentQuestionIndex].type,
            },
        ]);
    };
    

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Dispatch the collected results to the Redux store
            dispatch(updateStats(selectedAnswers));
            navigate('/results');
        }
    };

    const question = questions[currentQuestionIndex];

    return (
        <div className="quiz-screen">
            {questions.length > 0 ? (
                <div>
                    <h2>{question.question}</h2>

                    <div className="answers">
                        {question.incorrect_answers.concat(question.correct_answer).map((answer, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(answer)}
                                style={{
                                    backgroundColor: selectedAnswers.some(ans => ans.selectedAnswer === answer && ans.question === question.question) ? 'lightblue' : 'white',
                                }}
                            >
                                {answer}
                            </button>
                        ))}
                    </div>

                    <button onClick={nextQuestion}>
                        {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                </div>
            ) : (
                <p>Loading questions...</p>
            )}
        </div>
    );
};

export default QuizScreen;
