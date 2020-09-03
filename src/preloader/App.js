import React, { useState, useEffect } from 'react';

import SkeletonCard from './components/SkeletonCard';
import Blog from './components/Blog';

function App() {
  const [blog, setBlog] = useState([]);
  const [loadding, setLoadding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
     
      setLoadding(true);
      const timing = setTimeout(() => {
        setBlog(data)
        setLoadding(false)
      }, 2000);

      return  () => clearTimeout(timing)
    }
    fetchData();
  }, []);

 

  console.log(blog)

  return (
    <>
      {
        loadding ? <SkeletonCard /> : <Blog data={blog} />
      }
    </>
  )
}

export default App;
