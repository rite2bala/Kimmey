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

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//changes to be made - check the component called   expansion panel
// can be used in PRF as well

// can be used instead of

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    maxWidth: 445,
    marginBottom: 15,
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
    "&:hover": {
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
      transform: "scale(1.04)"
    }
  },
  paper: {
    width: "90%",
    margin: "5%",
    textAlign: 'center',
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

    alignContent: "center",
    direction: "column",
    justify: "center",
    alignItems: "flex-start",
    color: theme.palette.text.secondary
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
  var data_filter = importedData.filter(element => element.SNo % 2 === "1");
  console.log("data_filter :", data_filter);
  var data_filter2 = importedData.filter(element => element.SNo % 2 === "0");

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
    <Container maxWidth="lg">
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={6}>
          <Typography variant='h4'>
            Apheresis schedules
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h4'>
            Reinfusion schedules
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={6}>
          {data_filter.map((order, i) => (
            // {importedData.map(order,i)=> (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
                avatar={<Avatar className={classes.apheresisAvatar} />}
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

                <Typography color="textSecondary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.leukapheresisDate}
                </Typography>
                <Typography color="textSecondary" component="p">
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
        <Grid item xs={6}>
          {data_filter2.map((order, i) => (
            // {importedData.map(order,i)=> (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
                avatar={<Avatar className={classes.reinfusionAvatar} />}
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
                <Typography color="textSecondary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.leukapheresisDate}
                </Typography>
                <Typography color="textSecondary" component="p">
                  <b>Age:</b> {order.patientAge}, <b>Weight:</b>
                  {order.patientWeight}
                </Typography>
                <Typography color="textSecondary" component="p">
                  <b>Reinfusion Date: </b>
                  {order.reinfusionLocation}
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
      </Grid>
    </Container>
  );
}
