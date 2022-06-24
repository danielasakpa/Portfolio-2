import { Box, Grid, Button, TextField } from "@mui/material";

const Form = () => {
    return (
       <Box
            component="form"
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={6}
                  name="message"
                  label="message"
                  type="message"
                  id="message"
                  autoComplete="message"
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2, border: "1px solid #9F9F9F", color: "#9F9F9F"}}>
              send
            </Button>
          </Box>
    )
}

export default Form;