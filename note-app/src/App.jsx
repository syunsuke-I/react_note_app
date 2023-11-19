import { useState } from 'react'
import './App.css'

import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from "react-uuid"

function App() {

  const [notes,setNotes] = useState([]);
  const [activeNote,setActiveNotes] = useState(false);

  const onAddNote = () =>{
    const newNote = {
      id:uuid(),
      title:"タイトル",
      content:"内容",
      modDate: Date.now(),
    };
    setNotes([...notes,newNote]);
    console.log(notes)
  }

  const onDeleteNote = (id) =>{
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () =>{
      return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) =>{
    const updatedNotesArray = notes.map((note)=>{
      if(note.id === updatedNote.id){
        return updatedNote;
      }else{
        return note;
      }
    });
    setNotes(updatedNotesArray); 
  };

  return (
    <>
      <div className="App flex">
        <Sidebar 
          onAddNote={onAddNote} 
          notes={notes} 
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNotes={setActiveNotes}
        />
        <Main
          activeNote={getActiveNote()}
          onUpdateNote={onUpdateNote}
        />
      </div>
    </>
  )
}

export default App
