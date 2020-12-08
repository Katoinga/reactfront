import React from 'react';
import './styles/Category.css';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title : props.title,
      quantity : props.quantity,
      description : props.description,
      image : props.image
    }
  }

  render() {
    return (
      <div className="containerCategory">
        <img className="image" src={this.state.image}></img>
        <p className="title">{this.state.title}</p>
        <p className="quantity"> {this.state.quantity}</p>
        <p className="description">{this.state.description}</p>
      </div>

    )
  }
}

export default Category
