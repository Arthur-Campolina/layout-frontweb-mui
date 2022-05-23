import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" target={"_blank"} href="https://pontoini.com.br/">
        Ponto Ini Sistemas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default Copyright;