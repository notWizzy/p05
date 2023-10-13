import React from 'react';
import { Typography, Box } from '@mui/material';
import './userDetail.css';

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        this.fetchUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.fetchUser();
        }
    }

    fetchUser() {
        const user = window.models.userModel(this.props.match.params.userId);
        this.setState({ user });
    }

    render() {
        const { user } = this.state;

        if (!user) {
            return <Typography variant="body1">Loading user details...</Typography>;
        }

        return (
            <Box className="user-detail-container">
                <Typography variant="h5">{`${user.first_name} ${user.last_name}`}</Typography>
                <Typography variant="body1">Location: {user.location}</Typography>
                <Typography variant="body1">Description: {user.description}</Typography>
                <Typography variant="body1">Occupation: {user.occupation}</Typography>
            </Box>
        );
    }
}

export default UserDetail;
