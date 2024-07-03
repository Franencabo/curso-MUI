import React from "react";

import { Button } from "@mui/material";

const Test = () => {
  return (
    <div>
      <Button
        onClick={() => alert("Button clicked")}
        color="success"
        sx={{ margin: 3 }}
        size="large"
        variant="contained"
      >
        First
      </Button>
      <Button color="error" sx={{ margin: 3 }} size="medium" variant="outline">
        Second
      </Button>
      <Button color="info" sx={{ margin: 3 }} size="small" variant="text">
        Third
      </Button>
    </div>
  );
};

export default Test;
