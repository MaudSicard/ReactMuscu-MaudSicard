import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';
import InputSearch from './InputSearch';
import Select from './Select';
import Ul from './Ul';

const List = ({search, exercices, categories, currentCategory, handleExerciceName, handleCategory, handleInputSearch}) => {

      return (
        <div className="list">
          <InputSearch search={search} handleInputSearch={handleInputSearch} />
          <Select currentCategory={currentCategory} categories={categories} handleCategory={handleCategory} />
          <Ul exercices={exercices} handleExerciceName={handleExerciceName} />
        </div>
      );
;}

List.propTypes = {
  exercices: PropTypes.arrayOf(
    PropTypes.shape({
      name:PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  handleCategory: PropTypes.func.isRequired,
  handleExerciceName: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  handleInputSearch: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired

};

export default List;
