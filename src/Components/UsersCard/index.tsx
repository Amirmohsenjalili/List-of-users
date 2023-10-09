import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { Box, CardActionArea } from '@mui/material';
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/getUserData"
import { UserDataType } from './User.type'

function UserCard({ photoUrl, surName, firstName }:UserDataType) {
  return (
    <Box display="inline-flex" flexWrap="wrap" justifyContent="center">
      <Card sx={{ maxWidth: 345, m: 2}}>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus qui praesentium veritatis ipsa ab expedita id in deleniti fugit harum pariatur, voluptates, maxime ullam. Sit porro quibusdam culpa fugiat quia?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
const User = () => {
  const { isLoading, error, data: userData } = useQuery<QueryKey,{message:string}, UserDataType[]>(["users"], getUserData);
  if (isLoading) return (
  <Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box>
  )
  if (error) return <div>An error has occurred: {error.message}</div>;
  return (
    <div>
      {userData.map((i) => (
      <UserCard
       key={i.id} 
       photoUrl={i.photoUrl}
       surName={i.surName}
       firstName={i.firstName}
       number={i.number}
       />))}
    </div>
  )
}

export default User;
