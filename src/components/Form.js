import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Grid,
  Button,
  TextField,
  CircularProgress,
  Backdrop,
  createTheme,
  ThemeProvider
} from "@mui/material";

const Form = ({ emailSent, setEmailSent }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setEmailSent("loading");

    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_k9th3hd",
        "contact_form",
        form.current,
        "YxU9ucgaEXCDwBI0X"
      )
      .then(
        (result) => {
          setEmailSent(result.text);
        },
        (error) => {
          setEmailSent(error.text);
        }
      );
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: {
              variant: "contained",
            },
            style: {
              width: "100%",
              padding: "9px 0",
              fontFamily: "Neue Haas Grotesk Display Pro",
              fontWeight: "400",
              backgroundColor: "black",
              border: "1px solid #000000",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#F5F5F5",
                color: "#000000",
                border: "1px solid #000000",
                boxShadow: "none",
              },
            },
          },
        ],
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box component="form" ref={form} onSubmit={sendEmail} validate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="user_name"
              required
              fullWidth
              id="name"
              label="Name"
              onChange={event => setName(event.target.value)}
              value={name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="user_email"
              autoComplete="email"
              onChange={event => setEmail(event.target.value)}
              value={email}
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
              onChange={event => setMessage(event.target.value)}
              value={message}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, boxShadow: 0, color: "#FFFFFF", background: "#4E4E4E" }}
        >
          send
        </Button>
        {emailSent === "loading" && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Form;
