import React from 'react';
import PropTypes from 'prop-types';
import './content.scss';

const Content =  ({currentExercice}) =>  (
  <div className="content">
    <h3 className="content_title">{currentExercice.name}</h3>
    <img className="content_img" src={currentExercice.image}/>
    <p className="content_p" key={currentExercice.name}>{currentExercice.description}</p>
  </div>
);

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
