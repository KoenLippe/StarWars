import React from 'react';
import './category.css';

class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Category;
