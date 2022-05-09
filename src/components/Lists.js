import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import lists from "../lists.json";

export default function Lists() {
  return (
    <List>
      {lists.Lists.map((list) => (
        <ListItem button key={lists.Lists.indexOf(list)}>
          <ListItemText primary={list.name} />
          <ListItemIcon sx={{ justifyContent: "space-between" }}>
            <EditIcon button />
            <DeleteIcon button />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
