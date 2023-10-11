import { SxProps } from '@mui/material';

const myDrawer: SxProps = {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
    },
}

export default { myDrawer };