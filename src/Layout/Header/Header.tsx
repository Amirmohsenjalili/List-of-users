import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { AppBar } from "./styled";
import { DrawerOpenAtom } from "../atoms"

export const Header = () => {
  const [open, setOpen] = useAtom(DrawerOpenAtom);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Front end developers of Snap Grocery
        </Typography>
        <Button
          color="inherit"
          sx={{
            m: 2,
            "&:hover": {
              backgroundColor: "#90caf9",
            },
          }}
          onClick={() => navigate("/")}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
