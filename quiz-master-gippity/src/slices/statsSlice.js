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
            const answers = action.payload;

            // Update total questions and correct answers
            state.totalQuestions += answers.length;
            state.totalCorrect += answers.filter(ans => ans.isCorrect).length;

            // Update category, difficulty, and type stats
            answers.forEach(answer => {
                state.categoryStats[answer.category] = (state.categoryStats[answer.category] || 0) + 1;
                state.difficultyStats[answer.difficulty] = (state.difficultyStats[answer.difficulty] || 0) + 1;
                state.typeStats[answer.type] = (state.typeStats[answer.type] || 0) + 1;
            });
        },
    },
});

export const { updateStats } = statsSlice.actions;
export default statsSlice.reducer;
