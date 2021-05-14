import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';
import List from '.';


const Ul = ({exercices, handleExerciceName}) => {

  return (
    <ul className="list_ul">
    {exercices.map((exercice) => (
        <li key={exercice.name} className="list_li" onClick={() => {
          handleExerciceName(exercice.name);
        }}>
          {exercice.name}
        </li>
      ))}
    </ul>
  );
      
};

Ul.propTypes = {
  exercices: PropTypes.arrayOf(
    PropTypes.shape({
      name:PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Ul;
