import { useState } from "react"
import { projectItem } from "../assets/projectItem";
import { Box, Grid, Backdrop, Typography } from "@mui/material";
import Project from "./Project";
import { motion as m } from "framer-motion"

const Projects = () => {

  const [isOpen, setIsOpen] = useState({
    condition: false,
    project: {},
    id: ""
  });

  return (
    <Box id="work" sx={{ position: "relative" }}>
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
      <Box sx={{ display: { md: "block", xs: "block" }, margin: 'auto' }}>
        <Grid
          container
          spacing={5}
          sx={{
            paddingTop: "40px"
          }}
        >
          {projectItem.map((item) => (
            <>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                itemId={item.id} // NOTE: itemId is required for track items
                title={item.id}
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => setIsOpen({ condition: !isOpen.condition, project: item, id: item.id })}
              >
                <m.div
                  whileHover={{ y: '-10%' }}
                  transition={{
                    duration: 0.1,
                    ease: "easeInOut",
                  }}
                  type="button"
                  className="projectCard">
                  <img src={item.imageUrl} alt="" style={{
                    width: "90%",
                    height: "200px",
                    objectFit: "cover"
                  }} />
                  <Typography
                    sx={{
                      fontSize: { md: "25px", xs: "15px" },
                      fontFamily: "Neue Haas Grotesk Display Pro",
                      marginTop: "15px"
                    }}
                    mb={2}>
                    {item.projectNum}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "18px", xs: "15px" },
                      fontFamily: "Neue Haas Grotesk Display Pro"
                    }}
                  >
                    Built with:
                  </Typography>
                  <Box
                    spacing={3}
                    gap={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginx: "auto",
                      marginTop: "20px"
                    }}>
                    {item.techs.slice(0, 2).map((tech, i) => (
                      <Typography
                        px={2}
                        sx={{
                          fontSize: { md: "18px", xs: "15px" },
                          fontFamily: "Neue Haas Grotesk Display Pro",
                          backgroundColor: "#4E4E4E",
                          color: "#fff",
                          marginTop: "5px",
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingY: "5px",
                          borderRadius: "3px"
                        }}
                        key={i}>
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                </m.div>
              </Grid>
              {isOpen.condition && isOpen.id === item.id &&
                <Backdrop
                  open={isOpen.condition}
                  sx={{
                    zIndex: 10
                  }}
                >
                  <Project item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
                </Backdrop>
              }
            </>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default Projects;
