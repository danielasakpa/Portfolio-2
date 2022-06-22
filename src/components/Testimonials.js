import {Box, Typography} from "@mui/material"
import HorizontalScrollbar from "./HorizontalScrollbar";
import { TestimonialItem } from "../assets/TestimonialItem";


const Testimonials = () => {
    return (
      <Box sx={{ mt: { md: 6, xs: 3}}}>
      <Typography
        className="section-header"
        sx={{
          fontsize: { sm: "25px", xs: "10px" },
          fontFamily: "Neue Haas Grotesk Display Pro",
          textAlign: { sm: "left", xs: "center" },
          fontWeight: "400"
        }}
        variant="h4"
      >
        What People Say
      </Typography>
        <HorizontalScrollbar test items={TestimonialItem}  />
      </Box>
    )
}

export default Testimonials;