// import { fade } from "@material-ui/core/styles/colorManipulator";
const styles = theme => ({
  root: {
    width: "100%",
    marginBottom: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "block",
  },
  search: {
    marginLeft: theme.spacing.unit,
    width: "auto"
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    width: 120,
    "&:focus": {
    width: 200
    }
  }
});

export default styles;