import React from 'react';

const Cat = props => (
  <p>- {props.name}: miau!</p>
);

Cat.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Cat;
