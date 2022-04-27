import * as React from "react";
import { SwipeableDrawer } from "@mui/material";

export default function AppDrawer(props) {
  return (
    <SwipeableDrawer open={props.open}>
      <div>Menu item!</div>
    </SwipeableDrawer>
  );
}
