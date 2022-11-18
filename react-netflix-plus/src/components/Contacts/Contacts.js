import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Contacts = () => {
  const [ contactList, setContactList ] = useState([]);

  useEffect( () => {
    // ideal place for rest api calls
    // What's the RESTful API URL? https://jsonplaceholder.typicode.com/users
    // What's the Http Method? GET
    // What's the REST API Client Tool? Axios (npm i axios) or else Fetch API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then( (res) => { // upon success
        console.log(res.data);
        setContactList(res.data); // updating the state
      })
      .catch((err) => { // upon error
        console.log(err);
      })
      .finally( () => {
        console.log('It is over!');
      });
  }, [])

  return (
    <div className='row pt-3'>
      <h1>Contacts</h1>
      {contactList?.map((contact) => {
        return(
          <div className="card" key={contact.id}>
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{contact.phone}</h6>
              <p>Email: {contact.email}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Contacts;