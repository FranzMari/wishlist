import * as React from "react";
import { SwipeableDrawer } from "@mui/material";

export default function AppDrawer(props) {
  return (
    <SwipeableDrawer 
        open={props.isOpen}
        onOpen={props.handleOnOpen}
        onClose={props.handleOnClose}>
      <div>Menu item!</div>
    </SwipeableDrawer>
  );
}