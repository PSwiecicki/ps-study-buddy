import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Name.styles';

const Name = ({ name, attendance }) => (
  <Wrapper>
    <p className="name">{name}</p>
    <p className="attendence">attendance: {attendance}</p>
  </Wrapper>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default Name;
