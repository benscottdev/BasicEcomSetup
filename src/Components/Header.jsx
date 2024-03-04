import { Link } from "react-router-dom";
import Nav from "./Nav";
import Cart from "../Pages/Cart";

function Header() {
  return (
    <div className="header">
      <Nav />
      <h1>STORE</h1>
      <Link to="/cart">Cart</Link>
    </div>
  );
}
export default Header;
