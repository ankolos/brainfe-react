import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import  { confirmAlert } from 'react-confirm-alert';
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
        console.log(K);
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
         
        <div className="row" id="Body">
        <div className="medium-12 columns">
          <form onSubmit={this.feedUpdate} method="post">
            <input name="userFeed" onChange={this.onChange} value={this.state.userFeed} type="text" placeholder="What's up?" />
            <input
              type="submit"
              value="Post"
              className="button"
              onClick={this.feedUpdate} />
          </form>

        </div>
        <UserFeed feedData={this.state.data} deleteFeed={this.deleteFeed} convertTime={this.convertTime} name={this.state.name} />


      </div>
         
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
