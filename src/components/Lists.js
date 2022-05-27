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
  
  const addNewWishlist = (event) => {
    event.preventDefault();
    addWishlist();
    hideNewListModal();    
  };

  const addWishlist = () => {
    const newList = {
      name: formData.listName,
      content: [{}],
    };
    setWishlists((prevState) => [...prevState, newList]);
  };

  const deleteWishlist = (event, listId) => {
    event.stopPropagation()
    setWishlists(oldLists => oldLists.filter(list => wishlists.indexOf(list) !== listId))
    
}

  const [isNewListModalVisible, setNewListModalVisible] = React.useState(false);

  const showNewListModal = () => {
    setNewListModalVisible(true);
  };

  const hideNewListModal = () => {
    setNewListModalVisible(false);
    setFormData(() => {
      return {
        listName: "",
      };
    });
  };

  const [formData, setFormData] = React.useState({
    listName: "",
  });

  function changeValue(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
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
                  <IconButton edge="end" aria-label="delete" onClick={(event) => deleteWishlist(event, wishlists.indexOf(list))} >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              }
            >
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
        handleChange={changeValue}
        handleSave={addNewWishlist}
        formData={formData}
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
