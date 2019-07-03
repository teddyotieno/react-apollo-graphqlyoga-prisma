import React from "react";
import SingleItem from "../components/SingleItem";

export default function item(props) {
  return <SingleItem id={props.query.id} />;
}
