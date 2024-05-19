import React, { useState, useEffect } from 'react';
import CDList from './components/CDList/CDList';
import CDForm from './components/CDForm/CDForm';
import './App.css';

const BaseURL = 'https://66492f534032b1331bed6ffa.mockapi.io/cd'; //MockAPI is in place

function App() {
    const [cds, setCds,] = useState([]);

    useEffect(() => { //Pulling data from API
      fetchCDs();
    }, []);

    const fetchCDs = async () => {
        try {
            const response = await fetch(`${BaseURL}`);
            const data = await response.json();
            setCds(data);
        } catch (error) {
            console.error('Error fecthing CDs:', error);
        }
    };

    const addCD = async newCD => { //Functionality for sending request to create new entry
        try {
            const response = await fetch(`${BaseURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCD),
            });
            const data = await response.json();
            setCds([...cds, data]);
        } catch (error) {
            console.error('Error adding CD:', error);
        }
    };

    const editCD = async editedCD => { //Functionality for sending request update entry
        try {
            const response = await fetch(`${BaseURL}/${editedCD.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedCD),
            });
            if (!response.ok) {
                throw new Error('Failed to edit CD');
            }
            const data = await response.json();
            const updatedCDs = cds.map(cd =>
                cd.id === editedCD.id ? data : cd
            );
            setCds(updatedCDs);
        } catch (error) {
            console.error('Error editing CD:', error);
        }
    };

    const deleteCD = async id => { //Functionality for sending request to remove entry
        try {
            await fetch(`${BaseURL}/${id}`, {
                method: 'DELETE',
            });
            const updatedCDs = cds.filter(cd => cd.id !== id);
            setCds(updatedCDs);
        } catch (error) {
            console.error('Error deleting CD:', error);
        }
    };

    return (
        <div className="App"> 
            <h1>CD Collection Tracker</h1>
            <h2>Add a New Disc:</h2>
            <CDForm addCD={addCD} />
            <h2>Current Collection:</h2>
            <CDList cds={cds} editCD={editCD} deleteCD={deleteCD} />
        </div>
    );
}

export default App;
