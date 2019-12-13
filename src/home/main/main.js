import React from 'react';
import Category from './category/category';
import './main.css';
import Axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentWillMount() {
    console.log(this.state);

    Axios.get('https://swapi.co/api/').then(res => {
      const data = res.data;
      console.log(data);
      let array = [];
      for (var key of Object.keys(data)) {
        array.push(key);
      }
      this.setState({
        categories: array
      });

      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="main-container">
        <h1 className={'text-center title'}>Categories</h1>

        {this.state.categories.map(category => (
          <p>{category}</p>
        ))}
      </div>
    );
  }
}

export default Main;
