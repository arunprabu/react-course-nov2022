import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../../utils/fetchApi';

const Users = () => {
  const [ userList, setUserList ] = useState([]);

  useEffect( () => {
    fetchApi('https://jsonplaceholder.typicode.com/users')
      .then( (res) => {
        console.log(res);
        setUserList(res);
      })
      .catch( (err) => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <h2>Users | Testing API calls</h2>

      <div className='row'> 
      {
        userList.map( (user) => {
          return( 
            <div className="card col-md-3" key={user.id}>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.phone}</h6>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Users