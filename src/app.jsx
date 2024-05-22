import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <>
            <h1>Test...</h1>
            <h2>aktualizacja</h2>
        </>

    )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);