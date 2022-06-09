import React from 'react';

interface Props {}

const HomePage = (props: Props) => {
  
  return <div style={{
    width: '1230px',
    maxWidth: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0'
  }}>
    <div>Home</div>
    <div>
      <button
        onClick={() => {
          localStorage.removeItem('key');
          window.location.href = 'http://localhost:3000'
        }}
      >
        Log Out
      </button>
    </div>
  </div>;
};

export default HomePage;
