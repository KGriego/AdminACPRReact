import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TableCell from "@material-ui/core/TableCell";

class RowButton extends Component {
  state = {
    anchorEl: null
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  updateDatabase = e => {
    const rowId = e.target.value;
    const text = e.target.textContent;
    axios
      .post("/api/updateDatabase", { rowId, text })
      .then(res => {
        console.log("updating database", res);
      })
      .catch(err => {
        console.log("Error happened, printed below");
        return console.log("err", err);
      });
    this.props.getFromDatabase();
  };

  render() {
    const { anchorEl } = this.state;
    const { id } = this.props;
    return (
      <TableCell>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Update Status
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            onClick={this.updateDatabase}
            onClose={this.handleClose}
            value={id}
          >
            Recieved
          </MenuItem>
          <MenuItem
            onClick={this.updateDatabase}
            onClose={this.handleClose}
            value={id}
          >
            Repairing
          </MenuItem>
          <MenuItem
            onClick={this.updateDatabase}
            onClose={this.handleClose}
            value={id}
          >
            Repaired
          </MenuItem>
        </Menu>
      </TableCell>
    );
  }
}

export default RowButton;
