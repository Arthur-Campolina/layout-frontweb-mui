import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const MySelect = () => {
  const [group, setGroup] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setGroup(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Selecione o Grupo:
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={group}
          label="Selecione o Grupo:"
          onChange={handleChange}
        >
          <MenuItem value={1}>Dental</MenuItem>
          <MenuItem value={2}>Ponto Ini</MenuItem>
          <MenuItem value={3}>Multi</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default MySelect;
