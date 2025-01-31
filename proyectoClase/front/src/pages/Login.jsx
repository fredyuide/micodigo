import { useState } from "react";
import { Button, TextField } from "@mui/material";
import configs from "../configs/env";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();
        const response = await Services(
            {
                username: username,
                password: password
            },            
            configs.routes.initial.login
    )
        alert(response?.status ? "Login correcto" : response?.message)
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        },
        title: {
            marginBottom: "20px",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Login</h1>

            <form onSubmit={login} style={styles.form}>
                <TextField 
                    label="Usuario" 
                    variant="outlined"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
                <TextField 
                    label="Contraseña" 
                    type="password" 
                    variant="outlined" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Ingresar
                </Button>
            </form>
        </div>
    );
};

export default Login;
