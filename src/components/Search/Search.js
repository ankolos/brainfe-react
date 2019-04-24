import React, { Component } from 'react';
import { data, age, sexuality, race, eyeColor, hairColor } from '../.././config/data';
import './Search.css';

class Search extends Component {
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
      <div className="col border border-dark rounded mt-2 mr-2 mb-2 p-0">

        {/* Search form*/}
        <form id="search-form">
          <div className="row border rounded m-2 pt-2 pb-2">
            <div className="col pl-2 pr-2">
              <label htmlFor="age">Age:</label>
              <select className="form-control" id="age" value={this.state.age} onChange={this.handleAge}>
                <option value="Any">Any</option>
                {age.map((v, k) => <option key={k} value={v}>{v}</option>)}
              </select>
            </div>
            <div className="col pl-0 pr-2">
              <label htmlFor="sexuality">Sexuality:</label>
              <select className="form-control" id="sexuality" value={this.state.sexuality} onChange={this.handleSexuality}>
                {sexuality.map((v, k) => <option key={k} value={v}>{v}</option>)}
              </select>
            </div>
            <div className="col pl-0 pr-2">
              <label htmlFor="race">Race:</label>
              <select className="form-control" id="race" value={this.state.race} onChange={this.handleRace}>
                {race.map((v, k) => <option key={k} value={v}>{v}</option>)}
              </select>
            </div>
            <div className="col pl-0 pr-2">
              <label htmlFor="eyeColor">Eye color:</label>
              <select className="form-control" id="eyeColor" value={this.state.eyeColor} onChange={this.handleEyeColor}>
                {eyeColor.map((v, k) => <option key={k} value={v}>{v}</option>)}
              </select>
            </div>
            <div className="col pl-0 pr-2">
              <label htmlFor="hairColor">Hair color:</label>
              <select className="form-control" id="hairColor" value={this.state.hairColor} onChange={this.handleHairColor}>
                {hairColor.map((v, k) => <option key={k} value={v}>{v}</option>)}
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
    );
  }

  /**
  * Handle age select
  * @param {*} event 
  */
  handleAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  /**
   * Handle sexuality select
   * @param {*} event 
   */
  handleSexuality(event) {
    this.setState({
      sexuality: event.target.value
    });
  }

  /**
   * Handle race select
   * @param {*} event 
   */
  handleRace(event) {
    this.setState({
      race: event.target.value
    });
  }

  /**
   * Handle eyeColor select
   * @param {*} event 
   */
  handleEyeColor(event) {
    this.setState({
      eyeColor: event.target.value
    });
  }

  /**
   * Handle hairColor select
   * @param {*} event 
   */
  handleHairColor(event) {
    this.setState({
      hairColor: event.target.value
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
              src={array["photo"]}
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
export default Search;
