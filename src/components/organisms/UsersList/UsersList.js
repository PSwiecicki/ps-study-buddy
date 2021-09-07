import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Wrapper>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" />
        <FormField label="Attendance" id="attendance" name="attendance" />
        <FormField label="Average" id="average" name="average" />
      </Wrapper>
      <Wrapper>
        <StyledTitle>Students List</StyledTitle>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem
              deleteUser={deleteUser}
              key={i}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

/*
//same component as a class
class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    mockAPI()
      .then((data) => {
        this.setState({ isLoading: false });
        this.setState({ users: data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.isLoading !== this.state.isLoading) {
      console.log('Loading state gas changed');
    }
  }

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading...' : 'Users List'}</h1>
        <StyledList>
          {this.state.users.map((userData, i) => (
            <UsersListItem
              deleteUser={this.deleteUser}
              key={i}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}
*/
export default UsersList;
