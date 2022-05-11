import * as React from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

export default function AppDrawer(props) {
  return (
    <SwipeableDrawer
      open={props.isOpen}
      onOpen={props.handleOnOpen}
      onClose={props.handleOnClose}
    >
      <List >
        <ListItem button key="Settings">
          <ListItemText primary="Settings" />
          <ListItemIcon sx={{ justifyContent: "end" }}>
            <SettingsIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button key="About">
          <ListItemText primary="About" />
          <ListItemIcon sx={{ justifyContent: "end" }}>
            <InfoIcon  />
          </ListItemIcon>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
