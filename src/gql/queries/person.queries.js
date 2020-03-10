import gql from 'graphql-tag'

export const PEOPLE = gql`
  query People {
    people {
      id
      name
      email
    }
  }
`