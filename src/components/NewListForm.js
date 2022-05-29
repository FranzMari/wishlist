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
      <form onSubmit={props.formData.onSubmitAction}>
        <DialogTitle>{props.formData.boxTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.formData.boxMessage}</DialogContentText>
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
          <Button type="submit">{props.formData.confirmButtonLabel}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
