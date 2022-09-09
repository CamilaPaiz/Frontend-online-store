import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { title, price, img, id } = this.props;
    return (
      <div key={ id }>
        <img src={ img } alt={ title } />
        <p>{title}</p>
        <p>{price}</p>
      </div>

    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Products;
