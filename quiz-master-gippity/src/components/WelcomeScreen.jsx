import React from 'react';

const WelcomeScreen = () => {
    return (
        <div className="welcome-screen">
            <h1>Welcome to Quiz Master!</h1>

            {/* Number of questions input */}
            <div>
                <label htmlFor="question-count">Number of Questions</label>
                <input
                    id="question-count"
                    type="number"
                    min="5"
                    max="15"
                    placeholder="Choose number (5-15)"
                />
            </div>

            {/* Category Select */}
            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="">Select Category</option>
                    <option value="general">General Knowledge</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="sports">Sports</option>
                </select>
            </div>

            {/* Difficulty Select */}
            <div>
                <label htmlFor="difficulty">Difficulty</label>
                <select id="difficulty">
                    <option value="">Select Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            {/* Type Select */}
            <div>
                <label htmlFor="type">Type</label>
                <select id="type">
                    <option value="">Select Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select>
            </div>

            {/* Time Select */}
            <div>
                <label htmlFor="time-limit">Time</label>
                <select id="time-limit">
                    <option value="1m">1 Minute</option>
                    <option value="2m">2 Minutes</option>
                    <option value="5m">5 Minutes</option>
                </select>
            </div>

            {/* Buttons */}
            <div className="button-group">
                <button className="start-btn">Start Quiz</button>
                <button className="stats-btn">See My Statistics</button>
            </div>
        </div>
    );
};

export default WelcomeScreen;
