import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class AddNew extends React.Component {
  state = {
    name: "",
    phoneNumber: "",
    device: "",
    issue: "",
    repairStatus: "",
    redirect: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, phoneNumber, device, issue, repairStatus } = this.state;
    if (name === "") {
      alert("You must input a name");
      return false;
    } else if (phoneNumber === null) {
      alert("You must input a phone number");
      return false;
    } else if (device === "") {
      alert("You must input a device name");
      return false;
    } else if (issue === "") {
      alert("You must input the issue of the device");
      return false;
    } else if (repairStatus === "") {
      alert("You must input the status of the repair");
      return false;
    }
    return Axios.post("/api/addToDatabase", {
      name,
      phoneNumber,
      device,
      issue,
      repairStatus
    })
      .then(res => {
        console.log("Adding to database", res);
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log("there was an error adding to the database, error below");
        console.log(err);
      });
  };

  render() {
    const { classes } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <form
        onSubmit={this.onSubmit}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "7.5em" }}
        >
          <Grid item>
            <TextField
              id="OwnerName"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              id="OwnerNumber"
              label="Phone Number"
              value={this.state.phoneNumber}
              onChange={this.handleChange("phoneNumber")}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              id="DeviceName"
              label="Device"
              className={classes.textField}
              value={this.state.device}
              onChange={this.handleChange("device")}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              id="Issue"
              label="Issue"
              className={classes.textField}
              value={this.state.issue}
              onChange={this.handleChange("issue")}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              id="RepairStatus"
              label="Repair Status"
              className={classes.textField}
              value={this.state.repairStatus}
              onChange={this.handleChange("repairStatus")}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

AddNew.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddNew);
