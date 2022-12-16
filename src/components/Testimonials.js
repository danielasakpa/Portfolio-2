import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { TestimonialItem } from "../assets/TestimonialItem";

const Testimonials = () => {
  return (
    <Box sx={{ mt: { md: 6, xs: 3 } }}>
      <Typography
        className="section-header"
        sx={{
          fontsize: { sm: "25px", xs: "10px" },
          fontFamily: "Neue Haas Grotesk Display Pro",
          textAlign: "left",
          fontWeight: "400"
        }}
        variant="h4"
      >
        What People Say
      </Typography>
      <HorizontalScrollbar test items={TestimonialItem} />
      <Box margin="0 auto" px={1} pt={3}>
        {TestimonialItem.map((item, index) => (
          <Stack
            display="flex"
            direction="column"
            key={index}
            sx={{
              width: "100%",
              display: { md: "none", xs: "block", borderRadius: "5px" }
            }}
            my={2}
            py={1}
            justifyContent="center"
          >
            <Typography
              variant="h2"
              textAlign="left"
              sx={{
                fontSize: "20px",
                fontFamily: "Neue Haas Grotesk Display Pro"
              }}
            >
              {item.text}
            </Typography>
            <Typography
              variant="h6"
              textAlign="left"
              mt={3}
              sx={{
                fontSize: "15px",
                fontFamily: "Neue Haas Grotesk Display Pro",
                fontStyle: "italic"
              }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
