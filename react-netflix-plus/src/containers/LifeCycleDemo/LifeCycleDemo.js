import React, { Component } from 'react'

class LifeCycleDemo extends Component {

  constructor() {
    super();
    console.log('============== 1. Inside constructor() ==============');

    // ideal place for initial state dat
    this.state = {
      isLoading: true,
      isError: false,
      errorMsg: '',
      featureName: ''
    }
  }

  componentDidMount(){
    // this method will be called ONLY ONCE after render method called
    // this will be called when the component's UI comes into view
    // ideal place for you to send request to the backend
    // with setTimeout mocking ajax req
    setTimeout( () => {
      console.log('Inside setTimeout');
      // in case of error
      // this.setState({
      //   isLoading: false,
      //   isError: true,
      //   errorMsg: 'Some error occured. Unable to Fetch data now. Try again later.'
      // });

      //if success
      this.setState({
        isLoading: false,
        featureName: 'Demo of Lifecycle Hooks completed'
      })
    }, 4000);
    console.log('============ 3. Inside componentDidMount() ===========');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('============ 4. Inside shouldComponentUpdate() ===========');
    // When the state is updated -- this will be called
    // it must return either true or false
    // compare the prevState (this.state) and new state (nextState) 
    // if changes found, then return true else return false
    
    console.log(this.state); // prevState
    console.log(nextState); // nextState 
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    // called immediately after the UPDATE in JSX (after the re-rendering)
    // NOT called after initial rendering 

    console.log('============== 6. Inside componentDidUpdate() ==============');
    console.log(prevState);
  }

  render() {
    // this method will be called after constructor
    console.log('============== 2, 5. Inside Render() ==============');
    if(this.state.isLoading) 
      return <div className='spinner-border text-primary'></div>

    if(this.state.isError)
      return <div className='alert alert-danger'>{this.state.errorMsg}</div>

    // if no error -- and no longer loading
    return (
      <div>
        <h3>LifeCycleDemo</h3>
        <p>{this.state.featureName}</p>
      </div>
    )
  }
}

export default LifeCycleDemo