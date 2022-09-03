import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
interface SearchDialogProps {
  title: string;
}

const SearchDialog = (props: SearchDialogProps) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleOpen}>
        {props.title}
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={false}>
        <DialogContent>
          <Grid container spacing={5}>
            <Grid item md={11}>
              <TextField fullWidth label={props.title} autoFocus></TextField>
            </Grid>
            <Grid item md={1}>
              <DialogActions>
                <IconButton aria-label="Cancle" onClick={handleClose}>
                  <CancelIcon />
                </IconButton>
              </DialogActions>
            </Grid>
            <Grid item md={6}>
                인기검색어
            </Grid>
            <Grid item md={6}>
                추천검색어
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default SearchDialog;
