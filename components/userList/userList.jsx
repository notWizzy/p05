import React from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@mui/material';
import './userList.css';

/**
 * Define UserList, a React component of project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: window.models.userListModel()
    };
  }

  render() {
    return (
        <div>
          <Typography variant="body1">
            USER LIST
          </Typography>
          <List component="nav">
            {this.state.users.map((user) => (
                <div key={user._id}>
                  <ListItem component={Link} to={`/users/${user._id}`}>
                    <ListItemText primary={`${user.first_name} ${user.last_name}`} />
                  </ListItem>
                  <Divider />
                </div>
            ))}
          </List>
        </div>
    );
  }
}

export default UserList;
