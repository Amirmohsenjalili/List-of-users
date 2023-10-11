import { useAtom } from 'jotai';
import { DrawerOpenAtom } from '../Components/Atoms';
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getUserData } from "../services/getUserData";
import LinearProgress from '@mui/material/LinearProgress';
import UserCard from '../Components/UsersCard';
import { UserDataType } from '../Components/UsersCard/types';
import style from './style';
import { Main } from '../Components/Main';

const Container = () => {

    const [open] = useAtom(DrawerOpenAtom);
    const { isLoading, error, data: userData } = useQuery<QueryKey,{message:string}, UserDataType[]>(["users"], getUserData);
    if (isLoading) return (
    <Main sx={style.myMain}>
      <LinearProgress />
    </Main>
    )
    if (error) return <div>An error has occurred: {error.message}</div>;
    return (
      <Main open={open} sx={style.myMain}>
        {userData.map((item) => (
        <UserCard
         key={item.id} 
         photoUrl={item.photoUrl}
         surName={item.surName}
         firstName={item.firstName}
         number={item.number}
         />))}
      </Main>
    )
  }
  
  export default Container;
