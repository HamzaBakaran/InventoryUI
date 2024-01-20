import React, { useState, ChangeEvent } from 'react';
import UserCard from '../UserCard';
import useUsers from '../../hooks/useUsers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

const UserList = (props: Props) => {
  const { data: users, error, isLoading, isError, refetch } = useUsers();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredUsers = (users ?? []).filter((user) =>
    user?.userName?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 col-md-4 mb-3 mx-auto">
            <input
              type="text"
              className="form-control"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search for a user..."
            />
          </div>
        </div>
        {isLoading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {!isLoading && (
          <div className="row">
            {filteredUsers?.map((user, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <UserCard user={user} />
              </div>
            ))}
          </div>
        )}

        {!isLoading && filteredUsers?.length === 0 && (
          <div className="row mb-3">
            <p>No users found.</p>
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default UserList;
