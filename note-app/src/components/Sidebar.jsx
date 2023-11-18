import React from 'react';

function Sidebar() {

  return (
    <>
      <div className="app-sidebar w-64 h-screen bg-gray-800 text-white p-4">
        <div className="header mb-6">
          <h1 className="text-xl font-semibold">ノート</h1>
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded">
            追加
          </button>
        </div>
        <div className="notes space-y-4">
          <div className="note bg-gray-700 p-3 rounded">
            <div className="title flex justify-between items-center mb-2">
              <strong>タイトル</strong>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">
                削除
              </button>
            </div>
            <p>ノートの内容</p>
            <small className="text-gray-400">最後の修正日: xx/xx</small>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
