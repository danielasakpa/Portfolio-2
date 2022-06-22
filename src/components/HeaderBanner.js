import {Box} from "@mui/material"
import HeaderHero from "./HeaderHero"

function HeaderBanner() {
  return (
     <Box sx={{height: {md: "500px", sm: "350px", xs: "250px"}}}>
       <HeaderHero />
    </Box>
  );
}

export default HeaderBanner;