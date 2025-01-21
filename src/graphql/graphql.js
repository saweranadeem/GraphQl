import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
        phone
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $phone: String!) {
    createUser(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

// export const UPDATE_USER = gql`
//   mutation UpdateProduct($id: id!, $name: String!, $email: String!) {
//     updateProduct(id: $id, name: $String, email: $email) {
//       id
//       name
//       email
//     }
//   }
// `;
// export const DELETE_USER = gql`
//   mutation Deleteproduct($id: id) {
//     deleteProduct(id: $id) {
//       id
//       name
//       email
//     }
//   }
// `;
