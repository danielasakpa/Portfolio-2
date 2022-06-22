import { Box, Button, Stack, Typography } from "@mui/material";
import ProjectPics from "../assets/images/Rectangle3.png";

const Project = () => {
  return (
    <Box type="button" className="projectCard">
      <img src={ProjectPics} className="ProjectPics" alt="ProjectPics" />
      <Stack className="project-detail">
        <Box className="project-detail-hover">
          <Typography
            className="project-text"
            sx={{ fontSize: { md: "20px", xs: "10px" }, fontFamily: "Neue Haas Grotesk Display Pro", }}
            mb={5}
          >
            lets users write blog entries once they sign up with an
            account,After the user registers, he/she can go to the homepage and
            login with his/her credentials. The navigation bar will dynamically
            show different items depending on the user being logged in or out
          </Typography>
          <Stack
            display="flex"
            sx={{ flexDirection: { md: "row", xs: "column" } }}
            gap={2}
            justifyContent="space-between"
            alignItems="center"
            px={6}
          >
            <Button
              variant="contained"
              sx={{
                background: "#4E4E4E",
                color: "#FFFFFF",
                fontSize: "10px",
                px: 1,
                py: 2
              }}
              className="project-btn"
            >
              View it Live
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#4E4E4E",
                color: "#FFFFFF",
                fontSize: "10px",
                px: 1,
                py: 2
              }}
              className="project-btn"
            >
              Code on Github
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Project;
