"use client";

import Box from "@mui/material/Box";

export function Title(props: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        color: "red",
      }}
    >
      <h1>{props.children}</h1>
    </Box>
  );
}
