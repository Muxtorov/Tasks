import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import { useFormik } from "formik";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Box
        sx={{
          marginTop: 18,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>

        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Имя:"
              name="name"
              onChange={formik.handleChange}
              autoFocus
              value={formik.values.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email:"
              type="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль:"
              type="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Отправить
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};
