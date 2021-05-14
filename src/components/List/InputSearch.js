
import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';



const InputSearch = ({search, handleInputSearch}) => {

  return (
    <input 
      type="text"
      placeholder="Quel exercice recherchez-vous ?"
      className="list_input"
      value={search}
      onChange={(event) => {
        handleInputSearch(event.target.value);
        }
      } 
    />
  );
};

InputSearch.propTypes = {
  search: PropTypes.string.isRequired,
  handleInputSearch: PropTypes.func.isRequired,
};

export default InputSearch;
