import React from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import Testimonial from "./Testimonial";

import LeftArrowImage from "../assets/images/left arrow.png";
import RightArrowImage from "../assets/images/right arrow .png";

const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} px={2}>
      <img src={LeftArrowImage} className="right-arrow" alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} px={2}>
      <img src={RightArrowImage} className="left-arrow" alt="right-arrow" />
    </Typography>
  );
};

function HorizontalScrollbar({ items, test }) {
  return (
    <Box mt={2} sx={{ display: { md: "block", xs: "none" } }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {items.map((item) => (
          <Box itemId={item.id} title={item.id} key={item.id}>
            {test ? <Testimonial item={item} /> : ""}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
}

export default HorizontalScrollbar;
