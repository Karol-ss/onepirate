import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import styles from "./Categories.module.css";

import snorkeling from "../../assets/snorkeling.png";
import massage from "../../assets/massage.png";
import hiking from "../../assets/hiking.png";
import tour from "../../assets/tour.png";
import gastronomy from "../../assets/gastronomy.png";
import shopping from "../../assets/shopping.png";
import walking from "../../assets/walking.png";
import fitness from "../../assets/fitness.png";
import reading from "../../assets/reading.png";

const images = [
  {
    url: snorkeling,
    title: "Snorkeling",
    width: "460px",
  },
  {
    url: massage ,
    title: "Massage",
    width: "230px",
  },
  {
    url: hiking,
    title: "Hiking",
    width: "460px",
  },
  {
    url: tour,
    title: "Tour",
    width: "437px",
  },
  {
    url: gastronomy,
    title: "Gastronomy",
    width: "438px",
  },
  {
    url: shopping,
    title: "Shopping",
    width: "276px",
  },
  {
    url: walking,
    title: "Walking",
    width: "460px",
  },
  {
    url: fitness,
    title: "Fitness",
    width: "230px",
  },
{
  url: reading,
  title: "Reading",
  width: "460px",
},
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 360,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Categories() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "80%", justifyContent:"center"}}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
