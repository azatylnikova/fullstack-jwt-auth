import React from "react";
import { userAPI } from "../services/UserService";

const Users = () => {
  const { data: posts, refetch } = userAPI.useFetchAllUsersQuery(5);
  return <div>{posts.map(post => 
    )}</div>;
};
export default Users;
