import {useState} from "react"
import {Stack, Box, Typography} from "@mui/material"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {Link} from "react-router-dom"

function Navbar() {
    
 const [toggleMenu, setToggleMenu] = useState(false);
    
  return (
     <Stack className="navbar" alignItems="center" direction="row" display="flex" justifyContent="space-between" sx={{py: 3}}>
       <Link to="/">
          <Typography variant="h6" sx={{fontSize: {lg: "35px", xs: "20px"}}}>
            Daniel Asakpa
          </Typography>
       </Link>
       <Stack className="navbar-link" sx={{display: {sm: "block", xs: "none"}}} direction="row" display="flex">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
       </Stack>
    
       <Stack  sx={{display: {sm: "none", xs: "block"}}}  className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#work">Work</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#contact">Contact</a></p>
            <p><a href="#blog">Blog</a></p>
          </div>
        </div>
        )}
      </Stack>
     </Stack>
  );
}

export default Navbar;