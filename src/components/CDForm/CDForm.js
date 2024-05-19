import React, { useState } from 'react';

const CDForm = ({ addCD }) => {
    //Default to clear
    const [discName, setDiscName] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // Call addCD function passed from parent component
        addCD({ discName, genre, rating });

        // Clear form fields after submission
        setDiscName('');
        setGenre('');
        setRating('');
    };

    return (
        <form onSubmit={handleSubmit}> {/* Tied to above functionality for button click */}
            <input
                name="cdName"
                type="text"
                placeholder="CD Name"
                value={discName}
                onChange={e => setDiscName(e.target.value)}
            />
            <input
                name="cdGenre"
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={e => setGenre(e.target.value)}
            />
            <input
                name="cdRating"
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={e => setRating(e.target.value)}
            />
            <button key="submit" type="submit">Add CD</button>
        </form>
    );
};

export default CDForm;