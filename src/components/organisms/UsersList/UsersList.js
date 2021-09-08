import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students List</Title>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} key={i} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
