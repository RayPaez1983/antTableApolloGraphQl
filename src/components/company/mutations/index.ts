import { gql } from '@apollo/client';

const DELETE_ONE_ROW_MUTATION = gql`
  mutation DeleteMyObject($id: ID!) {
    deleteMyObject(id: $id)
  }
`;

const DELETE_ROWS_MUTATION = gql`
  mutation deleteMyObjects($ids: [ID!]!) {
    deleteMyObjects(ids: $ids)
  }
`;

export { DELETE_ONE_ROW_MUTATION, DELETE_ROWS_MUTATION };
