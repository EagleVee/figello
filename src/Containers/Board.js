import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./Styles/Board.css";
import NavBar from "../Components/NavBar/NavBar";
import ColumnList from "../Components/ColumnList/ColumnList";
import { connect } from "react-redux";

class Board extends Component {
  state = {
    columns: [
      {
        _id: 1,
        name: 'Backlog',
      },
      {
        _id: 2,
        name: 'To do',
      },
      {
        _id: 3,
        name: 'Doing',
      },
      {
        _id: 4,
        name: 'Finished'
      }
    ],
    data: []
  };
  render() {
    return (
      <div className='main-background'>
        <NavBar />
        <div className="wrapper pl-3 pr-3">
          <div className="row">
            <ColumnList
              columns={this.state.columns}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
