import { Stack, Typography } from "@mui/material";
import HeroImage from "../assets/images/Typing.gif";
import AnimatedText from "../components/AnimatedText";


function HeaderHero() {

  return (
    <Stack
      margin="0 auto"
      display="flex"
      justifyContent="flex-end"
      sx={{
        mt: { sm: 7, xs: 5 },
        maxWidth: "1100px",
        flexDirection: { md: "row", xs: "column" },
        position: "relative"
      }}
    >
      <Typography
        className="header-text"
        paragraph
        sx={{
          fontSize: { md: "60px", sm: "50px", xs: "25px" },
          position: "absolute",
          top: "90px",
          left: "15px",
          color: "#282828",
          fonteight: "bold",
          lineHeight: { sm: "1.2", xs: "1.7" }
        }}
      >
        <AnimatedText role="header" texts={"I’m Arnau Ros, a graphic"} /> <br />
        <AnimatedText role="header" texts={"designer & content creator"} /> <br />
        <AnimatedText role="header" texts={"based in Barcelona."} /> <br />
        <AnimatedText role="header" texts={"Available for freelance &"} /> <br />
        <AnimatedText role="header" texts={"collaborations"} /> <br />
      </Typography>
      <img
        className="heroImage"
        src={HeroImage}
        alt="HeroImage"
      />
    </Stack>
  );
}

export default HeaderHero;
