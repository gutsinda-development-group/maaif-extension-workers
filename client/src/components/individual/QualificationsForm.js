import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    //margin: theme.spacing.unit,
    minWidth: "100%",
    //maxWidth: "auto"
    margin: theme.spacing(1)
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "grey !important"
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const fields = ["Crop", "Animal science", "Fisheries", "Forestry"];

const qualifications = ["PhD", "Masters", "BSc.", "Diploma", "Certificate"];

class ProfileForm extends React.Component {
  state = { fields: [], qualifications: [] };

  onChangeFields = event => {
    this.setState({ fields: event.target.value });
  };

  onChangeQualification = event => {
    this.setState({ qualifications: event.target.value });
  };

  handleChange = qualifications => {
    this.setState({
      qualifications: [...this.state.qualifications, qualifications]
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Qualifications
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className={classes.root}>
              <FormControl className={classes.formControl} variant="filled">
                <InputLabel>Field</InputLabel>
                <Select
                  multiple
                  value={this.state.fields}
                  onChange={this.onChangeFields}
                  input={<OutlinedInput id="select-multiple-checkbox" />}
                  renderValue={selected => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {fields.map(name => (
                    <MenuItem key={name} value={name}>
                      <Checkbox
                        checked={this.state.fields.indexOf(name) > -1}
                      />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} variant="filled">
              <InputLabel htmlFor="select-multiple-checkbox">
                Qualification
              </InputLabel>
              <Select
                multiple
                value={this.state.qualifications}
                onChange={this.onChangeQualification}
                input={<OutlinedInput id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {qualifications.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox
                      checked={this.state.qualifications.indexOf(name) > -1}
                    />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Any Further Training?</FormLabel>
              <RadioGroup
                aria-label="Further Training"
                name="furtherTraining"
                className={classes.group}
                value={this.state.value}
                //onChange={this.handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="organizationName"
              name="organizationName"
              label="Field of training"
              autoComplete="organizationName"
              margin="normal"
              variant="outlined"
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="organizationName"
              name="organizationName"
              label="Duration"
              autoComplete="organizationName"
              margin="normal"
              variant="outlined"
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Fab color="primary" aria-label="Add">
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProfileForm);
