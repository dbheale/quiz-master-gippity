import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import './App.css';
import AppRouter from './AppRouter';
import { HashRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <AppRouter />
                </Router>
            </PersistGate>
        </Provider>
    );
}


export default App;
