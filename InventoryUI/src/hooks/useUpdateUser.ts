import { useMutation, useQueryClient } from 'react-query';
import { UserService } from '../services';
import { UserType } from '../utils/types'; // Import the appropriate type

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const updateUser = async (updatedUser: UserType) => {
    // Call your API service to edit the user
    const updatedUserData = await UserService.updateUser(updatedUser);

    // Invalidate and refetch the 'users' query to update the data
    queryClient.invalidateQueries('users');

    return updatedUserData;
  };

  const { mutate: updateUserMutation } = useMutation(updateUser);

  return {
    updateUser: updateUserMutation,
  };
};

export default useUpdateUser;
