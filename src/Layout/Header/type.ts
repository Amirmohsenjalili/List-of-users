import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import React from "react";

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  children: React.ReactNode;
}
