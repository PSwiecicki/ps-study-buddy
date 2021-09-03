import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Average.styles';

const Average = ({ average }) => (
  <Wrapper>
    <p>{average}</p>
  </Wrapper>
);

Average.propTypes = {
  average: PropTypes.string.isRequired,
};

export default Average;
