import React, { Component } from 'react';
import TimeAgo from 'react-timeago';

class UserFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userFeed = this
      .props
      .feedData
      .map(function (feedData, index) {
        return (
          <div className="row rounded shadow-lg mx-2 my-4" key={index}>
            <div className="container">
              <div className="row">
                <div className="col p-2">
                  <p className="font-weight-bold m-0">{this.props.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col p-2">
                  <p className="m-0">{feedData.feed}</p>
                </div>
              </div>
              <div className="row">
                <div className="col p-2">
                  <TimeAgo className="small" date={this.props.convertTime(feedData.created)} />
                </div>
                <div className="col p-2 text-right">
                  <button className="btn btn-sm btn-outline-dark" onClick={this.props.deleteUserFeed} data={feedData.feed_id} value={index}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        )
      }, this);

    return (
      <React.Fragment>
        {userFeed}
      </React.Fragment>
    );
  }
}
export default UserFeed;