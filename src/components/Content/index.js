import React from 'react';
import PropTypes from 'prop-types';
import './content.scss';

const Content =  ({currentExercice}) =>  {
  return(
    <div className="content">
      {currentExercice.map((exercice) => (
      <div key={exercice.name}>
      <h3 className="content_title">{exercice.name}</h3>
      <img className="content_img" src={exercice.image}/>
      <p className="content_p" key={exercice.name}>{exercice.description}</p>
      </div>
      ))}
    </div>
  );
    
};

Content.propTypes = {
  currentExercice: PropTypes.arrayOf(
    PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  ).isRequired,
};

export default Content;
