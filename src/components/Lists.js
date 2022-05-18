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
import NewListForm from "./NewListForm";

export default function Lists() {
  const [wishlists, setWishlists] = React.useState([]);

  const addWishlist = (event) => {
    event.preventDefault();
    setWishlists([{"name": "List 1","content": [{}]}]);
  };

  const [isNewListModalVisible, setNewListModalVisible] = React.useState(false);

  const showNewListModal = () => {
    setNewListModalVisible(true);
  };

  const hideNewListModal = () => {
    setNewListModalVisible(false);
  };

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };

  return (
    <Box>
      {wishlists.length !== 0 ? (
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
              }>
              <ListItemText primary={list.name} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            padding: "1em",
            textAlign: "center",
          }}
        >
          No lists available. Use the action button to create one
        </Box>
      )}
      <NewListForm
        open={isNewListModalVisible}
        handleClose={hideNewListModal}
        handleSave={addWishlist}
      />
      <Fab
        sx={fabStyle}
        color="primary"
        aria-label="add"
        onClick={showNewListModal}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
