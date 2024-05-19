import React from "react";
import CDItem from "../CDItem/CDItem";

const CDList = ({ cds, editCD, deleteCD }) => { 
    return (
        <div className="cd-list">
            {cds.map((cd) => ( //API traits and app.js functions being passed down for each CD entry
                <CDItem
                    key={cd.id}
                    cd={cd}
                    editCD={editCD}
                    deleteCD={deleteCD}
                />
            ))}
        </div>
    );
};

export default CDList;