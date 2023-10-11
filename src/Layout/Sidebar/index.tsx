import { useAtom } from 'jotai';
import { DrawerOpenAtom } from '../../Components/Atoms';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './styles';
import style from './style.module.css';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
export default function Sidebar() {
    
const theme = useTheme();
const [open, setOpen] = useAtom(DrawerOpenAtom);
const handleDrawerClose = () => {
  setOpen(false); 
};
const ListBar = ['List of Users', 'Create New User'];

return (
    <Drawer
    sx={styles.myDrawer}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
              ) : (
                  <ChevronRightIcon />
                  )}
        </IconButton>
      </DrawerHeader>
      <Divider />
        <List>
          {ListBar.map((text, index) => (
            <ListItem key={text} disablePadding>
              <Link to={index % 2 === 0 ? "ListUser" : "AddUser"} className={style.link}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <PeopleAltIcon /> : <PersonAddIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
    </Drawer>
      )
}