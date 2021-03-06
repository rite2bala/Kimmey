import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BottomBar from '@material-ui/core/AppBar';
import SideBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles';
import theme from './../../theme';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Container from '@material-ui/core/Container';
import CSC from './csc/index';
import Dashboard from './dashboard';



import { HCPProvider } from './SiteContext';

class PatientFormComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,

    }
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  showCSCPortal = () => {
    this.setState({ show: 'CSC', open: false });
  };

  showDashboard = () => {
    this.setState({ show: 'Dashboard', open: false });
  };

  render() {

    const paperStyle = {
      marginTop: '6%',
      marginLeft: '2%',
      width: '92%',
      height: '94%',
    };

    const appBarStyle = {
      justifyContent: 'center',
      top: '1%',
      height: '7%',
      left: '1%',
      width: "98%",

    };

    const toolBarStyle = {
      alignItems: 'center',
    };

    const sidebarStyle = {
      top: '9%',
      right: '1%',
      width: "5%",
      height: '84%',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'top',
      opacity: 0.9,
    }

    const bottomStyle = {
      top: "94%",
      height: '5%',
      left: '1%',
      width: "98%",
      //bottom: '0%',
      opacity: 0.9,

    };

    const buttonStyle = {
      width: '100%',
      height: '100%',

    };

    const logOffIconStyle = {
      width: '25',
      height: '25',
    };

    const searchStyle = {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(10),
      left: '65%',
      width: '13%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    }
    const searchIcon = {
      width: theme.spacing(6),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }



    const inputStyle = {
      marginLeft: theme.spacing(5),
      flex: 1,
      color: 'white',
      fontStyle: 'Open Sans',

    }

    const notificationButtonStyle = {
      left: '93%',
      //width: theme.spacing(1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const accountButtonStyle = {
      left: '96%',
      //width: theme.spacing(5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

      // const inputRoot = {
      //   color: 'inherit',
      // }
    // const inputInput = {
    //   padding: theme.spacing(1, 1, 1, 7),
    //   transition: theme.transitions.create('width'),
    //   width: '100%',
    //   color: 'white',
    //   [theme.breakpoints.up('sm')]: {
    //     width: 120,
    //     '&:focus': {
    //       width: 200,
    //     },
    //   },
    // }

    let content = null;
    //let menuOption = null;

    switch (this.state.show) {

      case 'Dashboard':
        content = <Dashboard />;
        //  menuOption = "MAP Operational Dashboard";
        break;

      case 'PatientAppForm':
        content = <Dashboard />;
        // menuOption = "Inventory Capture";
        break;

      default:
        //menuOption = "MAP Operational Dashboard";
        content =
          <ThemeProvider theme={theme}> </ThemeProvider>;
    }


    return (
      <HCPProvider>
        <div className="App">
          <ThemeProvider theme={theme}>
            <div >
              <AppBar primary="primary" style={appBarStyle}>

                <Toolbar style={toolBarStyle}>
                  <Typography variant="h5">
                    Kymriah - Health Care Practitioner Portal
                  </Typography>
                    <div style={searchStyle}>
                    <div style={searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Batch ID"
                      inputProps={{ 'aria-label': 'search' }}
                      style={inputStyle}
                    />
                  </div>
                  <div style={notificationButtonStyle}>
                    <IconButton aria-label="show 11 new notifications" color="inherit" >
                      <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon style={logOffIconStyle} />
                      </Badge>
                    </IconButton>
                  </div>
                  <div style={accountButtonStyle}>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="primary-search-account-menu"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle style={logOffIconStyle} />
                    </IconButton>
                  </div>
                </Toolbar>
              </AppBar>
            </div>
            <div >
              <SideBar style={sidebarStyle} elevation={3}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Tooltip TransitionComponent={Zoom} placement="right" title="Dashboard">
                        <IconButton size="medium" style={buttonStyle} onClick={this.showDashboard}>
                          <DashboardSharpIcon color="secondary" fontSize="large" />
                        </IconButton>
                      </Tooltip>
                    </ListItemIcon>
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem>
                    <ListItemIcon>
                      <Tooltip TransitionComponent={Zoom} placement="right" title="Patient Application">
                        <IconButton size="medium" style={buttonStyle} onClick={this.showCSCPortal}>
                          <GroupAddIcon color="secondary" fontSize="large" />
                        </IconButton>
                      </Tooltip>
                    </ListItemIcon>
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem>
                    <ListItemIcon>
                      <Tooltip TransitionComponent={Zoom} placement="right" title="Reports">
                        <IconButton size="medium" style={buttonStyle}>
                          <InboxIcon color="secondary" fontSize="large" />
                        </IconButton>
                      </Tooltip>
                    </ListItemIcon>
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem>
                    <ListItemIcon>
                      <Tooltip TransitionComponent={Zoom} placement="right" title="Notification">
                        <IconButton size="medium" style={buttonStyle}>
                          <MailIcon color="secondary" fontSize="large" />
                        </IconButton>
                      </Tooltip>
                    </ListItemIcon>
                  </ListItem>
                  <Divider variant="middle" />
                </List>
              </SideBar>
            </div>
            <div >
              <BottomBar style={bottomStyle}>
                <Toolbar >
                  <Typography variant="caption" display="block" gutterBottom>
                    Copyright © '20 Novartis NTO Blockchain. All rights reserved.
              </Typography>
                </Toolbar>

              </BottomBar>
            </div>

            <Paper style={paperStyle} elevation={0}>
              <Container >
                {content}
              </Container>
            </Paper>
          </ThemeProvider>
        </div>
      </HCPProvider>
    );
  }
}

export default PatientFormComponent;

