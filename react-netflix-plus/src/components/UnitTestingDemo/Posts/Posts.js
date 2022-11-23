import React, { useEffect, useState } from 'react'

const Posts = () => {

  // https://jsonplaceholder.typicode.com/posts

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')  
      .then((res)=> {
        console.log(res);
        return res.json();
      })
      .then( (resInJSON) => {
        debugger;
        console.log(resInJSON);
        setPostList(resInJSON);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  
  return (
    <div>
      <hr />
      <h2>Posts | Spy Demo</h2>

      {
        postList.map( (post) => {
          return (
            <div className="card" key={post.id}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <a href="/" className="btn btn-primary">Read more</a>
              </div>
            </div>
          )
        })

      }
      

    </div>
  )
}

export default Posts