import { Stack, Button, Typography } from "@mui/material";
import HeroImage from "../assets/images/Typing.gif";
import AnimatedText from "../components/AnimatedText";

import Resume from "../assets/MyResume.pdf"

function HeaderHero() {
  return (
    <Stack
      margin="0 auto"
      display="flex"
      justifyContent="flex-end"
      sx={{
        mt: { sm: 4, xs: 2 },
        maxWidth: "1100px",
        flexDirection: { md: "row", xs: "column" },
        position: "relative"
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          maxWidth: "800px",
          width: "100%",
          top: { md: "50px", xs: "30px" },
          left: { md: "15px", xs: 0 }
        }}
      >
        <Typography
          className="header-text"
          paragraph
          sx={{
            fontSize: { md: "60px", sm: "50px", xs: "25px" },
            fontFamily: "Neue Haas Grotesk Display Pro",
            color: "#282828",
            fonteight: "bold",
            lineHeight: { sm: "1.2", xs: "1.7" }
          }}
        >
          <AnimatedText role="header" texts={"I’m Daniel Asakpa, a Full Stack "} />
          <AnimatedText role="header" texts={"developer & content creator "} />
          <AnimatedText role="header" texts={"based in Lagos, Nigeria. "} />
          <AnimatedText role="header" texts={"Available for freelance & "} />
          <AnimatedText role="header" texts={"collaborations "} /> <br />
        </Typography>
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#4E4E4E",
              color: "#FFFFFF",
              fontSize: "15px",
              maxWidth: { md: "300px", xs: "100%" },
              width: "100%",
              boxShadow: 0,
              py: { md: 2, xs: 1 }
            }}
          >
            Resume
          </Button>
        </a>
      </Stack>
      <img className="heroImage" src={HeroImage} alt="HeroImage" />
    </Stack>
  );
}

export default HeaderHero;
