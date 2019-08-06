import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "grey !important"
  }
});

class IndividualProfileForm extends Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography variant="h5" gutterBottom>
          Individual Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="organizationName"
              name="organizationName"
              label="Firstname"
              margin="normal"
              variant="outlined"
              fullWidth
              autoComplete="organizationName"
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="organizationName"
              name="organizationName"
              label="Surname"
              margin="normal"
              variant="outlined"
              fullWidth
              autoComplete="organizationName"
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="registrationDate"
              name="registrationDate"
              //value={registrationDate}
              //onChange={this.onChange}
              label="Date of birth"
              type="date"
              margin="normal"
              variant="outlined"
              fullWidth
              autoComplete="off"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="address1"
              name="address1"
              label="National Identification No"
              helperText="(NIN)"
              margin="normal"
              variant="outlined"
              fullWidth
              autoComplete="nin"
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="organizationName"
              name="organizationName"
              label="Telephone"
              margin="normal"
              variant="outlined"
              fullWidth
              autoComplete="organizationName"
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="organizationName"
              name="organizationName"
              label="Email"
              margin="normal"
              variant="outlined"
              fullWidth
              autoComplete="organizationName"
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="postalAddress"
              label="Postal Address"
              multiline
              rowsMax="4"
              margin="normal"
              variant="outlined"
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              //value={this.state.multiline}
              //onChange={this.handleChange("multiline")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="postalAddress"
              label="Physical Address"
              multiline
              rowsMax="4"
              margin="normal"
              variant="outlined"
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              //value={this.state.multiline}
              //onChange={this.handleChange("multiline")}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(IndividualProfileForm);
