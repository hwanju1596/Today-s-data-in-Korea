import {
  Box,
  Button,
  Grid,
  Paper,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

interface SearchPopoverProps {
  title: string;
//   popularSearchWords: ReadonlyArray<{
//     count: number;
//     word: string;
//   }>
}

const SearchPopover = (props: SearchPopoverProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      <Button
        sx={{ flex: 1 }}
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
      >
        {<SearchIcon />}
        {props.title}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
            style: { width: '60%' },
        }}
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField focused={true} autoFocus={true}></TextField>
            </Grid>
            <Grid item xs={12}>
                <Paper>xs=12</Paper>
            </Grid>
          </Grid>
      </Popover>
    </React.Fragment>
  );
};

export default SearchPopover;
