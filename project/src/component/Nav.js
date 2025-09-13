import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className="px-2 navbar navbar-expand-lg navbar-light bg-white w-100">

                <a className="navbar-brand mx-3 fs-4" href="#">Welcome To Dashboard!</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto d-flex align-items-center pe-5 me-5">
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={<span className="fs-5">Profile</span>}
                            menuVariant="secondary"
                            align="end"
                        >
                            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Activity</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav;
