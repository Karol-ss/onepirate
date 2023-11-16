import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const navigation = [
  { component: "/", name: "Home" },
  { component: "/signIn", name: "SignIn" },
  { component: "/signUp", name: "SignUp" },
];

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar sx={{background: "#28282A",}} position="static">
        <Toolbar>
          <Typography
          align="center"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textTransform: "uppercase",
              color: "#FFF",
              fontFamily: "Roboto Condensed",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "38.4px" /* 160% */,
              textTransform: "uppercase",
            }}
          >
            Onepirate
          </Typography>
          <Button color="inherit" sx={{
            fontFamily: "Roboto Condensed",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "25.6px",
            textTransform: "uppercase",
          }}>Sign in</Button>
          <Button color="inherit" sx={{
            color: "#6867AC",
            fontFamily: "Roboto Condensed",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "25.6px",
            textTransform: "uppercase",
          }}>Sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
