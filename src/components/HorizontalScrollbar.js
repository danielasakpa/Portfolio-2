import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import Project from "./Project";

import LeftArrowImage from "../assets/images/left arrow.png";
import RightArrowImage from "../assets/images/right arrow .png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} px={2}>
      <img src={LeftArrowImage} className="right-arrow" alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} px={2}>
      <img src={RightArrowImage} className="left-arrow" alt="right-arrow" />
    </Typography>
  );
};

function HorizontalScrollbar({ items }) {
  return (
    <Box mt={4} sx={{ display: { md: "block", xs: "none" } }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {items.map((item) => (
          <Box
            itemId={item.id} 
            title={item.id}
            key={item.id}
          >
            <Project item={item} />
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
}

export default HorizontalScrollbar;
