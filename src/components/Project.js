import { Box, Typography } from "@mui/material";
import { SiGithub } from "react-icons/si";
import { IoMdOpen } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5"
import { motion as m } from "framer-motion"

const Project = ({ item, isOpen, setIsOpen }) => {
  return (
    <m.div
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className="project"
      style={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "between",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "100%",
          marginBottom: "10px",
          cursor: "pointer"
        }}
        onClick={() => setIsOpen({ condition: !isOpen.condition })}
      >
        <IoCloseCircleOutline size={30} />
      </Box>
      <div className="projectImg">
        <img src={item.imageUrl} alt="" className="projectImg" />
      </div>
      <Box
        sx={{
          overflowY: "scroll",
          marginTop: "40px"
        }}
      >
        <Typography sx={{
          fontSize: { md: "25px", xs: "15px" },
          fontFamily: "Neue Haas Grotesk Display Pro",
        }}
          mb={2}>
          {item.discription}
        </Typography>
        <Box
          spacing={3}
          gap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginx: "auto",
            marginTop: "20px"
          }}>
          {item.techs.map((tech, i) => (
            <Typography
              px={2}
              sx={{
                fontSize: { md: "18px", xs: "15px" },
                fontFamily: "Neue Haas Grotesk Display Pro",
                backgroundColor: "#F2DEBA",
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
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            href={isOpen.project.liveSite}
            rel="noopener noreferrer"
            target="_blank"
            style={{
              listStyle: "none",
              textDecoration: "none",
            }}
          >
            <button
              style={{
                backgroundColor: "#4E4E4E",
                color: "#fff",
                padding: "10px 25px",
                borderRadius: "5px",
                marginRight: "10px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoMdOpen size={20} style={{
                marginRight: "10px"
              }} /> Live
            </button>
          </a>
          <a
            href={isOpen.project.github}
            rel="noopener noreferrer"
            target="_blank"
            style={{
              listStyle: "none",
              textDecoration: "none",
            }}
          >
            <button
              style={{
                backgroundColor: "#4E4E4E",
                color: "#fff",
                padding: "10px 25px",
                borderRadius: "5px",
                marginRight: "10px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SiGithub size={20} style={{
                marginRight: "10px"
              }} /> source
            </button>
          </a>
        </Box>
      </Box>
    </m.div >
  );
};

export default Project;
