import { QueryKey, useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/Users/userData";
import LinearProgress from "@mui/material/LinearProgress";
import { UserCard } from "./UserCards";
import { UserDataType } from "./UserCards/types";
import { Box } from "@mui/material";

export const Home = () => {
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery<QueryKey, { message: string }, UserDataType[]>(
    ["users"],
    getUserData
  );
  if (isLoading)
    return (
      <Box sx={{ mt: 10 }}>
        <LinearProgress />
      </Box>
    );
  if (error) return <div>An error has occurred: {error.message}</div>;
  return (
    <Box sx={{ mt: 10 }}>
      {userData.map((item) => (
        <UserCard
          key={item.id}
          photoUrl={item.photoUrl}
          surName={item.surName}
          firstName={item.firstName}
          number={item.number}
        />
      ))}
    </Box>
  );
};
