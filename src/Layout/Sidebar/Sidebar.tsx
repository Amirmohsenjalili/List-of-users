import { useAtom } from "jotai";
import { DrawerOpenAtom } from "../Atoms/atoms";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { DrawerHeader } from "./styled";

export const Sidebar = () => {
  const theme = useTheme();
  const [open, setOpen] = useAtom(DrawerOpenAtom);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {ListBar.map((text, index) => (
          <ListItem key={index} disablePadding>
            <Link
              to={index % 2 === 0 ? "ListUser" : "AddUser"}
              className={styles.link}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <PeopleAltIcon /> : <PersonAddIcon />}
                </ListItemIcon>
                <ListItemText primary={text.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

  const ListBar = [
    {
      id: 1,
      label: "List of Users",
      value: "usersList",
    },
    {
      id: 2,
      label: "Create New User",
      value: "createNewUser",
    },
  ];