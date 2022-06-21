import {Box, Typography} from "@mui/material"
import HorizontalScrollbar from "./HorizontalScrollbar";
import { TestimonialItem } from "../assets/TestimonialItem";


const Testimonials = () => {
    return (
      <Box sx={{ mt: { md: 15, xs: 10}}}>
      <Typography
        className="section-header"
        sx={{
          fontsize: { sm: "25px", xs: "10px" },
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