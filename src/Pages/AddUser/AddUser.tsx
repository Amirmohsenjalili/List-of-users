import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { TFieldValues, FormData } from "./types";
import { addUser } from "../../services/Users/userData";
import { Box, Typography } from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);
export const AddUser = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const { mutate, isError, error, isSuccess } = useMutation(addUser);

  const schema = z.object({
    firstName: z.string().min(3).max(20),
    surName: z.string().min(3).max(20),
    number: z.string().max(12),
    email: z.string().email(),
    photoUrl: z.string().url(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      surName: "",
      number: "",
      email: "",
      photoUrl: "",
    },
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData, e: any) => {
    e.preventDefault();
    e.target.reset();
    setOpen(true);
    mutate(data);
  };

  return (
    <Box
      sx={{
        mt: `100px`,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          {listInput.map((text, index) => (
            <div key={index}>
              <Input
                sx={{
                  width: "100%",
                }}
                {...register(text.title as keyof TFieldValues, {
                  required: true,
                })}
                placeholder={`Enter Your ${text.title}*`}
              />
              {errors[text.title as keyof TFieldValues] && (
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  color="error"
                >
                  {text.title} is required
                </Typography>
              )}
            </div>
          ))}
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
      {isError && error instanceof Error && (
        <p>An error occurred: {error.message}</p>
      )}
      {isSuccess && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{
              width: "100%",
            }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

const listInput = [
  {
    id: 0,
    title: "firstName",
  },
  {
    id: 1,
    title: "surName",
  },
  {
    id: 2,
    title: "number",
  },
  {
    id: 3,
    title: "email",
  },
  {
    id: 3,
    title: "photoUrl",
  },
];
