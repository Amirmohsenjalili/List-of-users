import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/getUserData";
import { UserDataType } from '../../Components/UsersCard/types';
import { FormData } from '../AddUser/types'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

  const { data: userData } = useQuery<QueryKey,{message:string}, UserDataType[]>(["users"], getUserData);
  const schema = z.object({
    number: z.string().max(12),
    email: z.string().email(),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      number: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit:any = (data: FormData) => {
    const match = userData?.find(user => user.email === data.email && user.number === data.number);
    if (match) {
        alert('Welcome to the user list ');
        navigate('/ListUser');
    } else {
        alert('Check your email or phone number')
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mx: 'auto',
          mt: '100px',
          width: 600,
          height: 500,
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper 
          elevation={3}
          sx={{
              display: 'flex',
              flexDirection: 'column',
              pt: '30px',
              alignItems: 'center',
              gap: '15px',
              backgroundColor: 'rgba(100, 100, 100, 0.1)'
          }}
          >
          <Typography variant="h4" gutterBottom>
              Sign in
          </Typography>
          <LockOutlinedIcon 
          sx={{
            backgroundColor: 'rgba(10, 100, 10, 0.3)',
            borderRadius: 5,
            p: 1,
            }}/>
          <TextField
            required
            id="outlined-required"
            label="Email Address"
            sx={{
              width: '350px',
              mt: 4
            }}
            size="small"
            {...register('email', { required: true })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            required
            id="outlined-required"
            label="Password(Phone number)"
            sx={{
              width: '350px',
            }}
            size="small"
            {...register('number', { required: true })}
            error={!!errors.number}
            helperText={errors.number?.message}
          />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" sx={{width: '350px'}} />
          <Button variant="contained" size="small"  type="submit" sx={{width: '350px', mb: 10}}>
            SIGN IN
          </Button>
        </Paper>
      </form>
    </Box>
  );
}