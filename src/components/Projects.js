import { projectItem } from "../assets/projectItem";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Project from "./Project";

const Projects = () => {
  return (
    <Box>
      <Typography
        className="section-header"
        sx={{
          fontsize: { sm: "25px", xs: "10px" },
          textAlign: { sm: "left", xs: "center" },
          fontWeight: "400"
        }}
        variant="h4"
      >
        Projects
      </Typography>
      <HorizontalScrollbar items={projectItem} />
      <Box sx={{ display: { md: "none", xs: "block" } }}>
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
              <Typography variant="h4" pb={4} textAlign="left" mt={7}>
                01 Example
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
