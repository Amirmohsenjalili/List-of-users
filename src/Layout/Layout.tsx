import { Header } from "./Header";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { useAtom } from "jotai";
import { DrawerOpenAtom } from "./atoms";

export const Layout = () => {
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
