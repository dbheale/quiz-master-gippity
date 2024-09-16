import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import quizReducer from './slices/quizSlice';
import statsReducer from './slices/statsSlice'; // New slice

const persistConfig = {
    key: 'stats',
    storage,
    whitelist: ['stats'], // Persist only stats slice
};

const rootReducer = combineReducers({
    quiz: quizReducer,
    stats: statsReducer, // Add stats slice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
