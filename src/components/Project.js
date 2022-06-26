import { Box, Button, Stack, Typography } from "@mui/material";
import { SiGithub } from "react-icons/si";
import { IoMdOpen } from "react-icons/io";

const Project = ({ item }) => {
  return (
    <Box type="button" className="projectCard">
      <img src={item.imageUrl} className="ProjectPics" alt="ProjectPics" />
      <Stack className="project-detail">
        <Box className="project-detail-hover">
          <Typography
            className="project-text"
            sx={{
              fontSize: { md: "18px", xs: "15px" },
              fontFamily: "Neue Haas Grotesk Display Pro"
            }}
            mb={5}
          >
            {item.discription}
          </Typography>
          <Stack
            display="flex"
            sx={{ flexDirection: "row" }}
            gap={2}
            justifyContent="space-between"
            alignItems="center"
            px={6}
          >
            <a
              href={item.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#4E4E4E",
                  color: "#FFFFFF",
                  fontSize: { md: "30px", xs: "15px" },
                  borderRadius: "50%",
                  p: 3
                }}
                className="project-btn"
              >
                <IoMdOpen />
              </Button>
            </a>
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#4E4E4E",
                  color: "#FFFFFF",
                  fontSize: { md: "30px", xs: "15px" },
                  borderRadius: "50%",
                  p: 3
                }}
                className="project-btn"
              >
                <SiGithub />
              </Button>
            </a>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Project;
