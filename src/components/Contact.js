import { Box, Grid, Typography } from "@mui/material";
import Form from "./Form"

const Contact = () => {
  return (
    <Box id="contact" sx={{ mt: { md: 15, xs: 10 } }}>
      <Typography
        className="section-header"
        sx={{
          fontsize: { sm: "25px", xs: "10px" },
          textAlign: { sm: "left", xs: "center" },
          fontWeight: "400"
        }}
        variant="h4"
      >
        Say Hello
      </Typography>
      <Grid container mt={7} spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              fontsize: { md: "150px", xs: "30px" },
              fontFamily: "Neue Haas Grotesk Display Pro",
              textAlign: "left",
              fontWeight: "400"
            }}
          >
            Looking to start a new project or just want <br /> to say hi? Send
            me an email and I’ll do my <br /> best to reply within 24 hrs!
            <br />
          </Typography>
          <Typography 
              mt={2}
              variant="h5"
              sx={{
              fontsize: { md: "150px", xs: "30px" },
              fontFamily: "Neue Haas Grotesk Display Pro",
              textAlign: "left",
              fontWeight: "400"
            }}
              >
              If contact forms aren’t your thing... send me <br /> an email at
            hello@arnau.design
            </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: { md: 0, xs: 6 } }} md={6}>
           <Form />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Contact;
