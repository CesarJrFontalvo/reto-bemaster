import { Google } from "@mui/icons-material"
import { Alert, Button, CircularProgress, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunk"
import { useMemo } from "react"
import { login } from "../../store/auth"

const formDate = {
    email: 'cesar@gmail.com',
    password: '123456'
}

export const LoginPages = () => {
      const { status, errorMessage } = useSelector((state) => state.auth);

      const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm(formDate);

      const isAuthenticating = useMemo(() => status === "checking", [status]);

      const onSubmit = (event) => {
        event.preventDefault();
        console.log({ email, password })
        dispatch(startLoginWithEmailPassword({ email, password }));

    };

    const onGoogleSignIn = () => {
        console.log("onGoogleSignIn");
        dispatch(startGoogleSignIn());
    };
    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="test@test.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid
                        container
                        display={!!errorMessage ? '' : 'none'}
                        sx={{ mt: 1 }}>
                        <Grid
                            item
                            xs={12}
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                {isAuthenticating && <span style={{ marginRight: '10px' }}><CircularProgress color="secondary" sx={{ width: 2 }} /></span>}
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                onClick={onGoogleSignIn}
                                variant="contained"
                                fullWidth
                            >
                                {isAuthenticating && <span style={{ marginRight: '10px' }}><CircularProgress color="secondary" /></span>}
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink}  to="/auth/register"> 
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>


    )
}
