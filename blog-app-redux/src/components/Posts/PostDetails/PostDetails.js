import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FETCH_BY_ID_REQUEST } from '../../../store/posts/types';

const PostDetails = (props) => {

  useEffect( () => {
    console.log(props);
    props.dispatch({
      type: FETCH_BY_ID_REQUEST
    });
  }, []);

  if (props.isLoading){
    return (<div className='spinner-border text-primary'></div>)
  }

  return (
    <div>
      <h1>PostDetails</h1>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.post.title}</h5>
          <p className="card-text">{props.post.body}</p>
          <button type="button" className="btn btn-primary">Edit</button>
          <button type="button" className="btn btn-danger">Update</button>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = ( {posts} ) => {
  console.log(posts);
  return {
    isLoading: posts.isLoading,
    isError: posts.isError,
    status: posts.status,
    post: posts.post
  }
}

export default connect(mapStateToProps)(PostDetails)