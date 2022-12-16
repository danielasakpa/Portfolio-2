import { Stack, Typography } from "@mui/material";

const Testimonial = ({ item }) => {
  return (
    <Stack
      className="testimonial"
      display="flex"
      px={7}
      justifyContent="center"
      alignItems="center"
      mt={6}
      py={1}
    >
      <Typography
        variant="h2"
        textAlign="center"
        mt={12}
        sx={{ fontSize: "30px", fontFamily: "Neue Haas Grotesk Display Pro" }}
      >
        {item.text}
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        mt={3}
        sx={{
          fontSize: "25px",
          fontFamily: "Neue Haas Grotesk Display Pro",
          fontStyle: "italic"
        }}
      >
        {item.name}
      </Typography>
    </Stack>
  );
};

export default Testimonial;
