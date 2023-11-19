import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ onAddNote, notes, onDeleteNote,setActiveNotes }) => {
  
  const sortedNotes = notes.sort((a,b) => b.modDate - a.modDate);

  return (
    <>
      <div className="app-sidebar w-64 h-screen bg-gray-800 text-white p-4">
        <div className="header mb-6">
          <h1 className="text-xl font-semibold">ノート</h1>
          <button 
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
            onClick={onAddNote}
          >
            追加
          </button>
        </div>
        <div className="notes space-y-4">
          {sortedNotes.map((note) => {
            return (
              <div 
                key={note.id} 
                className="note bg-gray-700 p-3 rounded hover:outline-none hover:ring-2 hover:ring-blue-500 hover:bg-gray-600"
                tabIndex="0"
                onClick={() => setActiveNotes(note.id)} 
              >
                <div className="title flex justify-between items-center mb-2">
                  <strong>{note.title}</strong>
                  <button 
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                    onClick={() => onDeleteNote(note.id)}
                  >
                    削除
                  </button>
                </div>
                <p>{note.content}</p>
                <small className="text-gray-400">最後の修正日: 
                {new Date(note.modDate).toLocaleDateString("ja-Jp",
                {
                  hour:"2-digit",
                  minute:"2-digit",
                })}</small>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  onAddNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar
