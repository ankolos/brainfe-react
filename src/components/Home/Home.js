import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import Navbar from '../../components/Navbar/Navbar';
import { PostData } from '../../services/PostData';
import UserFeed from '../../components/UserFeed/UserFeed';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      userFeed: '',
      redirectToReferrer: false
    };
    this.getUserFeed = this.getUserFeed.bind(this);
    this.feedUpdate = this.feedUpdate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.deleteFeed = this.deleteFeed.bind(this);
    this.deleteFeedAction = this.deleteFeedAction.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      this.getUserFeed();
    }
    else {
      this.setState({ redirectToReferrer: true });
    }
  }

  feedUpdate(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, token: data.userData.token, feed: this.state.userFeed };
    if (this.state.userFeed) {
      PostData('feedUpdate', postData).then((result) => {
        let responseJson = result;
        let K = [responseJson.feedData].concat(this.state.data);
        this.setState({ data: K, userFeed: '' });
      });
    }
  }

  convertTime(created) {
    let date = new Date(created * 1000);
    return date;
  }

  deleteFeedAction(e) {
    console.log("HI");
    let updateIndex = e.target.getAttribute('value');
    let feed_id = e.target.getAttribute('data');

    let data = JSON.parse(sessionStorage.getItem("userData"));

    let postData = { user_id: data.userData.user_id, token: data.userData.token, feed_id: feed_id };
    if (postData) {
      PostData('feedDelete', postData).then((result) => {
        this
          .state
          .data.splice(updateIndex, 1);
        this.setState({
          data: this
            .state
            .data
        });
      });
    }
  }

  deleteFeed(e) {
    confirmAlert({
      title: '',
      message: 'Are you sure?',
      childrenElement: () => '',
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      onConfirm: () => this.deleteFeedAction(e),
      onCancel: () => '',
    })
  }

  getUserFeed() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({ name: data.userData.name });
    let postData = { user_id: data.userData.user_id, token: data.userData.token };

    if (data) {
      PostData('feed', postData).then((result) => {
        let responseJson = result;
        this.setState({ data: responseJson.feedData });
        console.log(this.state);
      });
    }
  }

  onChange(e) {
    this.setState({ userFeed: e.target.value });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }
    return (
      <React.Fragment>
        <Navbar />
        <div className="col border border-dark rounded mt-2 mr-2 mb-2 p-0">
          <div className="container">
            <div className="row justify-content-left p-2">
              <form className="form-inline" onSubmit={this.feedUpdate}>
                <div class="form-group mr-2">
                  <textarea className="form-control" rows="1" type="text" id="userFeed" name="userFeed" placeholder="What's up?" value={this.state.userFeed} onChange={this.onChange} />
                </div>
                <button type="submit" className="btn btn-outline-dark">Post</button>
              </form>
            </div>
            <UserFeed feedData={this.state.data} deleteFeedAction={this.deleteFeedAction} convertTime={this.convertTime} name={this.state.name} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
