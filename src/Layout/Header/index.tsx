import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { DrawerOpenAtom } from '../../Components/Atoms';
import style from './style';
import { AppBar } from '../../Components/AppBar'

export default function Header() {

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
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Front end developers of Snap Grocery
          </Typography>
          <Button color="inherit" sx={style.myButton} onClick={() => navigate('/')}>Logout</Button>
        </Toolbar>
      </AppBar>
  );
}