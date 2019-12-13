import React from 'react';
import './category.css';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category">
        <h1>{this.props.title}</h1>

        <table className={'table table-borderless'}>
          <tbody>
            <tr>
              <td>Amount</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Category;
