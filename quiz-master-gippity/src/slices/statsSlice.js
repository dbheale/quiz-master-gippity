import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalQuestions: 0,
    totalCorrect: 0,
    categoryStats: {},
    difficultyStats: {},
    typeStats: {},
};

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        updateStats: (state, action) => {
            const { questions, correct, category, difficulty, type } = action.payload;

            // Update overall questions and correct answers
            state.totalQuestions += questions;
            state.totalCorrect += correct;

            // Update category stats
            state.categoryStats[category] = (state.categoryStats[category] || 0) + questions;

            // Update difficulty stats
            state.difficultyStats[difficulty] = (state.difficultyStats[difficulty] || 0) + questions;

            // Update type stats
            state.typeStats[type] = (state.typeStats[type] || 0) + questions;
        },
    },
});

export const { updateStats } = statsSlice.actions;
export default statsSlice.reducer;
