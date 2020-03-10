import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";
import data from "./data";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//changes to be made - check the component called   expansion panel
// can be used in PRF as well

// can be used instead of

const useStyles = makeStyles(theme => ({
  root: {
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

    display: "inline-block"
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
  avatar: {
    backgroundColor: red[500]
  },
  grid: {
    alignContent: "center",
    direction: "column",
    justify: "center",
    alignItems: "flex-start"
  }
}));

export default function RecipeReviewCard() {
  const [importedData] = useState(data);
  var data_filter = importedData.filter(element => element.SNo % 2 == "1");
  console.log("data_filter :", data_filter);
  var data_filter2 = importedData.filter(element => element.SNo % 2 == "0");

  const classes = useStyles();

  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? false : i);
  };

  return (
    <Paper elevation={0} className={classes.paper}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={6}>
          {data_filter.map((order, i) => (
            // {importedData.map(order,i)=> (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
                avatar={<Avatar />}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={order.patientFullName}
              />
              <CardContent>
                <Typography color="textSecondary" component="p">
                  <b>Patient ID: </b>
                  {order.patientIDInHospital}
                </Typography>
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
                avatar={<Avatar />}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={order.patientFullName}
              />
              <CardContent>
                <Typography color="textSecondary" component="p">
                  <b>Patient ID: </b>
                  {order.patientIDInHospital}
                </Typography>
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
    </Paper>
  );
}
