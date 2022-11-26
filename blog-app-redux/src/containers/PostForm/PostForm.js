import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CREATE_REQUEST } from '../../store/posts/types';

class PostForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title: this.postTitle.value,
      body: this.postBody.value
    }

    console.log(formData); // Form data is ready -- we can work on dispatch
    console.log(this.props);

    this.props.dispatch({
      type: CREATE_REQUEST,
      payload: formData
    });

    this.postTitle.value = '';
    this.postBody.value = '';
  }

  render() {
    return (
      <div>
        <h3>Create Post!</h3>

        <form className='text-left' onSubmit={this.handleSubmit}>
          <input required type="text"
            placeholder="Enter Post Title"
            className='form-control' ref={(inputEl) => this.postTitle = inputEl} /><br />

          <textarea required rows="5" cols="28"
            placeholder="Enter Post"
            className='form-control' ref={(textAreaEl) => this.postBody = textAreaEl} /><br />
          <button className='btn btn-primary' type='submit'>Add Post</button>
        </form>
      </div>
    )
  }
}

export default connect()(PostForm);