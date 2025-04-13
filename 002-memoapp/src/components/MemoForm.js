import React, { useState, useEffect } from 'react';

function MemoForm({ memo, onSubmit, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (memo) {
      setTitle(memo.title || '');
      setContent(memo.content || '');
    } else {
      setTitle('');
      setContent('');
    }
  }, [memo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, id: memo?.id });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{memo ? 'メモを編集' : '新規メモ'}</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 mb-2">タイトル</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 mb-2">内容</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        {memo && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            キャンセル
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {memo ? '更新' : '作成'}
        </button>
      </div>
    </form>
  );
}

export default MemoForm;