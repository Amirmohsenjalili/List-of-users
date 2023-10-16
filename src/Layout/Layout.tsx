import React from "react";
import { Header } from "./Header";
import Box from "@mui/material/Box";
import { Prop } from "./types";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { useAtom } from "jotai";
import { DrawerOpenAtom } from "./Atoms";

export const Layout: React.FC<Prop> = () => {
  const [open] = useAtom(DrawerOpenAtom);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Sidebar />
      <Main open={open}>
        <Outlet />
      </Main>
    </Box>
  );
};
