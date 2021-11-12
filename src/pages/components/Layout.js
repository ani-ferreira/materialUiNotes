import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
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
    <div>
      <AppBar>
        <Toolbar>
          <Button
            component={Link}
            to="/create"
            variant="contained"
            color="secondary"
          >
            crear nota
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
