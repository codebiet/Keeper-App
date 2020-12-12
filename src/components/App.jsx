import React, {useState} from "react";
import Heading from "./Header";
import Footer from './Footer';
import Note from './Note';
import CreateArea from "./CreateArea";

function App() {

    const [note, setNote] = useState([]);

    function addNote(newNote) {
        setNote(prev => {
            return [...prev, newNote];
        });
    }
    function deleteNote(id) {
        setNote(prev => {
            return prev.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return <div>
    <Heading />
    <CreateArea onAdd={addNote}/>
    {note.map((prev, index) => {
        return <Note key={index} id={index} title={prev.title} content={prev.content} delete={deleteNote}/>
    })}
    <Footer />
    </div>;
}

export default App;