import {useMutation, useQueryClient} from 'react-query';
import { UserService } from '../services';

const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation((id: string) => UserService.deleteUser(id), {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        }
        
    });
}
export default useDeleteUser;