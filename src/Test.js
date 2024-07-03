import React from "react";

import { Button, TextField, Typography } from "@mui/material";

const Test = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return inputs;
  };

  return (
    <div>
      <form>
        <TextField
          name="name"
          onChange={handleChange}
          value={inputs.name}
          type="text"
          sx={{ margin: 3 }}
          placeholder="Name"
          variant="outlined"
        />
        <TextField
          name="email"
          onChange={handleChange}
          value={inputs.email}
          type="email"
          sx={{ margin: 3 }}
          placeholder="Email"
          variant="standard"
        />
        <TextField
          name="password"
          onChange={handleChange}
          value={inputs.password}
          type="password"
          sx={{ margin: 3 }}
          placeholder="Passowrd"
          variant="filled"
        />

        <Button
          onSubmit={handleSubmit}
          sx={{ margin: 3 }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
      <Typography sx={{ margin: 3 }} variant="h5">
        {JSON.stringify(inputs)}
      </Typography>
    </div>
  );
};

export default Test;
