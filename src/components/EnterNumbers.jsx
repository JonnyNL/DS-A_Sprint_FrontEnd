import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EnterNumbers() {
    const [numbers, setNumbers] = useState('');
    const [bstJson, setBstJson] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedNumbers = numbers.replace(/,/g, ' '); // Replace commas with spaces
        const params = new URLSearchParams();
        params.append('numbers', formattedNumbers);
        try {
            const response = await axios.post('http://localhost:8080/treeify/process-numbers', params);
            setBstJson(response.data);
        } catch (error) {
            console.error('Error processing numbers:', error);
        }
    };

    return (
        <div>
            <h1>Enter Numbers</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={numbers}
                    onChange={(e) => setNumbers(e.target.value)}
                    placeholder="Enter numbers separated by space"
                />
                <button type="submit">Create BST</button>
            </form>
            {bstJson && <pre>{JSON.stringify(bstJson, null, 2)}</pre>}
            <Link to="/previous-trees">View Previous Trees</Link>
        </div>
    );
}

export default EnterNumbers;