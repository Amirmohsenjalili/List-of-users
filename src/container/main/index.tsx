import { QueryKey, useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/getUserData";
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import UserCard from '../../Components/UsersCard/UserCard';
import { UserDataType } from '../../Components/UsersCard/types';

const Main = () => {
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
  
  export default Main;