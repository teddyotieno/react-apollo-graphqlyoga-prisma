import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

export default class SingleItem extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id }}>
        {({ error, loading, data }) => {
          const { title, description, largeImage } = data.item;
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading....</p>;
          if (!data.item) return <p>No item found for {id}</p>;
          return (
            <SingleItemStyles>
              <Head>
                <title>Sick Fits | {title}</title>
              </Head>
              <img src={largeImage} alt={title} />
              <div className="details">
                <h2>Viewing {title}</h2>
                <p>{description}</p>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}
