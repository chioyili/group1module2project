import { Link, Outlet } from "react-router-dom";

function Header({ movieData }) {
  return (
    <>
    <nav>
        <Link to='/list'>View List</Link>
    </nav>
    <Outlet />
    </>
  );
}

export default Header;
