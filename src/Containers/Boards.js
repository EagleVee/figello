import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./Styles/Board.css";
import NavBar from "../Components/NavBar/NavBar";
import { connect } from "react-redux";
import { Card, Avatar } from "antd";

class BoardScreen extends Component {
  state = {
    data: ['brown', '#a77858', 'blue', 'green', 'purple', 'orange', '#af3990']
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="container wrapper">
          <div className="header">
            <i className='fa fa-user fa-2x mr-3' />
            <h3 className="headline">Personal boards</h3>
          </div>
          <div className="row">
            {this.state.data.map((val) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 card-container">
                  <Link to={`/board-item/1`}>
                    <Card className='card card-light' loading={false} style={{backgroundColor: val}}>
                      <Card.Meta
                        title="Card title"
                        description="This is the description"
                      />
                    </Card>
                  </Link>
                </div>
              );
            })}
            <div className="col-lg-3 col-md-4 col-sm-6 card-container">
              <Card className='card card-dark' loading={false} style={{backgroundColor: '#ddd', minHeight: '100%'}}>
                <div className='vertical-center horizontal-center'>
                  <p className='text-center mb-0' style={{fontSize: '18px'}}>Create new board</p>
                </div>
              </Card>
            </div>
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
)(BoardScreen);
