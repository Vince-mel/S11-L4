import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="py-2">
      <Container className="d-flex justify-content-start">
        <Link className="nav-link text-warning" to={"/"}>
          LOREM-TYPE-NEWS
        </Link>
        <div className="d-flex mx-5 py-2">
          <Link to={"/"} className="nav-link text-white mx-3 ">
            Home
          </Link>
          <Link to={"/"} className="nav-link text-white mx-3">
            Info
          </Link>
          <Link to={"/"} className="nav-link text-white mx-3">
            Contact Us
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};
export default Header;
