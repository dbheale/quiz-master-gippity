import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch categories from API
export const fetchCategories = createAsyncThunk('quiz/fetchCategories', async () => {
    const response = await fetch('https://opentdb.com/api_category.php');
    const data = await response.json();
    return data.trivia_categories;
});

// Fetch questions based on configuration
export const fetchQuestions = createAsyncThunk('quiz/fetchQuestions', async (config) => {
    const { category, difficulty, type, amount } = config;
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
    const data = await response.json();
    return data.results;
});

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        categories: [],
        questions: [],
        configuration: null,
        loading: false,
    },
    reducers: {
        setConfiguration: (state, action) => {
            state.configuration = action.payload;
        },
        clearQuizData: (state) => {
            state.questions = [];
            state.configuration = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.questions = action.payload;
            });
    },
});

export const { setConfiguration, clearQuizData } = quizSlice.actions;
export default quizSlice.reducer;
