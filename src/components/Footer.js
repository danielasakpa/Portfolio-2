import { Stack, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <Grid
        className="navbar"
        alignItems="center"
        container
        columnSpacing={{ xs: 1, md: 2 }}
        sx={{ py: 3 }}
      >
        <Grid item xs={12} sm={10}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
            display="flex"
            gap={2}
          >
            <Link to="/">
              <img
                className="footer-logo"
                src={Logo}
                alt="logo"
                style={{ width: "80px" }}
              />
            </Link>
            <Typography>&copy;2021DanielAsakap</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Stack
            className="footer-icons"
            justifyContent="center"
            alignItems="center"
            sx={{ flexDirection: "row", pt: { sm: 0, xs: 1 } }}
            display="flex"
            gap={5}
          >
            <a
              href="https://twitter.com/danycodes1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiTwitter />
            </a>

            <a href="/">
              <SiLinkedin />
            </a>

            <a
              href="https://github.com/danielasakpa"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub />
            </a>
          </Stack>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
