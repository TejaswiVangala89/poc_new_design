import React, { useState } from 'react';
import './App.css';
import AccountInfo from './components/AccountInfo';

function App() {
  const [isEditmode, setIsEditmode] = useState(false);

  return (
    <>
      <button onClick={() => setIsEditmode((prev) => !prev)} style={{ marginBottom: 16 }}>
        {isEditmode ? 'Readonly' : 'Edit'}
      </button>
      <AccountInfo isEditmode={isEditmode} />
    </>
  );
}

export default App;
