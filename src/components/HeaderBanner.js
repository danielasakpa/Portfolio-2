import {Box} from "@mui/material"
import HeaderHero from "./HeaderHero"

function HeaderBanner() {
  return (
     <Box sx={{height: {md: "500px", xs: "500px"}}}>
       <HeaderHero />
    </Box>
  );
}

export default HeaderBanner;