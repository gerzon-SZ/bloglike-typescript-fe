import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputFormText from './inputs/inputFormText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Controller, useForm } from 'react-hook-form';
interface FormUserProps {
  context: string;
}

export default function FormUser({ context }: FormUserProps) {
  const { control, handleSubmit } = useForm();
  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {context === 'edit' ? 'Update Post' : 'Add User'}
        </Typography>
        <Box
          component="form"
          noValidate
          //   onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputFormText
                type="text"
                name="firstName"
                label="First Name"
                control={control}
                rules={{ required: 'First Name is required' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputFormText
                type="text"
                name="lastName"
                label="Last Name"
                control={control}
                rules={{ required: 'Last Name is required' }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputFormText
                type="text"
                name="username"
                label="Username"
                control={control}
                rules={{ required: 'Last Name is required' }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputFormText
                type="text"
                name="email"
                label="Email"
                control={control}
                rules={{ required: 'Email is required' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue="Secret123!"
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    name="password"
                    type="hidden"
                    id="password"
                    autoComplete="new-password"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Controller
                    name="admin" // Replace with the appropriate field name
                    control={control}
                    defaultValue={selectedRow ? entities[selectedRow].admin : true} // Set the default value as needed
                    render={({ field }) => (
                    <FormControlLabel
                        control={<Checkbox {...field} color="primary" />}
                        label="Admin"
                    />
                    )}
                /> */}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {context === 'edit' ? 'Save' : 'Add'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
