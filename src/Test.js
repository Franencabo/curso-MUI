import React from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

const Test = () => {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
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

        <FormGroup>
          <FormControlLabel
            sx={{ margin: 3 }}
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Subscribe To Newsletter"
          />
        </FormGroup>

        <Button sx={{ margin: 3 }} type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Test;
