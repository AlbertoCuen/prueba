import React from 'react';
import { Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './login.css';

interface State {
    password: string;
    showPassword: boolean;
}

const Login = () => {

    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className='cardLogin'>
            <Card sx={{ m: 1, width: '40%' }}>
                <div className='containerForm'>
                    <label className='labelColor'>START FOR FREE</label>
                    <h3 className='titleCard'>Sign up to Zoho</h3>
                    <label className='labelColor'>Already a member? <a href='#'>Log in</a></label>

                    <form>

                        <Box
                            component="div"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '100%' },
                            }}
                            style={{ paddingTop: "30px" }}
                        >

                            <TextField
                                id="outlined-textarea"
                                label="E-mail"
                                placeholder="name@mail.com"
                                fullWidth
                                multiline
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                }}
                            />


                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    placeholder="6+ Characters, 1 capital letter"
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    label="Password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                />
                            </FormControl>


                        </Box>

                        <Button sx={{ m: 1, width: '100%' }} variant="contained" >Create an account</Button>
                    </form>

                    <div className='conteinerFooter'>
                        <footer className='footerColor'>This site is protected by reCAPTCHA and the Google <a href='#'>Privicy Policy</a> and <a href='#'>Termns of Service</a></footer>
                    </div>

                </div>
            </Card>

        </div>
    )
}

export default Login;