import React, { useState } from 'react';
import { Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './login.css';

interface State {
    password: string;
    showPassword: boolean;
    flagPassword: boolean;
}

const Login = () => {

    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
        flagPassword: false
    });

    const { password, showPassword, flagPassword } = values;

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {

        const passwordFormat = /^(((?=.*[a-z])(?=.*[A-Z]))((?=.*[a-z])(?=.*[0-9]))((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.,=()/¡!¿?])))(?=.{6,})/;

        setValues({ ...values, [prop]: event.target.value });

        if (event.target.value.match(passwordFormat)) {
            setValues({
                ...values,
                flagPassword: true
            });
        }
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

    // const [ buttonState, SetButtonValue ] = useState();

    const [ inputValue, setInputValue ] = useState({ emailString: '', flagEmail: false });

    const { emailString, flagEmail } = inputValue;

    const handleInputChange = ( e: any) => {

        const mailFormat = /^[a-z0-9]+@[a-z]+\.[a-z]{3,3}/;
        
        setInputValue( e.target.value );

        if (e.target.value.match(mailFormat)) {
            setInputValue({
                ...inputValue,
                flagEmail: true
            }) 
        }

    }

    return (
        <div className='cardLogin'>
            <Card sx={{ m: 1, width: '40%' }}>
                <div className='containerForm'>
                    <label className='labelColor'>START FOR FREE</label>
                    <h3 className='titleCard'>Sign up to Zoho</h3>
                    <label className='labelColor'>Already a member? <a href='/'>Log in</a></label>

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
                                value={ emailString }
                                onChange={ handleInputChange }
                            />

                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="6+ Characters, 1 capital letter"
                                    value={password}
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
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                />
                            </FormControl>


                        </Box>

                        <Button sx={{ m: 1, width: '100%' }} variant="contained" disabled={ flagEmail || flagPassword ? false : true }>Create an account</Button>
                    </form>

                    <div className='conteinerFooter'>
                        <footer className='footerColor'>This site is protected by reCAPTCHA and the Google <a href='/'>Privicy Policy</a> and <a href='/'>Termns of Service</a></footer>
                    </div>

                </div>
            </Card>

        </div>
    )
}

export default Login;