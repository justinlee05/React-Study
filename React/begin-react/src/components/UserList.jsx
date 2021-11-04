import { render } from '@testing-library/react';
import React, { useRef, useState } from 'react';

function UserList() {
  const users = [
    {
      id: 1,
      username: 'asdf',
      email: 'test@naver.com',
    },
    {
      id: 2,
      username: 'asdf1',
      email: 'test@naver.com',
    },
    {
      id: 3,
      username: 'asdf2',
      email: 'test@naver.com',
    },
    {
      id: 4,
      username: 'asdf3',
      email: 'test@naver.com',
    },
    {
      id: 5,
      username: 'asdf4',
      email: 'test@naver.com',
    },
    {
      id: 6,
      username: 'asdf5',
      email: 'test@naver.com',
    },
  ];

  const nextId = useRef(1);
  

  function Users({ users }) {
    return (
      <div>
        <b >{users.username}</b>
        <span >({users.email})</span>
      </div>
    );
  }

/*   const rendering = () => {
    const result = [];
    for (let i = 0; i < users.length; i++) {
      result.push(<Users users={users[i]} />);
    }
    return result;
  }; */

  return (
    <div>{/* rendering() */
        users.map(index=> (
            <Users key={index.id} users={index}/>
        ))
    }</div>
  );
}

export default UserList;
