import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(2)
  }
});

class KeyBeneficiaries extends Component {
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
        <Paper className={classes.root} elevation={1}>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="title"
                gutterBottom
                style={{
                  color: "mediumBlue",
                  fontWeight: "bold",
                  fontSize: "24px"
                }}
              >
                Key Beneficiaires
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Key Beneficiaries:</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={gilad}
                        //onChange={handleChange("gilad")}
                        value="gilad"
                      />
                    }
                    label="Farmers"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={jason}
                        //onChange={handleChange("jason")}
                        value="jason"
                      />
                    }
                    label="Students"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={antoine}
                        //onChange={handleChange("antoine")}
                        value="antoine"
                      />
                    }
                    label="Field Extension workers"
                  />
                </FormGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Categories:</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={gilad}
                        //onChange={handleChange("gilad")}
                        value="gilad"
                      />
                    }
                    label="All Farmers"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={jason}
                        //onChange={handleChange("jason")}
                        value="jason"
                      />
                    }
                    label="Rural"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={antoine}
                        //onChange={handleChange("antoine")}
                        value="antoine"
                      />
                    }
                    label="Peri-urban"
                  />
                </FormGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender:</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={gilad}
                        //onChange={handleChange("gilad")}
                        value="gilad"
                      />
                    }
                    label="All Genders"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={jason}
                        //onChange={handleChange("jason")}
                        value="jason"
                      />
                    }
                    label="Women"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={antoine}
                        //onChange={handleChange("antoine")}
                        value="antoine"
                      />
                    }
                    label="Youth"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
          <br />
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(KeyBeneficiaries);
