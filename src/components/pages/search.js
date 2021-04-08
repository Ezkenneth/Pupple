import React, { Component} from "react";
import SearchForm from "../SearchForm"

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  handleInputChange(e){
    console.log(e)
  }

  handleFormSubmit(e){
    e.preventDefault();
    console.log(e);
    return false
  }

  render(){
    return(
      <div>
        <h1>Search Breeds</h1>
        <SearchForm search={this.state.search}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={.handleInputChange} />
      </div>
    );
  }

}



export default Search;
