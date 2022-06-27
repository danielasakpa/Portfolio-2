import {useEffect} from "react"
import { projectItem } from "../assets/projectItem";
import { Box, Stack, Typography } from "@mui/material";
import Project from "./Project";

import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    
useEffect(() => {
    AOS.init({
    duration : 2000
   });
    AOS.refresh();
  }, []);
    
  return (
    <Box id="work">
      <Typography
        className="section-header"
        sx={{
          fontsize: { sm: "25px", xs: "10px" },
          fontFamily: "Neue Haas Grotesk Display Pro",
          textAlign: "left",
        }}
        variant="h4"
      >
        Some Things I’ve Built

      </Typography>
      <Box sx={{ display: { md: "block", xs: "block" } }}>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ flexDirection: { sm: "row", xs: "column" } }}
          gap={3}
        >
          {projectItem.map((item) => (
            <Box
              itemId={item.id} // NOTE: itemId is required for track items
              title={item.id}
              key={item.id}
              
            >
              <Typography variant="h5" pb={4} textAlign="left" mt={7}>
                {item.projectNum}
              </Typography>
              <Project item={item} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
export default Projects;
