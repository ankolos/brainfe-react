import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { PostData } from '../../services/PostData';
import UserFeed from '../../components/UserFeed/UserFeed';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      userFeed: '',
      redirectToReferrer: false
    };
    this.getUserFeed = this.getUserFeed.bind(this);
    this.updateUserFeed = this.updateUserFeed.bind(this);
    this.deleteUserFeed = this.deleteUserFeed.bind(this);
    this.convertTime = this.convertTime.bind(this);
    this.onChange = this.onChange.bind(this);
    this.confirmPopup = this.confirmPopup.bind(this);
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      this.getUserFeed();
    }
    else {
      this.setState({ redirectToReferrer: true });
    }
  }

  /**
   * Get user feed data from session storage
   */
  getUserFeed() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({ name: data.userData.name });
    let postData = {
      user_id: data.userData.user_id,
      token: data.userData.token
    };

    if (postData) {
      PostData('feed', postData).then((result) => {
        this.setState({
          data: result.feedData
        });
      });
    }
  }

  /**
   * Update user feed at backend
   * @param {*} e 
   */
  updateUserFeed(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = {
      user_id: data.userData.user_id,
      token: data.userData.token,
      feed: this.state.userFeed
    };

    if (this.state.userFeed) {
      PostData('feedUpdate', postData).then((result) => {
        let feedData = [result.feedData].concat(this.state.data);
        this.setState({
          data: feedData,
          userFeed: ''
        });
      });
    }
  }

  /**
   * Delete user feed at backend
   * @param {*} e 
   */
  deleteUserFeed(e) {
    let updateIndex = e.target.getAttribute('value');
    let feed_id = e.target.getAttribute('data');
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = {
      user_id: data.userData.user_id,
      token: data.userData.token,
      feed_id: feed_id
    };

    if (postData) {
      PostData('feedDelete', postData).then((result) => {
        this.state.data.splice(updateIndex, 1);
        this.setState({
          data: this.state.data
        });
      });
    }
  }

  /**
   * Convert millisecond to second
   * @param {*} created 
   */
  convertTime(created) {
    let date = new Date(created * 1000);
    return date;
  }

  /**
   * Set userFeed state by event
   * @param {*} e 
   */
  onChange(e) {
    this.setState({ userFeed: e.target.value });
  }

  /**
   * Call confirm popup before delete user feed
   */
  confirmPopup = (e) => {
    confirmAlert({
      title: '',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteUserFeed({e})
        },
        {
          label: 'No',
          onClick: () => ''
        }
      ]
    });
  };

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }
    return (
      <React.Fragment>
        <Navbar />
        <div className="col border border-dark rounded mt-2 mr-2 mb-2 p-0">
          <div className="container p-0">
            <div className="row justify-content-left m-2">
              <form className="form-inline" onSubmit={this.updateUserFeed}>
                <div className="form-group mr-2">
                  <textarea className="form-control" rows="1" cols="35" type="text" id="userFeed" name="userFeed" placeholder="What's up?" value={this.state.userFeed} onChange={this.onChange} />
                </div>
                <button type="submit" className="btn btn-outline-dark">Post</button>
              </form>
            </div>
            <UserFeed feedData={this.state.data} deleteUserFeed={this.deleteUserFeed} convertTime={this.convertTime} name={this.state.name} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
