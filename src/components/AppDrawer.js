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
      <List>
        <ListItem button key="Settings">
          <ListItemText primary="Settings" />
          <ListItemIcon>
            <SettingsIcon x={{ justifyContent: "end" }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button key="About">
          <ListItemText primary="About" />
          <ListItemIcon>
            <InfoIcon sx={{ justifyContent: "end" }} />
          </ListItemIcon>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
