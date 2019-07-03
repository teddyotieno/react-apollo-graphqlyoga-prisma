import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PaginationStyles from "./styles/PaginationStyles";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

export default function Pagination(props) {
  return (
    <PaginationStyles>
      <Query query={PAGINATION_QUERY}>
        {({ data, loading, error }) => {
          if (error) return <p>Error: {error}</p>;
          if (loading) return <p>Loading...</p>;
          return (
            <div>
              <p>
                Hi I'm the pagination {data.itemsConnection.aggregate.count}
              </p>
              {props.children}
            </div>
          );
        }}
      </Query>
    </PaginationStyles>
  );
}
