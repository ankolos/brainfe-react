import React, { Component } from 'react';
import Linkify from 'react-linkify';
import TimeAgo from 'react-timeago';
import './UserFeed.css';

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
            <div className="row border shadow m-2" key={index}>
              <div className="col border">
                <p>{this.props.name}</p>
              </div>
              <div className="col border">
                <p>{feedData.feed}</p>
              </div>
              <div className="col border">
                <div className="row">
                  <div className="col">
                    <TimeAgo date={this.props.convertTime(feedData.created)} />
                  </div>
                  <div className="col border">
                    <button className="button secondary small" onClick={this.props.deleteUserFeed} data={feedData.feed_id} value={index} >  </button>
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