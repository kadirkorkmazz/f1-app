import React, { useState, useEffect } from 'react'
import { getDataFromApi } from '../data';

 function Bahrein() {

  const [posts, setPosts] = useState([])
     
  
  useEffect(() => {
    
    getDataFromApi()
    .then((result)=> result.stage.competitors)
    .then((result) => {
      console.log(result)
      setPosts(result)
    })
    
  
    return () => {
      
    }
  }, [])
  

  return (
    <div>

    <ul>

      {posts.map(post => <li key={post.id}>{post.name}</li>)}

    </ul>

    </div>
  )
}

export default Bahrein