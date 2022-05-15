import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Stack,
  Box,
  Fab,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function Lists() {
  const [wishlists, setWishlists] = React.useState([]);

  const newWishlist = () => {
    setWishlists((prevState) => {
      return {
        ...prevState,
        isDrawerOpen: !prevState.isDrawerOpen,
      };
    });
  };

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };
  return (
    <Box>
      <List>
        {wishlists.map((list) => (
          <ListItem
            button
            key={wishlists.indexOf(list)}
            secondaryAction={
              <Stack direction="row" spacing={2}>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Stack>
            }
          >
            <ListItemText primary={list.name} />
          </ListItem>
        ))}
      </List>
      <Fab
        sx={fabStyle}
        color="primary"
        aria-label="add"
        handleClick={newWishlist}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
