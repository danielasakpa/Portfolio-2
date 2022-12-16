import { Box, Grid, Typography } from "@mui/material";
import Form from "./Form";

const Contact = ({ emailSent, setEmailSent }) => {
  return (
    <Box id="contact" sx={{ mt: { md: 15, xs: 10 } }}>
      <Typography
        className="section-header"
        sx={{
          fontsize: { sm: "25px", xs: "10px" },
          textAlign: "left"
        }}
        variant="h4"
      >
        Say Hello
      </Typography>
      <Grid container mt={5} spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              fontsize: { sm: "150px", xs: "30px" },
              fontFamily: "Neue Haas Grotesk Display Pro",
              fontWeight: "400"
            }}
          >
            Do you have a question or just want to say hi? Send me an email and
            I’ll do my best to reply within 24 hrs!
          </Typography>
          <Typography
            mt={2}
            variant="h5"
            sx={{
              fontsize: { sm: "150px", xs: "30px" },
              fontFamily: "Neue Haas Grotesk Display Pro",
              textAlign: "left"
            }}
          >
            If contact forms aren’t your thing... send me an email at
            danielasakpa@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: { md: 0, xs: 6 } }} md={6}>
          <Form emailSent={emailSent} setEmailSent={setEmailSent} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Contact;
