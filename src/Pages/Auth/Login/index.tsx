import * as React from "react";
import { Box, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Copyright from "Components/Copyright";
import {
  LOGIN_ESQUECI_A_SENHA,
  LOGIN_ENTRAR,
  LOGIN_LEMBRAR_ME,
} from "Utils/translate";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userCode: data.get("user-code"),
      companyCode: data.get("company-code"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "Center",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {LOGIN_ENTRAR}
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="user-code"
          label="Código do usuário"
          name="user-code"
          autoComplete="user-code"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="company-code"
          label="Código da empresa"
          name="company-code"
          autoComplete="company-code"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={LOGIN_LEMBRAR_ME}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate("/painel")}
        >
          {LOGIN_ENTRAR}
        </Button>
        <Grid item xs>
          <Link to="/auth/esqueci-a-senha">{LOGIN_ESQUECI_A_SENHA}</Link>
          <Copyright sx={{ p: 5 }} />
        </Grid>
      </Box>
    </Box>
  );
};
export default Login;
