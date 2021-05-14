import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';

const Select = ({currentCategory, categories, handleCategory}) => {

  return (
    <select
    className='custom-button-filter'
    type="select"
    placeholder="Sélectionner une catégorie"
    value={currentCategory}
    onChange={(event) => {
      handleCategory(event.target.value);
    }}
    >
    {categories.map((category) => (
      <option className='custom-button-filter' key={category} value={category}>{category}</option>
    ))}
    </select>
  );
    
};

Select.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  handleCategory: PropTypes.func.isRequired,
};

export default Select;

