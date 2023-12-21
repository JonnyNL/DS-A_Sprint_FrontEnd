import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this import
import axios from 'axios';

const EnterNumbers = () => {
    const [numbers, setNumbers] = useState('');
    const [tree, setTree] = useState(null);
    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send numbers to the backend
            await axios.post('http://localhost:8080/treeify/enter-numbers', numbers.split(' ').map(Number));

            // Process and save the tree
            const response = await axios.get('http://localhost:8080/treeify/process-numbers');
            setTree(response.data);
        } catch (error) {
            console.error('Error processing numbers:', error);
        }
    };

    const handleShowPrevious = () => {
        navigate('/previous-trees'); // Use navigate function for navigation
    };

    return (
        <div>
            <h2>Enter Numbers</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={numbers}
                    onChange={(e) => setNumbers(e.target.value)}
                    placeholder="Enter numbers separated by space"
                />
                <button type="submit">Submit</button>
            </form>

            {tree && (
                <div>
                    <h3>Binary Search Tree (JSON):</h3>
                    <pre>{JSON.stringify(tree, null, 2)}</pre>
                </div>
            )}

            <button onClick={handleShowPrevious}>Show Previous</button>
        </div>
    );
};

export default EnterNumbers;