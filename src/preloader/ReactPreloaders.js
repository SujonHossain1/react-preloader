import React, { useState, useEffect } from 'react';
import { Cube } from 'react-preloaders';

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setUser(data);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  
  return (
    <div style={{ width: '50%' }}>
      {user.map((user, index) => {
        return (
          <h1 key={index}>
            {user.name}
          </h1>
        )
      })}

      <Cube background="#f7f7f7" color={'#61dafb'} customLoading={loading} />
    </div>
  );
}

export default App;
