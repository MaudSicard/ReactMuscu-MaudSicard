import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';


const List = ({search, setInputSearch, exercices, categories, setCategory, currentCategory, setExerciceName}) => {

      return (
        <div className="list">
          <input 
            type="text"
            placeholder="Quel exercice recherchez-vous ?"
            className="list_input"
            value={search}
            onChange={(event) => {
              setInputSearch(event.target.value);
            }}
          />

          <select
            className='custom-button-filter'
            type="select"
            placeholder="Sélectionner une catégorie"
            value={currentCategory}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        
          <ul className="list_ul">
          {exercices.map((exercice) => (
              <li key={exercice.name} className="list_li" onClick={() => {
                setExerciceName(exercice.name);
              }}>
                {exercice.name}
              </li>
            ))}
          </ul>
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
  setCategory: PropTypes.func.isRequired,
  setExerciceName: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired

};

export default List;
