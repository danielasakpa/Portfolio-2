import { useState } from "react";
import { Stack } from "@mui/material";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "../assets/images/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <Stack
        className="navbar"
        alignItems="center"
        direction="row"
        display="flex"
        justifyContent="space-between"
        sx={{ py: 3 }}
      >
        <a href="/">
          <img src={Logo} alt="logo" style={{ width: "80px" }} />
        </a>
        <Stack
          className="navbar-link"
          sx={{ display: { sm: "block", xs: "none" } }}
          direction="row"
          display="flex"
        >
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Blog
          </Link>
        </Stack>

        <Stack
          sx={{ display: { sm: "none", xs: "block" } }}
          className="navbar-menu"
        >
          {toggleMenu ? (
            <RiCloseLine
              color="#000000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
                <p>
                  <Link
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Work
                  </Link>
                </p>
                <p>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </p>
                <p>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </p>
                <p>
                  <Link
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Blog
                  </Link>
                </p>
              </div>
            </div>
          )}
        </Stack>
      </Stack>
    </nav>
  );
}

export default Navbar;
