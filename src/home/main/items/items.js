import React from 'react';
import './items.css';
import Axios from 'axios';

class Items extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      items: [],
      currentCategory: ''
    };
  }

  componentWillMount() {
    //Requests are slow somehow!
    Axios.get('https://swapi.co/api/').then(res => {
      const data = res.data;
      console.log(data);
      let categoriesArray = [];
      for (var key of Object.keys(data)) {
        //Capitalize first letter
        const lowercase = key;
        const title =
          lowercase.charAt(0).toUpperCase() + lowercase.substring(1);
        //Pushing to array
        categoriesArray.push(title);
      }

      //Setting categories in state
      this.setState({
        categories: categoriesArray
      });
    });
  }

  handleCategoryClick = e => {
    e.preventDefault();

    //Converting to lowercase
    let title = this.toLower(e.target.innerHTML);

    //Retrieving items
    this.getAndSetCategoryItems(title);
  };

  getAndSetCategoryItems(category) {
    //For some reason category contains an extra space -> removing it
    category = category.replace(' ', '');

    //Requests are slow somehow!
    //For sake of time, only showing first page
    Axios.get('https://swapi.co/api/' + category + '/?page=1').then(res => {
      const data = res.data.results;
      console.log(data);

      let items = this.state.items;

      //Pushing new items to array
      for (var key in data) {
        items.push(data[key]);
      }

      this.setState({
        items: items,
        currentCategory: category
      });
    });
  }

  toLower(category) {
    return category.charAt(0).toLowerCase() + category.substring(1);
  }

  render() {
    let category = this.state.currentCategory;
    const itemContent = (
      <div>
        {this.state.items
          .filter(item => {
            return item.url.includes(category);
          })
          .map(item => (
            <p>{item.toString()}</p>
          ))}
      </div>
    );

    return (
      <div className="main-container">
        <h1 className={'text-center title'}>All Items</h1>
        <div className="item-container">
          <div className="left-container">
            <div className="text-center p-4">
              <h3>Categories</h3>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              ></input>
            </div>

            <div className={'d-flex justify-content-center'}>
              <div className="categories-container">
                {this.state.categories.map(category => (
                  <a onClick={this.handleCategoryClick}>
                    <p>{category} </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="text-center p-4">
              <h3>Items</h3>
              {itemContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
