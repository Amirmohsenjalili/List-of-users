import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import styles from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getUserDetail } from "../../services/Users/userData";
import { UserDataType } from "./types";
import LinearProgress from "@mui/joy/LinearProgress";

export const UsersDetail = () => {
  const { id: token } = useParams();
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery<
    QueryKey,
    { message: string },
    UserDataType
  >(["user", token], () => getUserDetail(token));

  if (isLoading)
    return <LinearProgress variant="soft" sx={styles.myLinearProgress} />;
  if (error)
    return <Box sx={styles.myBox}>An error has occurred: {error.message}</Box>;

  return (
    <Card variant="soft" orientation="horizontal" sx={styles.myCard}>
      <AspectRatio ratio=".85" sx={styles.myAspectRatio}>
        <img src={data.photoUrl} loading="lazy" alt="users photo" />
      </AspectRatio>
      <CardContent sx={styles.myCardContent}>
        <Typography fontWeight="xl" textColor="success.plainColor" level="h2">
          {data.firstName} {data.surName}
        </Typography>
        <Typography level="body-lg" noWrap>
          <Typography
            level="title-lg"
            textColor="success.plainColor"
            sx={styles.myTypography}
          >
            Email:
          </Typography>{" "}
          {data.email}
        </Typography>
        <Typography level="body-lg">
          <Typography
            level="title-lg"
            textColor="success.plainColor"
            sx={styles.myTypography}
          >
            Mobile:
          </Typography>{" "}
          {data.number}
        </Typography>
        <Typography level="body-lg">
          <Typography
            level="title-lg"
            textColor="success.plainColor"
            sx={styles.myTypography}
          >
            Job title:
          </Typography>{" "}
          {data.detail}
        </Typography>
        <Typography level="body-lg">
          <Typography
            level="title-lg"
            textColor="success.plainColor"
            sx={styles.myTypography}
          >
            Biography:
          </Typography>{" "}
          {data.bio}
        </Typography>
        <Button
          size="md"
          variant="outlined"
          color="neutral"
          onClick={() => navigate("/&/ListUser")}
          sx={styles.myButton}
        >
          Back To Home
        </Button>
      </CardContent>
    </Card>
  );
};
