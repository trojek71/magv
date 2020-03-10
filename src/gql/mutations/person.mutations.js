import gql from 'graphql-tag'

export const createPerson = gql`
  mutation CreatePerson($name: String!,$email: String!) {
    createPerson(name: $name, email:$email) {
      id
      name
      email
    }
  }
`;

