import React from 'react';
import { useSelector } from 'react-redux';

const StatisticsScreen = () => {
    const stats = useSelector((state) => state.stats);

    return (
        <div>
            <h2>Statistics</h2>
            <p>Total Questions Taken: {stats.totalQuestions}</p>
            <p>Total Correct Answers: {stats.totalCorrect}</p>

            <h3>Category Breakdown</h3>
            {Object.entries(stats.categoryStats).map(([category, count]) => (
                <p key={category}>{category}: {count} questions</p>
            ))}

            <h3>Difficulty Breakdown</h3>
            {Object.entries(stats.difficultyStats).map(([difficulty, count]) => (
                <p key={difficulty}>{difficulty}: {count} questions</p>
            ))}

            <h3>Type Breakdown</h3>
            {Object.entries(stats.typeStats).map(([type, count]) => (
                <p key={type}>{type}: {count} questions</p>
            ))}
        </div>
    );
};

export default StatisticsScreen;
