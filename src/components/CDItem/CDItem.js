import React, { useState } from 'react';
import CDEdit from '../CDEdit/CDEdit';

const CDItem = ({ cd, editCD, deleteCD }) => {
    const [isEditing, setIsEditing] = useState(false);//Edit field defaults to off

    const handleEditClick = () => {//Turning on edit field
        setIsEditing(true);
    };

    const handleCancelEdit = () => { //Functionality for the cancel button in CDEdit
        setIsEditing(false);
    };

    return (
        <div className='cd-item'> 
            {!isEditing ? (
                <> {/* The default view*/}
                    <h3>{cd.discName}</h3>
                    <p>Genre: {cd.genre}</p>
                    <p>Rating: {cd.rating}</p>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={() => deleteCD(cd.id)}>Delete</button> {/* Delete functionality passed down */}
                </>
            ) : ( /* Edit functionality flipped on*/
                <CDEdit
                    cd={cd}
                    editCD={editedCD => {
                        console.log("Edited CD:", editedCD);
                        editCD(editedCD);
                        setIsEditing(false);
                    }}
                    cancelEdit={handleCancelEdit}
                />
            )}
        </div>
    );
}

export default CDItem;