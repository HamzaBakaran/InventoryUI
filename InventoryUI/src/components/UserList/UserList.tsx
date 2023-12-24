import React, { useState, ChangeEvent } from 'react';
import { usersList } from '../../constants'; // Assuming you have a userList constant
import UserCard from '../UserCard'; // Adjust the import based on your project structure

type Props = {};

const UserList = (props: Props) => {
  const [users, setUsers] = useState(usersList);

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredUsers = usersList.filter(user =>
      user.userName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 col-md-4 mb-3 mx-auto">
            <input
              type="text"
              className="form-control"
              onChange={search}
              placeholder="Search for a user..."
            />
          </div>
        </div>

        {users.length > 0 ? (
          <div className="row">
            {users.map((user, i) => (
              <div className="col-md-4 mb-3" key={i}>
                {/* Adjust the col-md-4 to the desired column size */}
                <UserCard user={user} />
              </div>
            ))}
          </div>
        ) : (
          <div className="row mb-3">
            <p>No users found.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default UserList;
