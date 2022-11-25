import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FETCH_REQUEST } from '../../store/posts/types';

class PostList extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.dispatch({
      type: FETCH_REQUEST
    });
  }

  render() {
    console.log(this.props);

    if(this.props.isLoading){
      return <div className="spinner-border text-primary"></div>
    }

    if (this.props.isError ) {
      return(<div className='alert alert-warning'>
        Something went wrong. Try again later.
      </div>
      )
    }

    return (
      <div>
        <h3>Post List</h3>
        {
          this.props.postList.map( (post) => {
            return(
              <div className="list-group text-left" key={post.id}>
                <div className="list-group-item list-group-item-action text-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                      <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </h5>
                    <small>Post Id: {post.id}</small>
                  </div>
                  <p className="mb-1 text-left">{post.body}</p>
                </div>
              </div>
            )
          })
        }
 
      </div>
    )
  }
}

const mapStateToProps = ( state ) => { // state will come from the store
  console.log(state.posts); // store data for the feature
  return {
    isLoading: state.posts.isLoading,
    isError: state.posts.isError,
    status: state.posts.status,
    postList: state.posts.postList
  }
}

// connect() will give the dispatch fn as part of props.
// mapStateToProps() will make this comp as subscriber to store data
// connect(mapStateToProps) will get you dispatch and store data and also convert that to props
export default connect(mapStateToProps)(PostList);
