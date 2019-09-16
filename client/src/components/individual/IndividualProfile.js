import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Layout/Header";
import Grid from "@material-ui/core/Grid";

import PersonalInfo from "../individual/PersonalInfo";
import OperationsInfo from "../individual/Profiles/Individual/OperationsInfo";
import KeyBeneficiaries from "../individual/Profiles/Individual/KeyBeneficiaries";

const styles = theme => ({});

class IndividualProfile extends Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <Grid container spacing={2}>
          <Grid item lg={3} md={6} xs={12}>
            <br />
            <br />
            <br />
            <br />
            <PersonalInfo />
          </Grid>

          <Grid item lg={5} md={6} xs={12}>
            <br />
            <br />
            <br />
            <br />
            <PersonalInfo />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <br />
            <br />
            <br />
            <br />
            <OperationsInfo />
            <br />
            <KeyBeneficiaries />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(IndividualProfile);
