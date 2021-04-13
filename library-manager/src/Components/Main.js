import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import "./Main.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { actionTypes } from "./reducer";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Main() {
  const [{ user }, dispatch] = useStateValue();
  const classes = useStyles();
  //console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Main
          <br />
          {user.email} 로그인 성공
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Out
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Main;
