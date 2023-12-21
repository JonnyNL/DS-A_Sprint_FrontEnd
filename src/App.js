import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EnterNumbers from './components/EnterNumbers';
import PreviousTrees from './components/PreviousTrees';

const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/enter-numbers">Enter Numbers</Link>
              </li>
              <li>
                <Link to="/previous-trees">Previous Trees</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/enter-numbers" element={<EnterNumbers />} />
            <Route path="/previous-trees" element={<PreviousTrees />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;