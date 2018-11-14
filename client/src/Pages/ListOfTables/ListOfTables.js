import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tablerows from "../../Components/TableRows";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 800
  }
});

class ListOfTables extends Component {
  state = {
    classes: styles
  };

  render() {
    const {
      classes: { root, table }
    } = this.state;
    return (
      <Grid
        container
        alignItems="center"
        spacing={0}
        direction="column"
        justify="center"
      >
        <Grid item xs={8}>
          <Paper className={root}>
            <Table className={table}>
              <TableHead>
                <TableRow>
                  <TableCell numeric>Date Added</TableCell>
                  <TableCell>Owner Name</TableCell>
                  <TableCell>Owner Number</TableCell>
                  <TableCell>Device Name</TableCell>
                  <TableCell>Issue</TableCell>
                  <TableCell>Repair Status</TableCell>
                  <TableCell>Update Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Tablerows />
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

ListOfTables.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListOfTables);
