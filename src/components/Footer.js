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
            <Typography>&copy2021DanielAsakap</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Grid
            className="footer-icons"
            container
            sx={{ mt: { xs: 2, sm: 0 } }}
            columnSpacing={{ xs: 1}}
          >
            <Grid item xs={4}>
              <a href="https://twitter.com/oba_code" rel="noopener noreferrer" target="_blank">
                <SiTwitter />
              </a>
            </Grid>
            <Grid item xs={4}>
              <a href="/">
                <SiLinkedin />
              </a>
            </Grid>
            <Grid item xs={4}>
              <a href="https://github.com/danielasakpa" rel="noopener noreferrer" target="_blank">
                <SiGithub />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
