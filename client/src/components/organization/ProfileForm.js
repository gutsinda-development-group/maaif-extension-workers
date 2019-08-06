import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({});

function ProfileForm(props) {
  //const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Organization Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="organizationName"
            name="organizationName"
            label="Organization/ Institution name"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="organizationName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="registrationDate"
            name="registrationDate"
            //value={registrationDate}
            //onChange={this.onChange}
            label="Date of registration"
            type="date"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="off"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Legal Registration Entity No"
            helperText="(NGO or Company)"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Telephone"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="telephone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="website"
            name="website"
            label="Website(optional)"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="website"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="postalAddress"
            label="Postal Address"
            multiline
            rowsMax="4"
            margin="normal"
            variant="outlined"
            fullWidth
            //value={this.state.multiline}
            //onChange={this.handleChange("multiline")}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="missionStatement"
            label="Mission Statement"
            multiline
            rowsMax="4"
            margin="normal"
            variant="outlined"
            fullWidth
            //value={this.state.multiline}
            //onChange={this.handleChange("multiline")}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="primary" gutterBottom>
            Physical location:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="district"
            name="district"
            label="District"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="district"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="town"
            name="town"
            label="Town"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="town"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="street"
            name="street"
            label="Street"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="street"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" color="primary" gutterBottom>
            Contact Person:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactPersonName"
            name="contactPersonName"
            label="Name"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactPersonPosition"
            name="contactPersonPosition"
            label="Position"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="position"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactPersonTelephone"
            name="contactPersonTelephone"
            label="Mobile"
            margin="normal"
            variant="outlined"
            fullWidth
            autoComplete="mobile"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ProfileForm;
