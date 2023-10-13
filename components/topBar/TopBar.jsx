import React from 'react';
import {
    AppBar, Toolbar, Typography, Box
} from '@mui/material';
import { withRouter } from 'react-router-dom';
import './TopBar.css';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: "Home"
        };
    }

    componentDidUpdate(prevProps) {
        // Check for route changes to update the context
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.updateContextBasedOnRoute();
        }
    }

    updateContextBasedOnRoute() {
        const path = this.props.location.pathname;
        if (path.startsWith('/users/') && !path.startsWith('/photos/')) {
            const userId = path.split('/')[2];
            const user = window.models.userModel(userId);
            if (user) {
                this.setState({ context: ` ${user.first_name} ${user.last_name}` });
            }
        } else if (path.startsWith('/photos/')) {
            const userId = path.split('/')[2];
            const user = window.models.userModel(userId);
            if (user) {
                this.setState({ context: `Photos of ${user.first_name} ${user.last_name}` });
            }
        } else {
            this.setState({ context: "Home" });
        }
    }

    render() {
        return (
            <AppBar className="topbar-appBar" position="absolute">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        Ka$hApp
                    </Typography>
                    <Box flexGrow={1}></Box>
                    <Typography variant="h6" color="inherit">
                        {this.state.context}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(TopBar);
