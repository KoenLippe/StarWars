import React from 'react';
import Category from './category/category';
import './main.css';
import Axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loaded: false
    };
  }

  componentWillMount() {
    Axios.get('https://swapi.co/api/').then(res => {
      const data = res.data;
      console.log(data);
      let array = [];
      for (var key of Object.keys(data)) {
        //Capitalize first letter
        const lowercase = key;
        const title =
          lowercase.charAt(0).toUpperCase() + lowercase.substring(1);
        //Pushing to array
        array.push(title);
      }

      //Setting categories in state
      this.setState({
        categories: array,
        loaded: true
      });
    });
  }

  render() {
    let loaded = this.state.loaded;
    let content;
    let title;

    if (loaded) {
      title = 'Categories';
      content = (
        <div className="category-container">
          {this.state.categories.map(category => (
            <Category title={category} />
          ))}
        </div>
      );
    } else {
      title = 'Loading categories...';
      content = <div className="loader"></div>;
    }

    return (
      <div className="main-container">
        <h1 className={'text-center title'}>{title}</h1>
        {content}
      </div>
    );
  }
}

export default Main;
