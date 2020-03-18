import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";
import data from "./data";

//import Tooltip from '@material-ui/core/Tooltip';
//import FilterListIcon from '@material-ui/icons/FilterList';
//import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import clsx from 'clsx';
import Container from "@material-ui/core/Container"

import Box from "@material-ui/core/Box"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from "@material-ui/core/Paper"
//changes to be made - check the component called   expansion panel
// can be used in PRF as well

// can be used instead of

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1",
    margin: theme.spacing(3),
    maxWidth: 445,
    marginBottom: 15,
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",

    "&:hover": {
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
      transform: "scale(1.04)"
    }
  },
  root1: {
    flexGrow: "1",
left: '1%',
  },
  paper: {

    width: "100%",
    margin: "5%",
    textAlign: 'left',
    display: "inline-block",

  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(5deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  apheresisAvatar: {
    backgroundColor: '#e1bee7'
  },

  grid: {
    direction: "column",
    justify: "space-between",
    alignItems: "flex-start",
    color: theme.palette.text.primary
  },

  apheresisHeader: {
    backgroundColor: '#f3e5f5',
    fontSize: 14,
  },
  Apheresistitle: {
    color: '#e1f5fe',
  },
  reinfusionHeader: {
    backgroundColor: '#e3f2fd',
  },
  reinfusionTitle: {
    color: '#e1f5fe',
  },
  reinfusionAvatar: {
    backgroundColor: '#bbdefb'
  },
  titlesize: {

  }

}));

