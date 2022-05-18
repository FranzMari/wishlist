import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function NewListForm(props) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <form onSubmit={props.handleSave}>
        <DialogTitle>New Wishlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a name for the new wishlist.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="List name"
            type="text"
            fullWidth
            variant="standard"
            name="listName"
            value={props.formData.listName}
            onChange={props.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
