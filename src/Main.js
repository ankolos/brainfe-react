import React, { Component } from 'react';
import { data } from './data';
import './Main.css';

class Main extends Component {
  constructor() {
    super();
    this.searchContent = [];
    this.state = {
      age: "Any",
      sexuality: "Any",
      race: "Any",
      eyeColor: "Any",
      hairColor: "Any",
      content: this.searchContent
    };
    this.handleAge = this.handleAge.bind(this);
    this.handleSexuality = this.handleSexuality.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleEyeColor = this.handleEyeColor.bind(this);
    this.handleHairColor = this.handleHairColor.bind(this);
    this.buildSearchContent = this.buildSearchContent.bind(this);
  }

  render() {
    return (
      <div className="container border-left border-right border-dark">
        <div className="row">

          {/* Navbar*/}
          <div className="col-2 border border-dark rounded m-2">
            <nav className="navbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Search</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Search block*/}
          <div className="col border border-dark rounded mt-2 mr-2 mb-2 p-0">

            {/* Search form*/}
            <form id="search-form">
              <div className="row border rounded m-2 pt-2 pb-2">
                <div className="col pl-2 pr-2">
                  <label htmlFor="age">Age:</label>
                  <select className="form-control" id="age" value={this.state.age} onChange={this.handleAge}>
                    <option value="0">Any</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    <option value="60">60</option>
                    <option value="61">61</option>
                    <option value="62">62</option>
                    <option value="63">63</option>
                    <option value="64">64</option>
                    <option value="65">65</option>
                    <option value="66">66</option>
                    <option value="67">67</option>
                    <option value="68">68</option>
                    <option value="69">69</option>
                    <option value="70">70</option>
                    <option value="71">71</option>
                    <option value="72">72</option>
                    <option value="73">73</option>
                    <option value="74">74</option>
                    <option value="75">75</option>
                    <option value="76">76</option>
                    <option value="77">77</option>
                    <option value="78">78</option>
                    <option value="79">79</option>
                  </select>
                </div>
                <div className="col pl-0 pr-2">
                  <label htmlFor="sexuality">Sexuality:</label>
                  <select className="form-control" id="sexuality" value={this.state.sexuality} onChange={this.handleSexuality}>
                    <option value="0">Any</option>
                    <option value="1">Hetero</option>
                    <option value="2">Homo</option>
                    <option value="3">Bi</option>
                  </select>
                </div>
                <div className="col pl-0 pr-2">
                  <label htmlFor="race">Race:</label>
                  <select className="form-control" id="race" value={this.state.race} onChange={this.handleRace}>
                    <option value="0">Any</option>
                    <option value="1">Caucasian</option>
                    <option value="2">Asian</option>
                    <option value="3">Black/African</option>
                    <option value="4">Mixed/Other</option>
                    <option value="5">Oriental</option>
                    <option value="6">Latino/Hispanic</option>
                    <option value="7">Middle eastern</option>
                    <option value="8">Native American</option>
                  </select>
                </div>
                <div className="col pl-0 pr-2">
                  <label htmlFor="eyeColor">Eye color:</label>
                  <select className="form-control" id="eyeColor" value={this.state.eyeColor} onChange={this.handleEyeColor}>
                    <option value="0">Any</option>
                    <option value="1">Blue</option>
                    <option value="2">Brown</option>
                    <option value="3">Green</option>
                    <option value="4">Hazel</option>
                    <option value="5">Grey</option>
                    <option value="6">Other</option>
                  </select>
                </div>
                <div className="col pl-0 pr-2">
                  <label htmlFor="hairColor">Hair color:</label>
                  <select className="form-control" id="hairColor" value={this.state.hairColor} onChange={this.handleHairColor}>
                    <option value="0">Any</option>
                    <option value="1">Black</option>
                    <option value="2">Brown</option>
                    <option value="4">Red</option>
                    <option value="5">Blonde</option>
                    <option value="6">White</option>
                    <option value="7">Shaven/ Bald</option>
                    <option value="8">Other</option>
                  </select>
                </div>
                <div className="d-flex flex-column pr-2">
                  <button type="button" className="btn btn-outline-dark mt-auto" onClick={this.buildSearchContent}>Search</button>
                </div>
              </div>
            </form>

            {/* Search content*/}
            <div className="row justify-content-start border rounded m-2 p-2">
              {this.state.content}
            </div>
          </div>

        </div>
      </div>
    );
  }

  /**
  * Handle age select
  * @param {*} e 
  */
  handleAge(e) {
    this.setState({
      age: e.target.options[e.target.selectedIndex].text
    });
  }

  /**
   * Handle sexuality select
   * @param {*} e 
   */
  handleSexuality(e) {
    this.setState({
      sexuality: e.target.options[e.target.selectedIndex].text
    });
  }

  /**
   * Handle race select
   * @param {*} e 
   */
  handleRace(e) {
    this.setState({
      race: e.target.options[e.target.selectedIndex].text
    });
  }

  /**
   * Handle eyeColor select
   * @param {*} e 
   */
  handleEyeColor(e) {
    this.setState({
      eyeColor: e.target.options[e.target.selectedIndex].text
    });
  }

  /**
   * Handle hairColor select
   * @param {*} e 
   */
  handleHairColor(e) {
    this.setState({
      hairColor: e.target.options[e.target.selectedIndex].text
    });
  }

  /**
   * Build search content
   */
  buildSearchContent() {
    this.searchContent = [];

    data.forEach(array => {
      if ((this.state.age === "Any" || this.state.age === array["age"])
        && (this.state.sexuality === "Any" || this.state.sexuality === array["sexuality"])
        && (this.state.race === "Any" || this.state.race === array["race"])
        && (this.state.eyeColor === "Any" || this.state.eyeColor === array["eyeColor"])
        && (this.state.hairColor === "Any" || this.state.hairColor === array["hairColor"])) {
        this.searchContent.push(<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0">
          <div className="hovereffect">
            <img
              className="img-thumbnail border-bottom-0 rounded-0"
              src={require("./" + array["photo"])}
              alt="img" />
            <div className="overlay">
              <h2>{array["name"]}</h2>
              <a className="info" href="#">Age: {array["age"]}</a>
            </div>
          </div>
        </div>)
      }
    });

    this.setState({
      content: this.searchContent
    });
  }
}
export default Main;
