import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

//import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

    flexGrow: 1
  },
  bigAvatar: {
    margin: 10,
    width: 140,
    height: 140,
    border: "4px solid black"
  },
  fab: {
    margin: theme.spacing.unit
  }
});

class PersonalInfo extends Component {
  state = {
    open: false
  };

  componentDidMount() {}

  onChange = e => {};
  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Paper className={classes.root} elevation={1} align="center">
          <Avatar
            onClick={this.handleOpen}
            alt="Remy Sharp"
            src="7.jpg"
            className={classes.bigAvatar}
          />
          <br />
          <Typography
            variant="title"
            gutterBottom
            align="center"
            style={{
              color: "mediumBlue",
              fontWeight: "bold",
              fontSize: "24px"
            }}
          >
            Biodata
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={5} sm={5}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                style={{ fontWeight: "bold" }}
              >
                Firstname:
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                style={{ fontWeight: "bold" }}
              >
                Surname:
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                style={{ fontWeight: "bold" }}
              >
                Gender:
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                style={{ fontWeight: "bold" }}
              >
                Date of birth:
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                style={{ fontWeight: "bold" }}
              >
                Telephone:
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                style={{ fontWeight: "bold" }}
              >
                Email:
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                style={{ fontWeight: "bold" }}
              >
                NIN:
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7}>
              <Typography variant="subtitle1" gutterBottom align="left">
                Nathan
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="left">
                Baleeta
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="left">
                Male
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="left">
                10th Feb, 1988
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="left">
                0771 278182
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="left">
                nbaleeta@gmail.com
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="left">
                1298180281082
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Typography
            variant="title"
            gutterBottom
            align="center"
            style={{
              color: "mediumBlue",
              fontWeight: "bold",
              fontSize: "24px"
            }}
          >
            Address Information
          </Typography>
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={5} sm={5}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                style={{ fontWeight: "bold" }}
              >
                Postal Address:
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="left"
                style={{ fontWeight: "bold" }}
              >
                Physical Address:
              </Typography>
            </Grid>
            <Grid item xs={7} sm={7}>
              <Typography variant="subtitle1" gutterBottom align="left">
                Codepoint Systems Ltd
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="left">
                DataClan Ltd
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(PersonalInfo);
