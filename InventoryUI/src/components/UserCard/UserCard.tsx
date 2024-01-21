
import { UserType } from '../../utils/types'

type Props = {
  user: UserType
}

const UserCard = ({user}:Props) => {
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
          className="btn btn-success mx-2"
        
        >
          Edit
        </button>
  </div>
</div>
  )
}

export default UserCard