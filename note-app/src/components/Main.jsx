import React from 'react';
import ReactMarkdown from "react-markdown"

function Main({activeNote,onUpdateNote}) {

  const onEditNote = (key,value) =>{
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return (
      <div className="w-7/10 mx-auto h-screen flex items-center justify-center text-center text-gray-500">
        ノートが選択されていません
      </div>
    );
  }

  return (
    <>
      <div className="Main flex flex-col md:flex-row md:space-x-4 p-4">
        <div className="note-edit flex-1">
          <input
            id='title' 
            type="text"
            value={activeNote.title}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="タイトルを記入"
            onChange={(e)=>onEditNote("title",e.target.value)}
          />
          <textarea
            id='content'
            placeholder="ノートの内容を記入" 
            className="w-full h-64 p-2 border border-gray-300 rounded"
            value={activeNote.content}
            onChange={(e)=>onEditNote("content",e.target.value)}
          ></textarea>
        </div>
        <div className="preview flex-1">
          <div className="markdown-preview bg-white p-4 border border-gray-300 rounded">
            <h1 className="preview-title mb-4">{activeNote.title}</h1>
            {/* プレビュー内容をここに挿入 */}
            <ReactMarkdown>
              {activeNote.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
