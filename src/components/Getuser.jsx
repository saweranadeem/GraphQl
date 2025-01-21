import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../graphql/graphql";


const Getuser = () => {
  const { error, loading, data } = useQuery(GET_USERS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>SomeThing Went Wrong...</h1>;

  return (
    <div>
      <h1>Users List</h1>
      <div className="user-grid">
        {data.users.data.map((user) => (
          <div key={user.id} className="user-card">
            <h3>
              {user.id}-{user.name}
            </h3>

            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getuser;
