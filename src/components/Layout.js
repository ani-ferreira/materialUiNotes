import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import EventNoteIcon from "@mui/icons-material/EventNote";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: "100%",
      minHeight: "100vh",
      justifyContent: "center",
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper>
      <AppBar style={{ background: "transparent" }}>
        <Toolbar className="nav">
          <EventNoteIcon color="secondary" sx={{ fontSize: "2rem" }} />
          <Typography
            component={Link}
            variant="h5"
            color="secondary"
            to="/"
            sx={{
              textDecoration: "none",
              p: 3,
            }}
          >
            OrganizaciónApp
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </Paper>
  );
};

export default Layout;
