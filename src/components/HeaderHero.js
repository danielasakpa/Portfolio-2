import {Stack, Typography} from "@mui/material"
import HeroImage from "../assets/images/HeroImage.png"

function HeaderHero() {
  return (
      <Stack margin="0 auto" display="flex" justifyContent="flex-end" sx={{mt: {lg: 7, xs: 5},  maxWidth: "1100px", flexDirection: {md: "row", xs: "column"}, position: "relative"}}>
       <Typography variant="h1" sx={{fontSize: {md: "60px", sm: "50px", xs: "25px"}, position: "absolute", top: "90px", left: "15px", color: "#282828", fonteight: "bold", lineHeight: {sm: "1.2", xs: "1.7"}}}>
          I’m Arnau Ros, a graphic <br /> designer & content creator <br /> based in Barcelona. <br /> Available for freelance & <br /> collaborations.
      </Typography>
      <img className="HeroImage" src={HeroImage} alt="HeroImage" style={{weight: "500px", height: "500px"}} />
      </Stack>
  );
}

export default HeaderHero;