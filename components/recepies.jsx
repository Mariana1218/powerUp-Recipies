import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const MaterialUIForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        // Add required validation if needed
      />

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        // Add email validation if needed
      />

      <TextField
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        margin="normal"
        // Add required validation if needed
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default MaterialUIForm;
