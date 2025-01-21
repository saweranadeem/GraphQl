import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/graphql";

const CreateUser = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const handleCreateUser = () => {
    createUser({
      variables: {
        name: "sawaira Nadeem",
        email: "itsawira@gmail.com",
        phone: "123456789",
      },
    });
  };

  return (
    <div>
      <button onClick={handleCreateUser} disabled={loading}>
        {loading ? "Creating..." : "Create User"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      {data && (
        <p style={{ color: "green" }}>
          User created successfully! ID: {data.createUser.id}
        </p>
      )}
    </div>
  );
};

export default CreateUser;
