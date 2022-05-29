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

  const [formData, setFormData] = React.useState({
    boxTitle: "",
    boxMessage: "",
    listName: "",
    confirmButtonLabel: "",
    onSubmitAction: "",
  });

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
    console.log(newList);
    setWishlists((prevState) => [...prevState, newList]);
  };

  const changeListName = (event, listId) => {
    event.preventDefault();
    console.log(listId, formData.listName);
    //setWishlists((prevState) => [...prevState, wishlist[listId].name: formData.listName]);
  };

  const deleteWishlist = (event, listId) => {
    event.stopPropagation();
    setWishlists((oldLists) =>
      oldLists.filter((list) => wishlists.indexOf(list) !== listId)
    );
  };

  const editWishlist = (event, listId) => {
    event.stopPropagation();
    setFormData(() => {
      return {
        boxTitle: "Edit wishlist name",
        boxMessage: "Change the wishlist's name.",
        listName: wishlists[listId].name,
        confirmButtonLabel: "Save",
        onSubmitAction: changeListName,
      };
    });
    setNewListModalVisible(true);
  };

  const [isNewListModalVisible, setNewListModalVisible] = React.useState(false);

  const showNewListModal = () => {
    setFormData(() => {
      return {
        boxTitle: "New Wishlist",
        boxMessage: "Enter a name for the new wishlist.",
        listName: "",
        confirmButtonLabel: "Save",
        onSubmitAction: addNewWishlist,
      };
    });
    setNewListModalVisible(true);
  };

  const hideNewListModal = () => {
    setNewListModalVisible(false);
    setFormData(() => {
      return {
        boxTitle: "",
        boxMessage: "",
        listName: "",
        confirmButtonLabel: "",
      };
    });
  };

  function changeValue(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    console.log(formData);
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
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={(event) =>
                      editWishlist(event, wishlists.indexOf(list))
                    }
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={(event) =>
                      deleteWishlist(event, wishlists.indexOf(list))
                    }
                  >
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
        //handleSave={formData.onSubmitAction}
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
