import { useState } from 'react'
import './App.css'

import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  const [notes,setNotes] = useState([]);

  const onAddNote = () =>{
    const newNote = {
      id:1,
      title:"タイトル",
      content:"内容",
      modDate: Date.now(),
    };
    setNotes([...notes,newNote]);
    console.log(notes)
  }

  return (
    <>
      <div className="App">
        <Sidebar onAddNote={onAddNote} notes={notes}/>
        <Main/>
      </div>
    </>
  )
}

export default App
