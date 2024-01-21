import  { useState, ChangeEvent } from 'react';
import UserCard from '../UserCard';
import useUsers from '../../hooks/useUsers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { registerUser } from "../../store/authSlice";



export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  userType: string;
};

const schema = yup
  .object({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    username: yup.string().min(6).max(20).required(),
    password: yup.string().min(8).required(),
    userType: yup.string().required()
  })
  .required();

const UserList = () => {
  const { data: users, isLoading} = useUsers();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(schema)
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = (users ?? []).filter((user) =>
    user?.userName?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRegistrationSubmit = (data: RegisterFormData) => {
    dispatch(registerUser(data))
      .then(() => {
        toast.success('Registration successful');
        closeModal();
      })
      .catch((error) => {
        const errorMessage = error.toString();
        toast.error(`Error registering user: ${errorMessage}`);
      });
  };

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
        <button className="btn btn-primary" onClick={openModal}>
          Add User
        </button>

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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add User Modal"
      >
        <div className="col-12 col-md-3 m-2">
          <div className="card p-2">
            <form onSubmit={handleSubmit(handleRegistrationSubmit)}>
              <div className="mb-3">
                <label className="form-label">First name</label>
                <input type="text" className="form-control" {...register("firstName")} />
                {errors.firstName && <small style={{ color: "red" }}>{errors.firstName.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Last name</label>
                <input type="text" className="form-control" {...register("lastName")} />
                {errors.lastName && <small style={{ color: "red" }}>{errors.lastName.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" {...register("username")} />
                {errors.username && <small style={{ color: "red" }}>{errors.username.message}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" {...register("email")} />
                {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}
              </div>
              <div className="mb-3">
               <label className="form-label">User Type</label>
               <select className="form-control" {...register("userType")}>
              <option value="ADMIN">Admin</option>
               <option value="USER">User</option>
               <option value="WORKER">Worker</option>
               </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" {...register("password")} />
                {errors.password && <small style={{ color: "red" }}>{errors.password.message}</small>}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default UserList;
