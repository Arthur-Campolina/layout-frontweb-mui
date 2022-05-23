import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Copyright from "Components/Copyright";
import {
  FORGOT_PASSWORD_RECUPERAR_SENHA,
  FORGOT_PASSWORD_ENVIAR,
  FORGOT_PASSWORD_VOLTAR,
} from "Utils/translate";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userCode: data.get("user-code"),
      companyCode: data.get("company-code"),
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
        {FORGOT_PASSWORD_RECUPERAR_SENHA}
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {FORGOT_PASSWORD_ENVIAR}
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate("/auth/login")}
        >
          {FORGOT_PASSWORD_VOLTAR}
        </Button>
        <Grid item xs>
          <Copyright sx={{ p: 5 }} />
        </Grid>
      </Box>
    </Box>
  );
};
export default ForgotPassword;
