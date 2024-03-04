import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navLinks">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/store">
        Store
      </Link>
    </div>
  );
}
export default Nav;
