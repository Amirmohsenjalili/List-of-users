import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { TFieldValues, FormData } from './types'
import style from './styles.module.css'
import { addUser } from '../../services/getUserData';
import Layout from '../../Layout';

export default function InputFormProps() {

  const { mutate, isLoading, isError, error, isSuccess } = useMutation(addUser);

  const schema = z.object({
    firstName: z.string().min(3).max(20),
    surName: z.string().min(3).max(20),
    number: z.string().max(12),
    email: z.string().email(),
    photoUrl: z.string().url(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      surName: '',
      number: '',
      email: '',
      photoUrl: ''
    },
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    mutate(data);
  };
  return (
    <Layout>
      <Box
        sx={{
          py: 2,
          px: 40,
          display: 'grid',
          gap: 2,
          alignItems: 'center',
        }}
      >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          {["firstName", "surName", "number", "email", "photoUrl"].map((i, index) => (
            <div key={index}>
              <Input 
                sx={{
                  width: '60vw',
                }}
                {...register(i as keyof TFieldValues, { required: true })}
                placeholder={`Enter Your ${i}*`}  
              />
              {errors[i as keyof TFieldValues] && <p className={style.error}>{i} is required</p>}
            </div>
          ))}
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
      {isLoading && <p>Adding user ...</p>}
      {isError && error instanceof Error && <p>An error occurred: {error.message}</p>}
      {isSuccess && <p>User added successfully!</p>}
      </Box>
    </Layout>
  );
}