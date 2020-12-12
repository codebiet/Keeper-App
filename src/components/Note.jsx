import React from 'react';

function Note(props){

    function handleChange() {
        props.delete(props.id);
    }
    return <div className="note">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button onClick={handleChange}>Delete</button>
    </div>
}

export default Note;