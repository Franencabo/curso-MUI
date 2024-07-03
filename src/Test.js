import React from "react";

import { TextField, Typography } from "@mui/material";

const Test = () => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <TextField
        type="text"
        sx={{ margin: 3 }}
        placeholder="Name"
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
      />
      <TextField
        type="email"
        sx={{ margin: 3 }}
        placeholder="Email"
        variant="standard"
      />
      <TextField
        type="password"
        sx={{ margin: 3 }}
        placeholder="Passowrd"
        variant="filled"
      />
      <Typography sx={{ margin: 3 }} variant="h1">
        {value}
      </Typography>
    </div>
  );
};

export default Test;
