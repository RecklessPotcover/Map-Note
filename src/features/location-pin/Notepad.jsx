import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Popover,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

import { useState } from "react";

export default function Notepad() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CreateIcon />}
        onClick={handleOpen}
      >
        Note
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
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      style={{ width: "100%" }}
                      required
                      label="Title"
                      variant="outlined"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      style={{ width: "100%" }}
                      label="Content"
                      variant="outlined"
                      multiline
                      placeholder="Write down any thoughts..."
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button color="primary">Save</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Popover>
    </div>
  );
}
