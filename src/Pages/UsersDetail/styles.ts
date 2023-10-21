import { SxProps } from "@mui/material";

const myLinearProgress: SxProps = {
  width: "50vw",
  mt: "100px",
  mx: "auto",
};

const myBox: SxProps = {
  width: "50vw",
  mt: "100px",
  mx: "auto",
};

const myCard: SxProps = {
  width: "50vw",
  minWidth: "350px",
  mx: "auto",
  mt: 15,
  "--Card-padding": "20px",
};

const myAspectRatio: SxProps = {
  width: "30vw",
  minWidth: "10vw",
};

const myCardContent: SxProps = {
  my: "10px",
  gap: "20px",
  minWidth: "200px",
};

const myTypography: SxProps = {
  display: "block",
};

const myButton: SxProps = {
  transition: ".4s",
  "&:hover": {
    background: "rgba(150, 175, 200, .2)",
    transition: ".3s",
  },
};

export default {
  myLinearProgress,
  myBox,
  myCard,
  myAspectRatio,
  myCardContent,
  myTypography,
  myButton,
};
