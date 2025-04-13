import React from 'react';

function MemoList({ memos, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {memos.map((memo) => (
        <div key={memo.id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">{memo.title}</h3>
          <p className="text-gray-700 mb-4">{memo.content}</p>
          <div className="flex justify-end space-x-2">
            <button 
              onClick={() => onEdit(memo)} 
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              編集
            </button>
            <button 
              onClick={() => onDelete(memo.id)} 
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              削除
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemoList;