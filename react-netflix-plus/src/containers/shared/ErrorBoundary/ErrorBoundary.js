import React, { Component } from 'react'

class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  // to catch error
  static getDerivedStateFromError(){
    console.log('Inside getDerivedStateFromError');
    return {
      hasError: true
    }
    // when this method returns it will result in state update. 
    // so UI will re-render
  }

  // lifecycle hook
  // only when a runtime error occurs -- this will be called
  componentDidCatch(error, errorInfo){
    console.log('Inside comp did catch');
    console.log(error); // the error in original source code
    console.log(errorInfo); // the error in compiled bundle js
  }

  render() {
    // Let's return the fallback UI only when error occured
    if(this.state.hasError){
      return (
        <div className='alert alert-danger'>
          <p>Some Error Occured.</p>
          <p>Try again after sometime. Contact Admin, if the issue persists.</p>
        </div>
      )
    } else { // if no error ...
      return this.props.children;
    }
  }
}

export default ErrorBoundary