export default function RecipeReviewCard() {
  const [importedData] = useState(data);
  var data_filter1 = importedData.filter(element => element.PRStatus === "Request : Initiated" ||  element.PRStatus === "Request : Payer Approved" ||  element.PRStatus === "Request : Novartis Approved" );
  console.log("data_filter1 :", data_filter1);
  var data_filter2 = importedData.filter(element => element.PRStatus === "Apheresis : In Progress" || element.PRStatus === "Apheresis : Requested"  );
  console.log("data_filter2 :", data_filter2);
  var data_filter3 = importedData.filter(element => element.PRStatus === "Manufacturing : Initiated" ||  element.PRStatus === "Manufacturing : In Progress" );
  console.log("data_filter3 :", data_filter3);
  var data_filter4 = importedData.filter(element => element.PRStatus === "Manufacturing : Completed" ||  element.PRStatus === "Reinfustion : Initiated" ||  element.PRStatus  ==="Reinfustion : In Progress" ||  element.PRStatus  ==="Reinfustion : Completed" ||  element.PRStatus  ==="Payment: Pending" ||  element.PRStatus  ==="Payment : Completed"||  element.PRStatus  === "Payment : Rejected");
  console.log("data_filter4 :", data_filter4);

  const classes = useStyles();

  const [expandedId, setExpandedId] = React.useState(-1);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? false : i);
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = event => {
    setAnchorEl(null);
  };
  return (

    <Paper className={classes.root1}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={3}>
          <Typography variant='h6' align="center">
            Request Initated
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6' align="center">
            Apheresis Schedule
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6'align="center">
           KYMRIAH Manufacturing - In progress
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6' align="center">
            Reinfusion schedules
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={3}>
          {data_filter1.map((order, i) => (
            // {importedData.map(order,i)=> (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
                  // avatar={<Avatar className={classes.apheresisAvatar} />}
                action={
                  <div>
                    <IconButton aria-label="settings" aria-haspopup="true"
                      onClick={handleClick} >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu className={classes.Paper}
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}>
                      <MenuItem onClick={handleClose}>Apheresis Initiated</MenuItem>
                      <MenuItem onClick={handleClose}>Apheresis Completed</MenuItem>
                      <MenuItem onClick={handleClose}>Cancel Apheresis Request</MenuItem>
                      {/* <MenuItem onClick={handleClose}>Confirm Delivery</MenuItem> */}
                    </Menu>
                  </div>

                }
                className={classes.apheresisHeader}
                title={order.patientFullName}
                subheader= {order.patientIDInHospital} 
              />
              <CardContent>

                <Typography color="textPrimary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.leukapheresisDate}
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Age:</b> {order.patientAge}, <b>Weight:</b>
                  {order.patientWeight}
                </Typography>
              </CardContent>
              <div>
                <CardActions disableSpacing>
                  <IconButton
                    onClick={() => handleExpandClick(i)}
                    aria-expanded={expandedId === i}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </div>
              <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                <CardContent>
                  {/*  <Typography paragraph>{order.SNo}</Typography>*/}
                  <Typography paragraph>
                    <b> Hospital Name :</b> {order.hospitalName}
                  </Typography>
                  <Typography paragraph>
                    <b> Name of Doctor :</b> {order.nameOfHCP}
                    <br />
                    <b> Name of Doctor 2:</b> {order.nameOfHCP2}
                    <br />
                  </Typography>
                  <Typography paragraph>
                    <b> Payer Name:</b> {order.payerName} <br />
                    <b> Payer Appproval ID:</b> {order.payerApprovalNumber}
                  </Typography>
                  <Typography paragraph>
                    <b> Cryopreserved Leukapheresis Location:</b>{" "}
                    {order.cryoPreservedLeukapheresisLocation}{" "}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </Grid>
        <Grid item xs={3}>
          {data_filter2.map((order, i) => (
            // {importedData.map(order,i)=> (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
                // avatar={<Avatar className={classes.apheresisAvatar} />}
                action={
                  <div>
                    <IconButton aria-label="settings" aria-haspopup="true"
                      onClick={handleClick} >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}>
                      <MenuItem onClick={handleClose}>Apheresis Initiated</MenuItem>
                      <MenuItem onClick={handleClose}>Apheresis Completed</MenuItem>
                      <MenuItem onClick={handleClose}>Cancel Apheresis Request</MenuItem>
                      {/* <MenuItem onClick={handleClose}>Confirm Delivery</MenuItem> */}
                    </Menu>
                  </div>

                }
                className={classes.apheresisHeader}
                title={order.patientFullName}
                subheader={order.patientIDInHospital}
              />
              <CardContent>

                <Typography color="textPrimary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.leukapheresisDate}
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Age:</b> {order.patientAge}, <b>Weight:</b>
                  {order.patientWeight}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedId === i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                <CardContent>
                  {/*  <Typography paragraph>{order.SNo}</Typography>*/}
                  <Typography paragraph>
                    <b> Hospital Name :</b> {order.hospitalName}
                  </Typography>
                  <Typography paragraph>
                    <b> Name of Doctor :</b> {order.nameOfHCP}
                    <br />
                    <b> Name of Doctor 2:</b> {order.nameOfHCP2}
                    <br />
                  </Typography>
                  <Typography paragraph>
                    <b> Payer Name:</b> {order.payerName} <br />
                    <b> Payer Appproval ID:</b> {order.payerApprovalNumber}
                  </Typography>
                  <Typography paragraph>
                    <b> Cryopreserved Leukapheresis Location:</b>{" "}
                    {order.cryoPreservedLeukapheresisLocation}{" "}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </Grid>
        <Grid item xs={3}>
          {data_filter3.map((order, i) => (
            // {importedData.map(order,i)=> (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
                // avatar={<Avatar className={classes.reinfusionAvatar} />}
                action={
                  <div>
                    <IconButton aria-label="settings" aria-haspopup="true"
                      onClick={handleClick} >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}>
                      <MenuItem onClick={handleClose}>Reinfusion Initiated</MenuItem>
                      <MenuItem onClick={handleClose}>Reinfusion Completed</MenuItem>
                      <MenuItem onClick={handleClose}>Cancel Reinfusion </MenuItem>
                      <MenuItem onClick={handleClose}>Request for additional CAR-T</MenuItem>
                    </Menu>
                  </div>

                }
                className={classes.reinfusionHeader}
                title={order.patientFullName}
                subheader={order.patientIDInHospital}
              />
              <CardContent>
                <Typography color="textPrimary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.leukapheresisDate}
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Age:</b> {order.patientAge}, <b>Weight:</b>
                  {order.patientWeight}
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Reinfusion Date: </b>
                  {order.reinfusionDate}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton

                  onClick={() => handleExpandClick(1000 + i)}
                  aria-expanded={expandedId === 1000 + i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse
                in={expandedId === 1000 + i}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  {/* <Typography paragraph>{order.SNo}</Typography> */}
                  <Typography paragraph>
                    <b> Hospital Name :</b> {order.hospitalName}
                  </Typography>
                  <Typography paragraph>
                    <b> Name of Doctor :</b> {order.nameOfHCP}
                    <br />
                    <b> Name of Doctor 2:</b> {order.nameOfHCP2}
                    <br />
                  </Typography>
                  <Typography paragraph>
                    <b> Payer Name:</b> {order.payerName} <br />
                    <b> Payer Appproval ID:</b> {order.payerApprovalNumber}
                  </Typography>
                  <Typography paragraph>
                    <b> Cryopreserved Leukapheresis Location:</b>{" "}
                    {order.cryoPreservedLeukapheresisLocation}{" "}
                  </Typography>

                  <Typography paragraph>
                    <b> Reinfusion Location:</b> {order.reinfusionLocation}{" "}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </Grid>
        <Grid item xs={3}>
          {data_filter4.map((order, i) => (
            // {importedData.map(order,i)=> (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
                // avatar={<Avatar className={classes.reinfusionAvatar} />}
                action={
                  <div>
                    <IconButton aria-label="settings" aria-haspopup="true"
                      onClick={handleClick} >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}>
                      <MenuItem onClick={handleClose}>Reinfusion Initiated</MenuItem>
                      <MenuItem onClick={handleClose}>Reinfusion Completed</MenuItem>
                      <MenuItem onClick={handleClose}>Cancel Reinfusion </MenuItem>
                      <MenuItem onClick={handleClose}>Request for additional CAR-T</MenuItem>
                    </Menu>
                  </div>

                }
                className={classes.reinfusionHeader}
                title={order.patientFullName}
                subheader={order.patientIDInHospital}
              />
              <CardContent>
                <Typography color="textPrimary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.leukapheresisDate}
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Age:</b> {order.patientAge}, <b>Weight:</b>
                  {order.patientWeight}
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Reinfusion Date: </b>
                  {order.reinfusionDate}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton

                  onClick={() => handleExpandClick(2000 + i)}
                  aria-expanded={expandedId === 2000 + i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse
                in={expandedId === 2000 + i}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  {/* <Typography paragraph>{order.SNo}</Typography> */}
                  <Typography paragraph>
                    <b> Hospital Name :</b> {order.hospitalName}
                  </Typography>
                  <Typography paragraph>
                    <b> Name of Doctor :</b> {order.nameOfHCP}
                    <br />
                    <b> Name of Doctor 2:</b> {order.nameOfHCP2}
                    <br />
                  </Typography>
                  <Typography paragraph>
                    <b> Payer Name:</b> {order.payerName} <br />
                    <b> Payer Appproval ID:</b> {order.payerApprovalNumber}
                  </Typography>
                  <Typography paragraph>
                    <b> Cryopreserved Leukapheresis Location:</b>{" "}
                    {order.cryoPreservedLeukapheresisLocation}{" "}
                  </Typography>

                  <Typography paragraph>
                    <b> Reinfusion Location:</b> {order.reinfusionLocation}{" "}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
}