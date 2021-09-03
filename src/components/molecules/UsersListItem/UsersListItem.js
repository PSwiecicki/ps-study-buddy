import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button.js';
import Average from 'components/atoms/Average/Average';
import Name from 'components/atoms/Name/Name';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, attendance, average } }) => (
  <Wrapper>
    <Average average={average} />
    <Name name={name} attendance={attendance} />
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.string,
  }),
};

export default UsersListItem;
