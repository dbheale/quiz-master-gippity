import React from 'react';
import { useSelector } from 'react-redux';

const StatisticsScreen = () => {
    const stats = useSelector((state) => state.stats);

    return (
        <div className="statistics-screen">
            <h2>User Statistics</h2>

            {/* Overall statistics */}
            <div>
                <h3>Overall Statistics</h3>
                <p>Total Questions Taken: {stats.totalQuestions}</p>
                <p>Total Correct Answers: {stats.totalCorrect}</p>
            </div>

            {/* Category statistics */}
            <div>
                <h3>Category Breakdown</h3>
                {Object.entries(stats.categoryStats).length === 0 ? (
                    <p>No category statistics available.</p>
                ) : (
                    Object.entries(stats.categoryStats).map(([category, count]) => (
                        <p key={category}>{category}: {count} questions</p>
                    ))
                )}
            </div>

            {/* Difficulty statistics */}
            <div>
                <h3>Difficulty Breakdown</h3>
                {Object.entries(stats.difficultyStats).length === 0 ? (
                    <p>No difficulty statistics available.</p>
                ) : (
                    Object.entries(stats.difficultyStats).map(([difficulty, count]) => (
                        <p key={difficulty}>{difficulty}: {count} questions</p>
                    ))
                )}
            </div>

            {/* Type statistics */}
            <div>
                <h3>Type Breakdown</h3>
                {Object.entries(stats.typeStats).length === 0 ? (
                    <p>No type statistics available.</p>
                ) : (
                    Object.entries(stats.typeStats).map(([type, count]) => (
                        <p key={type}>{type}: {count} questions</p>
                    ))
                )}
            </div>
        </div>
    );
};

export default StatisticsScreen;
