import { Box, Grid, Typography, Stack } from "@mui/material";
import {
  DiReact,
  DiNodejsSmall,
  DiJsBadge,
  DiCss3,
  DiMongodb,
  DiBootstrap
} from "react-icons/di";
import { SiMaterialui, SiGithub, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <Box id="about" sx={{ mt: { md: 15, xs: 10 } }}>
      <Typography
        className="section-header"
        sx={{
          fontsize: { sm: "25px", xs: "10px" },
          textAlign: { sm: "left", xs: "center" },
          fontWeight: "400"
        }}
        variant="h4"
      >
        About
      </Typography>
      <Grid container mt={7} spacing={3}>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h5"
            sx={{
              fontsize: { md: "150px", xs: "30px" },
              fontFamily: "Neue Haas Grotesk Display Pro",
              textAlign: "left",
              fontWeight: "400"
            }}
          >
            I'm a product designer working on various <br /> projects on a wide
            range of clients. <br /> My skillset lies on creating branding
            packages <br /> & websites to deliver the full online <br />{" "}
            experience for new and also veteran businesses. <br /> You can often
            find me creating videos about <br /> design over on YouTube, or
            sharing <br /> my thoughts on my podcast, Dialogue With Designers
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{mt: {md: 0, xs: 6}}} md={5}>
          <Stack display="flex" alignItems="start" gap={5}>
            <Typography
              variant="h5"
              sx={{
                fontsize: { md: "150px", xs: "30px" },
                fontFamily: "Neue Haas Grotesk Display Pro",
                textAlign: "left",
                fontWeight: "400"
              }}
            >
              {" "}
              My Skills
            </Typography>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, md: 2 }}>
              <Grid item xs={6} sm={4}>
                <DiReact className="about-icon" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <DiNodejsSmall className="about-icon" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <DiJsBadge className="about-icon" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <DiCss3 className="about-icon" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <DiMongodb className="about-icon" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <DiBootstrap className="about-icon" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <SiMaterialui className="about-icon" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <SiGithub className="about-icon" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <SiExpress className="about-icon" />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default About;
