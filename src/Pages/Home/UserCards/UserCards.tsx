import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { UserDataType } from "./types";

export const UserCard = ({ photoUrl, surName, firstName }: UserDataType) => {
  return (
    <Box display="inline-flex" flexWrap="wrap" justifyContent="center">
      <Card
        sx={{
          maxWidth: 345,
          m: 2,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={photoUrl}
            alt="photoUrl"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {firstName} {surName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              qui praesentium veritatis ipsa ab expedita id in deleniti fugit
              harum pariatur, voluptates, maxime ullam. Sit porro quibusdam
              culpa fugiat quia?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};