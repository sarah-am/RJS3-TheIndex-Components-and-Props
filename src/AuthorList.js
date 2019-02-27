import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let authorList = this.props.authors.map(author => (
      <AuthorCard key={author.name} author={author} />
    ));

    return (
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">{authorList}</div>
        </div>
      </div>
    );
  }
}
export default AuthorList;
