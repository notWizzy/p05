import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './TopBar.css';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { appContext, userName } = this.props;

        return (
            <AppBar className="topbar-appBar" position="absolute">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        {userName} {/* Display your name on the left side */}
                    </Typography>
                    <div className="topbar-appContext">
                        {appContext} {/* Display the app context on the right side */}
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopBar;

