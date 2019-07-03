import Link from "next/link";
import NavStyles from "./styles/NavStyles";

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/items">
        <a>Shop</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="">
        <a>Signup</a>
      </Link>
      <Link href="">
        <a>Orders</a>
      </Link>
      <Link href="">
        <a>Account</a>
      </Link>
    </NavStyles>
  );
}
