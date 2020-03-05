import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

import { MapProvider } from './HCPContext';
import Dashboard from './patientRequestForm';
import axios from 'axios';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const paperStyle = {
    height: '70%',
    width: '95%',
    margin: '2.5%',
    textAlign: 'center',
    display: 'inline-block'
};

class CmrAppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            show: null,
            pendingApproval: '0',
            pendingAllocation: '0',
            pendingShipment: '0',
            shipmentCompleted: '0',
        };
        this.loadDashboardData = this.loadDashboardData.bind(this);

    }
    componentDidMount() {
        this.loadDashboardData();
    }

    loadDashboardData() {
        this.getPendingApprovalCount();
    }

    getPendingApprovalCount() {             
        var newValue = '{"selector": {"objectType":"REQUEST", "status": "Requested", "activeInd":"A"}}';
        axios.post(`http://plsmap.westeurope.cloudapp.azure.com:5000/api/mapPendingRequestCount`, { newValue })
            .then(res => {
                if (res.data !== "EMPTY") {
                    let count = res.data.records.length;
                    console.log("Pending Approval Count::", count);
                    this.setState({ pendingApproval: count });
                } else {
                    console.log("Pending Approval count : EMPTY");
                    this.setState({ pendingApproval: '0' });
                }
                this.getPendingAllocationCount();
            })
            .catch(error => {
                console.log("exception in the post request of Dashboard ", error.response);
                //alert("Error in Capture");
            })
    }

    getPendingAllocationCount() {
        var newValue = '{"selector": {"objectType":"REQUEST", "status": "Approved", "activeInd":"A"}}';
        axios.post(`http://plsmap.westeurope.cloudapp.azure.com:5000/api/mapPendingRequestCount`, { newValue })
            .then(res => {
                if (res.data !== "EMPTY") {
                    let count = res.data.records.length;
                    console.log("Pending Allocation Count::", count);
                    this.setState({ pendingAllocation: count });
                } else {
                    console.log("Pending Allocation count : EMPTY");
                    this.setState({ pendingAllocation: '0' });
                }
                this.getPendingShipmentCount();
            })
            .catch(error => {
                console.log("exception in the post request of Dashboard ", error.response);
                //alert("Error in Capture");
            })
    }

    getPendingShipmentCount() {
        var newValue = '{"selector": {"objectType":"REQUEST", "status": "Allocated", "activeInd":"A"}}';
        axios.post(`http://plsmap.westeurope.cloudapp.azure.com:5000/api/mapPendingRequestCount`, { newValue })
            .then(res => {
                if (res.data !== "EMPTY") {

                    let count = res.data.records.length;
                    console.log("Pending Shipment Count::", count);
                    this.setState({ pendingShipment: count });
                } else {
                    console.log("Pending Shipment count : EMPTY");
                    this.setState({ pendingShipment: '0' });
                }
                this.getCompletedShipmentCount();

            })
            .catch(error => {
                console.log("exception in the post request of Dashboard ", error.response);
                //alert("Error in Capture");
            })
    }

    getCompletedShipmentCount() {
        var newValue = '{"selector": {"objectType":"REQUEST", "status": "Delivered", "activeInd":"A"}}';
        axios.post(`http://plsmap.westeurope.cloudapp.azure.com:5000/api/mapPendingRequestCount`, { newValue })
            .then(res => {
                if (res.data !== "EMPTY") {
                    let count = res.data.records.length;
                    console.log("Completed Shipment Count::", count);
                    this.setState({ shipmentCompleted: count });
                } else {
                    console.log("Completed Shipment count : EMPTY");
                    this.setState({ shipmentCompleted: '0' });
                }
            })
            .catch(error => {
                console.log("exception in the post request of Dashboard ", error.response);
                //alert("Error in Capture");
            })
    }


    handleToggle = () => this.setState({ open: !this.state.open });

    showMapCapture = () => {
        this.setState({ show: 'mapCapture', open: false });
    };


    logoutFunction = () => {
        alert(`Logout`);
    };

    render() {
        let content = null;
        let menuOption = null;

        switch (this.state.show) {

            case 'dashboard':
                content = <Dashboard/>
                menuOption = "MAP Operational Dashboard";
                break;

      

            default:
                content = <Dashboard />;
                menuOption = "MAP Requests Dashboard";
        }

        return (
            <MapProvider>
                <div className="App">
                    <AppBar
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        title="Certified Medical Representative"
                        onLeftIconButtonClick={this.handleToggle}
                        style={{
                            fontFamily: '"Fira Sans"',
                            backgroundColor: '#388E3C',
                        }} >
                        <IconButton edge="end" aria-label="logout" aria-haspopup="true" color="inherit" >
                            <AccountCircle />
                        </IconButton>
                    </AppBar>
                    <Drawer
                        docked={false}
                        width={250}
                        open={this.state.open}
                        onRequestChange={open => this.setState({ open })}
                        style={{
                            backgroundColor: '#388E3C',
                        }}
                    >
                        <AppBar title="Menu" style={{
                            fontFamily: '"Fira Sans"',
                            backgroundColor: '#388E3C',
                        }} >

                        </AppBar>

                        <MenuItem id="showDashboardId" onClick={this.showDashboard}>
                            Dashboard
                        </MenuItem>


                        <MenuItem id="showMapCaptureId" onClick={this.showMapCapture}>
                            MAP Requests
                        </MenuItem>
                        <MenuItem id="showMapDashboardId" onClick={this.showMapDashboard}>
                            MAP Dashboard
                        </MenuItem>
                    </Drawer>
                    <Paper style={paperStyle} zDepth={2}>
                        <Toolbar style={{ justifyContent: 'center', backgroundColor: '#A5D6A7' }}>
                            <ToolbarTitle text={menuOption} />

                        </Toolbar>
                        {content}
                    </Paper>
                </div>
            </MapProvider>
        );
    }
}

export default CmrAppComponent;
