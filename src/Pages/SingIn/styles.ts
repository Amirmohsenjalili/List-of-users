import { SxProps } from "@mui/material";

const myBox: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  "& > :not(style)": {
    mx: "auto",
    mt: "100px",
    width: 600,
    height: 500,
  },
};

const myPaper: SxProps = {
  display: "flex",
  flexDirection: "column",
  pt: "30px",
  alignItems: "center",
  gap: "15px",
  backgroundColor: "rgba(100, 100, 100, 0.1)",
};

const myLockOutlinedIcon: SxProps = {
  backgroundColor: "rgba(10, 100, 10, 0.3)",
  borderRadius: 5,
  p: 1,
  mb: 5,
};

const myField: SxProps = {
  width: "350px",
};

const myButton: SxProps = {
  width: "350px",
  mb: 10,
};

export default { myBox, myPaper, myLockOutlinedIcon, myField, myButton };
