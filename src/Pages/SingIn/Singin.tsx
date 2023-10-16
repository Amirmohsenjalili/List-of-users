import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/Users/userData";
import { UserDataType } from "../Home/UserCards/types";
import { FormData } from "../AddUser/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import styles from "./styles";

export const SignIn = () => {
  const { data: userData } = useQuery<
    QueryKey,
    { message: string },
    UserDataType[]
  >(["users"], getUserData);
  const schema = z.object({
    number: z.string().max(12),
    email: z.string().email(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      number: "",
    },
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const onSubmit = (data: FormData) => {
    const match = userData?.find(
      (user) => user.email === data.email && user.number === data.number
    );
    if (match) {
      enqueueSnackbar("Welcome to the user list");
      navigate("/&/ListUser");
    } else {
      enqueueSnackbar("Check your email or phone number !!!");
    }
  };
  return (
    <Box sx={styles.myBox}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={3} sx={styles.myPaper}>
          <Typography variant="h4" gutterBottom>
            Sign in
          </Typography>
          <LockOutlinedIcon sx={styles.myLockOutlinedIcon} />
          <TextField
            required
            id="outlined-required"
            label="Email Address"
            sx={styles.myField}
            size="small"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            required
            id="outlined-required"
            label="Password(Phone number)"
            sx={styles.myField}
            size="small"
            {...register("number", { required: true })}
            error={!!errors.number}
            helperText={errors.number?.message}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
            sx={styles.myField}
          />
          <Button
            variant="contained"
            size="small"
            type="submit"
            sx={styles.myButton}
          >
            SIGN IN
          </Button>
        </Paper>
      </form>
    </Box>
  );
};
