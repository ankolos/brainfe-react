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
      .map((v, k) => {
        return (
          <div className="row rounded shadow-lg mx-2 my-4" key={k}>
            <div className="container">
              <div className="row">
                <div className="col p-2">
                  <p className="font-weight-bold m-0">{this.props.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col p-2">
                  <p className="m-0">{v.feed}</p>
                </div>
              </div>
              <div className="row">
                <div className="col p-2">
                  <TimeAgo className="small" date={this.props.convertTime(v.created)} />
                </div>
                <div className="col p-2 text-right">
                  <button className="btn btn-sm btn-outline-dark" onClick={this.props.deleteUserFeed} data={v.feed_id} value={k}>Delete</button>
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