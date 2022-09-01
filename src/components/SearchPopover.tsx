import {
  Box,
  Button,
  Grid,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

interface SearchPopoverProps {}

const SearchPopover = () => {
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
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
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
      >
        <Box sx={{ width: "500px", height: "100px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField></TextField>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </React.Fragment>
  );
};

export default SearchPopover;
