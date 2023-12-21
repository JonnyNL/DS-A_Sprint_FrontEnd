import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnterNumbers from './components/EnterNumbers';
import PreviousTrees from './components/PreviousTrees';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EnterNumbers />} />
                <Route path="/enter-numbers" element={<EnterNumbers />} />
                <Route path="/previous-trees" element={<PreviousTrees />} />
            </Routes>
        </Router>
    );
}

export default App;