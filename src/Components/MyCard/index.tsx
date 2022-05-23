import React from "react";
import { Box, Paper } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const MyCard = ({ children }: Props) => {
  return (
    <Box
      component={Paper}
      elevation={6}
      square
      sx={{
        backgroundColor: (t) => t.palette.grey[50],
        borderRadius: "5px",
        color: "primary.main",
        p: 5,
      }}
    >
      {children}
    </Box>
  );
};
export default MyCard;
