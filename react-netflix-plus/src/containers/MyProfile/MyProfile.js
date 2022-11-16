import React, { Component } from 'react'

class MyProfile extends Component {

  // JS <=> JSX
  state = {
    profileName: 'john'
  }

  handleProfileNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      profileName: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>Profile Info</h3>
        <p>Update Profile Name</p>
        <input type='text' 
          value={this.state.profileName} 
          onChange={this.handleProfileNameChange}/>
        <p>Profile Name Entered: {this.state.profileName}</p>
      </div>
    )
  }
}

export default MyProfile;