import React, { useState, useEffect } from 'react';

const CDEdit = ({ cd, editCD, cancelEdit }) => {
    //confirming that values are defined
    const [discName, setDiscName] = useState(cd ? cd.discName : '');
    const [genre, setGenre] = useState(cd ? cd.genre : '');
    const [rating, setRating] = useState(cd ? cd.rating : '');
    //passing down values to use as placeholders
    useEffect(() => {
        setDiscName(cd ? cd.discName : '');
        setGenre(cd ? cd.genre : '');
        setRating(cd ? cd.rating : '');
    }, [cd]);

    const handleSubmit = e => {//functionality for submitting the edit form
        e.preventDefault();

        // Call editCD function passed from parent component
        editCD({ ...cd, discName, genre, rating });

        // Clear form fields after submission
        setDiscName('');
        setGenre('');
        setRating('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="cdName"
                type="text"
                placeholder={discName || "CD Name"} //Placeholders take on the existing properties; otherwise, default to field names
                value={discName}
                onChange={e => setDiscName(e.target.value)}
            />
            <input
                name="cdGenre"
                type="text"
                placeholder={genre || "Genre"} //Placeholders take on the existing properties; otherwise, default to field names
                value={genre}
                onChange={e => setGenre(e.target.value)}
            />
            <input
                name="cdRating"
                type="number"
                placeholder={rating || "Rating"} //Placeholders take on the existing properties; otherwise, default to field names
                value={rating}
                onChange={e => setRating(e.target.value)}
            />
            <button key="submit" type="submit">Save</button>
            <button key="cancel" type="button" onClick={cancelEdit}>Cancel</button>
        </form>
    );
};

export default CDEdit;