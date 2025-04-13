import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import MemoList from './components/MemoList';
import MemoForm from './components/MemoForm';
import './App.css';

function App() {
  const [memos, setMemos] = useState([]);
  const [currentMemo, setCurrentMemo] = useState(null);

  useEffect(() => {
    fetchMemos();
  }, []);

  const fetchMemos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "memos"));
      const memoList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMemos(memoList);
    } catch (error) {
      console.error("Error fetching memos: ", error);
    }
  };

  const handleSubmit = async (memo) => {
    try {
      if (memo.id) {
        // 更新
        const memoRef = doc(db, "memos", memo.id);
        await updateDoc(memoRef, {
          title: memo.title,
          content: memo.content,
          updatedAt: new Date()
        });
      } else {
        // 新規作成
        await addDoc(collection(db, "memos"), {
          title: memo.title,
          content: memo.content,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
      fetchMemos();
      setCurrentMemo(null);
    } catch (error) {
      console.error("Error saving memo: ", error);
    }
  };

  const handleEdit = (memo) => {
    setCurrentMemo(memo);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "memos", id));
      fetchMemos();
    } catch (error) {
      console.error("Error deleting memo: ", error);
    }
  };

  const handleCancel = () => {
    setCurrentMemo(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center my-8">シンプルメモアプリ</h1>
        <div className="mb-8">
          <MemoForm 
            memo={currentMemo} 
            onSubmit={handleSubmit} 
            onCancel={handleCancel} 
          />
        </div>
        <MemoList 
          memos={memos} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      </div>
    </div>
  );
}

export default App;
