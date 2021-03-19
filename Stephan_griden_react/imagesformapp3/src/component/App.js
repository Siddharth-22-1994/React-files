import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  // Method:1
  //  ---------> First methos by using promises <-------------
  // onSearchSubmit(term) {
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           "Client-ID uLqtSjD2M-dLZQu822eatzVNJSr9zC_Vnw9L7E69KDo",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.results);
  //     });
  // }

  // Method:2
  // ---------------> By using async await  <--------------------
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID uLqtSjD2M-dLZQu822eatzVNJSr9zC_Vnw9L7E69KDo",
      },
    });
    console.log(this.setState({ images: response.data.results }));
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        {/* Found: {this.state.images.length} images */}
        <ImageList images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;

// Unsplash: https://unsplash.com/oauth/applications
