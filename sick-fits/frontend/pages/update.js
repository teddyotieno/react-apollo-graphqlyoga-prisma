import UpdateItem from "../components/UpdateItem";

export default function update({ query }) {
  return <UpdateItem id={query.id} />;
}
