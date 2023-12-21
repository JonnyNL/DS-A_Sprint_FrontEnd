import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this import
import axios from 'axios';

const PreviousTrees = () => {
    const [trees, setTrees] = useState([]);
    const navigate = useNavigate(); // Use useNavigate for navigation

    useEffect(() => {
        const fetchTrees = async () => {
            try {
                const response = await axios.get('http://localhost:8080/treeify/previous-trees');
                setTrees(response.data);
            } catch (error) {
                console.error('Error fetching previous trees:', error);
            }
        };

        fetchTrees();
    }, []);

    const navigateToEnterNumbers = () => {
        navigate('/enter-numbers'); // Use navigate function for navigation
    };

    return (
        <div>
            <h2>Previous Binary Search Trees</h2>
            {trees.length > 0 ? (
                trees.map((tree, index) => (
                    <div key={index}>
                        <h3>Tree {index + 1}</h3>
                        <pre>{JSON.stringify(tree, null, 2)}</pre>
                    </div>
                ))
            ) : (
                <p>No previous trees found.</p>
            )}
            <button onClick={navigateToEnterNumbers}>Enter More Numbers</button>
        </div>
    );
};

export default PreviousTrees;