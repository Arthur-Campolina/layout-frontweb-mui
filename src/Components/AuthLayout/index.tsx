import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import LoginLogo from "assets/images/logo-login.png";
import Logo from "Components/Logo";
import Paper from "@mui/material/Paper/Paper";

const AuthLayout = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: (t) => t.palette.grey[50],
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        xl={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          width: "100%",
        }}
      >
        <Box>
          <Logo logo={LoginLogo} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        xl={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          px: 6,
          py: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "Center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};
export default AuthLayout;
