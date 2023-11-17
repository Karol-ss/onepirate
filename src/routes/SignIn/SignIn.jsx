import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import styles from "./SignIn.module.css";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container className={styles.signin} component="main" maxWidth="xs">
      <Box
        sx={{
          padding: "3.5em",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#F5F6FF",
          width: "800px",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Roboto Condensed",
            fontSize: "42px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "49.014px",
            textTransform: "uppercase",
            borderBottom: "5px solid #6867ac",
            textWrap: "nowrap",
            width: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Link className={styles.su} to={"/SignIn"}>
            <Button href="Signup" color="inherit">
              <Typography className={styles.su}>
            {"Not a member yet? Sign Up here"}
            </Typography>
            </Button>
          </Link>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.60)",
              fontFamily: "Work Sans",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "25.875px",
            }}
          >
            Email Address*
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.60)",
              fontFamily: "Work Sans",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "25.875px",
            }}
          >
            Password*
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, 
              background: "#6867AC",
              color: "#FFF",
              fontFamily: "Roboto Condensed",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "24.5px",
              textTransform: "uppercase",
              height: "3.5em",}}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                <Typography className={styles.fp}>
                Forgot password?
                </Typography>
              </Link>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>

  );
}

