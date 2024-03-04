import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <Nav />
      <h1>STORE</h1>
      <Link id="cartButton" to="/cart">
        Cart
      </Link>
    </div>
  );
}
export default Header;
