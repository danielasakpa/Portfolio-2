import { Box, Grid, Typography, Stack } from "@mui/material";
import {
  DiReact,
  DiNodejsSmall,
  DiJsBadge,
  DiCss3,
  DiMongodb,
  DiBootstrap
} from "react-icons/di";
import {
  SiMaterialui,
  SiGithub,
  SiExpress,
  SiNextdotjs,
  SiCsharp,
  SiDotnet,
  SiTailwindcss,
  SiMicrosoftsqlserver
} from "react-icons/si";

const About = () => {
  return (
    <Box id="about" sx={{ mt: { md: 15, xs: 10 } }}>
      <Typography
        className="section-header"
        sx={{
          fontsize: { sm: "25px", xs: "10px" },
          textAlign: { sm: "left", xs: "center" }
        }}
        variant="h4"
      >
        About Me
      </Typography>
      <Grid container mt={5} spacing={3}>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h4"
            sx={{
              fontsize: { sm: "150px", xs: "30px" },
              fontFamily: "Neue Haas Grotesk Display Pro",
              textAlign: "left",
              fontWeight: "400"
            }}
          >
            {" "}
            Hello 👋
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontsize: { sm: "150px", xs: "30px" },
              fontFamily: "Neue Haas Grotesk Display Pro",
              textAlign: "left",
              mt: 4,
              pr: { md: 1, xs: 0 }
            }}
          >
            I am self-taught passionate FrontEnd React developer, currently
            working as a freelance developer. I enjoy creating things that live
            on the internet. My interest in web development started back in
            2020.
          </Typography>
          <Typography
            mt={2}
            variant="h5"
            sx={{
              fontsize: { sm: "150px", xs: "30px" },
              fontFamily: "Neue Haas Grotesk Display Pro",
              textAlign: "left"
            }}
          >
            My main focus these days is building accessible, inclusive products
            and digital experiences at Upstatement for a variety of clients.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: { md: 0, xs: 6 } }} md={5}>
          <Stack display="flex" alignItems="start" gap={5}>
            <Typography
              variant="h4"
              sx={{
                fontsize: { sm: "150px", xs: "30px" },
                fontFamily: "Neue Haas Grotesk Display Pro",
                textAlign: "left",
                fontWeight: "400"
              }}
            >
              {" "}
              My Skills
            </Typography>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, md: 2 }}>
              <Grid variant="Card" item xs={4} sm={3}>
                <DiReact className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <DiNodejsSmall className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <DiJsBadge className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <DiCss3 className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <DiMongodb className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <SiTailwindcss className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <DiBootstrap className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <SiMaterialui className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <SiGithub className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <SiExpress className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <SiNextdotjs className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <SiCsharp className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <SiDotnet className="about-icon" />
              </Grid>
              <Grid item xs={4} sm={3}>
                <SiMicrosoftsqlserver className="about-icon" />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default About;
