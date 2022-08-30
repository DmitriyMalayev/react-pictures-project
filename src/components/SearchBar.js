import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/*
 <input type="text" onChange={this.onInputChange} />;
 this.onInputChange  does not have () because we don't want it invoked every time a render occurs but invoked only when there is an input.

Controlled Element 
  User types in input
  Callback gets invoked
  We call setState with a new value
  Component Rerenders
  Input is told what's it's value is (coming from state)
this
  Reference to the class itself 
  Look to the left of the dot  


 */
