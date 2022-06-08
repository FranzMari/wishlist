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
  const [wishlists, setWishlists] = React.useState(
    JSON.parse(localStorage.getItem("wishlists")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("wishlists", JSON.stringify(wishlists));
  }, [wishlists]);

  const [formData, setFormData] = React.useState({
    boxTitle: "",
    boxMessage: "",
    listName: "",
    previousListName: "",
    listNameError: false,
    confirmButtonLabel: "",
  });

  const [pageInfo, setPageInfo] = React.useState({
    action: "",
  });

  const [isNewListModalVisible, setNewListModalVisible] = React.useState(false);

  const addNewWishlist = (event) => {
    event.preventDefault();
    const newList = {
      name: formData.listName,
      content: [{}],
    };
    setWishlists((prevState) => [...prevState, newList]);
    hideNewListModal();
  };

  const changeListName = (event) => {
    event.preventDefault();
    const list = wishlists.filter(
      (list) => list.name === formData.previousListName
    );
    const listId = wishlists.indexOf(list[0]);
    setWishlists((prevState) =>
      prevState.map((oldList) => {
        return prevState.indexOf(oldList) === listId
          ? { ...oldList, name: formData.listName }
          : oldList;
      })
    );
    hideNewListModal();
  };

  const deleteWishlist = (event, listId) => {
    event.stopPropagation();
    setWishlists((oldLists) =>
      oldLists.filter((list) => wishlists.indexOf(list) !== listId)
    );
  };

  const editWishlist = (event, listId) => {
    event.stopPropagation();
    setPageInfo((prevState) => {
      return {
        ...prevState,
        action: "edit",
      };
    });
    setFormData(() => {
      return {
        boxTitle: "Edit wishlist name",
        boxMessage: "Change the wishlist's name.",
        listName: wishlists[listId].name,
        previousListName: wishlists[listId].name,
        listNameError: false,
        helperText: "",
        confirmButtonLabel: "Save",
      };
    });
    setNewListModalVisible(true);
  };

  const showNewListModal = () => {
    setPageInfo((prevState) => {
      return {
        ...prevState,
        action: "add",
      };
    });
    setFormData(() => {
      return {
        boxTitle: "New Wishlist",
        boxMessage: "Enter a name for the new wishlist.",
        listName: "",
        listNameError: false,
        confirmButtonLabel: "Save",
        helperText: "Ciao!",
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
        previousListName: "",
        listNameError: false,
        helperText: "",
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
        handleSave={pageInfo.action === "add" ? addNewWishlist : changeListName}
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
