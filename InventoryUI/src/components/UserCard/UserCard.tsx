import React from 'react';
import { UserType } from '../../utils/types';
import useDeleteUser from '../../hooks/useDeleteUser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  user: UserType;
};


const UserCard = ({ user }: Props) => {
  const deleteUserMutation = useDeleteUser();

  const handleDelete = async (userId: string | undefined) => {
    if (!userId) {
      toast.error('Invalid userId');
      return;
    }

    try {
      await deleteUserMutation.mutateAsync(userId);
      toast.success('User deleted successfully');
    } catch (error) {
      const errorMessage = (error as Error).toString();
      toast.error(`Error deleting user: ${errorMessage}`);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        {user.firstName} {user.lastName}
      </div>
      <div className="card-body">
        <h5 className="card-title">{user.userName}</h5>
        <p className="card-text">{user.userType}</p>
        <p className="card-text">{user.email}</p>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;




