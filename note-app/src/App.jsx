import { useState } from 'react'
import './App.css'

import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from "react-uuid"

function App() {

  const [notes,setNotes] = useState([]);

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
    const fillterNotes = notes.filter((note) => note.id !== id);
    setNotes(fillterNotes);
  }

  return (
    <>
      <div className="App">
        <Sidebar 
          onAddNote={onAddNote} 
          notes={notes} 
          onDeleteNote={onDeleteNote}
        />
        <Main/>
      </div>
    </>
  )
}

export default App
