import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from "@material-ui/core/Paper"
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1",
    margin: theme.spacing(2),
    maxWidth: 500,
    marginBottom: 15,
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",

    "&:hover": {
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
      transform: "scale(1.04)"
    },
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
    backgroundColor: '#e1f5fe',
  },

  requestHeader: {
    backgroundColor: '#ffcdd2',
  },
  Apheresistitle: {
    color: '#e1f5fe',
  },
  reinfusionHeader: {
    backgroundColor: '#c5e1a5',
  },
  manufacturingHeader: {
    backgroundColor: '#e1f5fe',
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

export default function RecipeReviewCard(props) {

  const importedData = JSON.stringify(props.forms);
  var importedData1 = JSON.parse(importedData).result;
  console.log("importedData1::::", JSON.stringify(importedData1));
  var data_filter1 = importedData1.filter(element => element.payload.status === "Request" && (element.payload.subStatus === "Initiated" || element.payload.subStatus === "Payer Approved" || element.payload.subStatus === "Novartis Approved"));
  var data_filter2 = importedData1.filter(element => element.payload.status === "Request" && (element.payload.subStatus === "Initiated" || element.payload.subStatus === "Payer Approved" || element.payload.subStatus === "Novartis Approved"));
  var data_filter3 = importedData1.filter(element => element.payload.status === "Request" && (element.payload.subStatus === "Initiated" || element.payload.subStatus === "Payer Approved" || element.payload.subStatus === "Novartis Approved"));
  var data_filter4 = importedData1.filter(element => element.payload.status === "Request" && (element.payload.subStatus === "Initiated" || element.payload.subStatus === "Payer Approved" || element.payload.subStatus === "Novartis Approved"));

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
    <Paper className={classes.root1} elevation={0}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={3}>
          <Typography variant='h6' align="center">
            New Requests
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6' align="center">
            Apheresis Stage
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6' align="center">
            Manufacturing Stage
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6' align="center">
            Reinfusion Stage
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={3}>
          {data_filter1.map((order, i) => (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
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
                className={classes.requestHeader}
                title={order.payload.patient.patientFullName}
                subheader={order.payload.patient.patientIDinHospital}
              />
              <CardContent>
                <Chip
                  size="small"
                  label= {<Typography color="white" component="p" align="center">
                   {order.payload.subStatus}
                  </Typography> }
                  color="primary"
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
                <br />
                <br />
                <Typography color="textPrimary" component="p" align="left">
                  <b>Age:</b> {order.payload.patient.patientAge} Years
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Weight:</b> {order.payload.patient.patientWeight} Kgs
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.payload.apheresisCenter.leukapheresisDate}
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
                    <b> Hospital Name :</b> {order.payload.hcpDemographics.nameOfHospital}
                  </Typography>
                  <Typography paragraph>
                    <b> Name of Doctor :</b> {order.payload.hcpDemographics.nameOfHospital}
                    <br />
                    <b> Name of Doctor 2:</b> {order.payload.hcpDemographics.nameOfHospital2}
                    <br />
                  </Typography>
                  <Typography paragraph>
                    <b> Payer Name:</b> {order.payload.payer} <br />
                    <b> Payer Appproval ID:</b> {order.payload.payerDetails.payerApprovalNumber}
                  </Typography>
                  <Typography paragraph>
                    <b> Cryopreserved Leukapheresis Location:</b>{" "}
                    {order.payload.apheresisCenter.cryoPreservedLeukapheresisLocation}{" "}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </Grid>
        <Grid item xs={3}>
          {data_filter2.map((order, i) => (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
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
                title={order.payload.patient.patientFullName}
                subheader={order.payload.patient.patientIDinHospital}
              />
              <CardContent>
              <Chip
                  size="small"
                  label= {<Typography color="white" component="p" align="center">
                   {order.payload.subStatus}
                  </Typography> }
                  color="primary"
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
                <br />
                <br />
                <Typography color="textPrimary" component="p" align="left">
                  <b>Age:</b> {order.payload.patient.patientAge} Years
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Weight:</b> {order.payload.patient.patientWeight} Kgs
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.payload.apheresisCenter.leukapheresisDate}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton
                  onClick={() => handleExpandClick(3000 + i)}
                  aria-expanded={expandedId === 3000 + i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expandedId === 3000 + i} timeout="auto" unmountOnExit>
                <CardContent>
          
                  {/*  <Typography paragraph>{order.SNo}</Typography>*/}
                  <Typography paragraph>
                    <b> Hospital Name :</b> {order.payload.hcpDemographics.nameOfHospital}
                  </Typography>
                  <Typography paragraph>
                    <b> Name of Doctor :</b> {order.payload.hcpDemographics.nameOfHospital}
                    <br />
                    <b> Name of Doctor 2:</b> {order.payload.hcpDemographics.nameOfHospital2}
                    <br />
                  </Typography>
                  <Typography paragraph>
                    <b> Payer Name:</b> {order.payload.payer} <br />
                    <b> Payer Appproval ID:</b> {order.payload.payerDetails.payerApprovalNumber}
                  </Typography>
                  <Typography paragraph>
                    <b> Cryopreserved Leukapheresis Location:</b>{" "}
                    {order.payload.apheresisCenter.cryoPreservedLeukapheresisLocation}{" "}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </Grid>
        <Grid item xs={3}>
          {data_filter3.map((order, i) => (
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
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
                className={classes.manufacturingHeader}
                title={order.payload.patient.patientFullName}
                subheader={order.payload.patient.patientIDinHospital}
              />
              <CardContent>
              <Chip
                  size="small"
                  label= {<Typography color="white" component="p" align="center">
                   {order.payload.subStatus}
                  </Typography> }
                  color="primary"
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
                <br />
                <br />
                <Typography color="textPrimary" component="p" align="left">
                  <b>Age:</b> {order.payload.patient.patientAge} Years
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Weight:</b> {order.payload.patient.patientWeight} Kgs
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.payload.apheresisCenter.leukapheresisDate}
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
                    <b> Hospital Name :</b> {order.payload.hcpDemographics.nameOfHospital}
                  </Typography>
                  <Typography paragraph>
                    <b> Name of Doctor :</b> {order.payload.hcpDemographics.nameOfHospital}
                    <br />
                    <b> Name of Doctor 2:</b> {order.payload.hcpDemographics.nameOfHospital2}
                    <br />
                  </Typography>
                  <Typography paragraph>
                    <b> Payer Name:</b> {order.payload.payer} <br />
                    <b> Payer Appproval ID:</b> {order.payload.payerDetails.payerApprovalNumber}
                  </Typography>
                  <Typography paragraph>
                    <b> Cryopreserved Leukapheresis Location:</b>{" "}
                    {order.payload.apheresisCenter.cryoPreservedLeukapheresisLocation}{" "}
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
            <Card className={classes.root} key={order.SNo}>
              <CardHeader
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
                title={order.payload.patient.patientFullName}
                subheader={order.payload.patient.patientIDinHospital}
              />
              <CardContent>
              <Chip
                  size="small"
                  label= {<Typography color="white" component="p" align="center">
                   {order.payload.subStatus}
                  </Typography> }
                  color="primary"
                  deleteIcon={<DoneIcon />}
                  variant="outlined"
                />
                <br />
                <br />
                <Typography color="textPrimary" component="p" align="left">
                  <b>Age:</b> {order.payload.patient.patientAge} Years
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>Weight:</b> {order.payload.patient.patientWeight} Kgs
                </Typography>
                <Typography color="textPrimary" component="p">
                  <b>Leukapheresis Date: </b>
                  {order.payload.apheresisCenter.leukapheresisDate}
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
                    <b> Hospital Name :</b> {order.payload.hcpDemographics.nameOfHospital}
                  </Typography>
                  <Typography paragraph>
                    <b> Name of Doctor :</b> {order.payload.hcpDemographics.nameOfHospital}
                    <br />
                    <b> Name of Doctor 2:</b> {order.payload.hcpDemographics.nameOfHospital2}
                    <br />
                  </Typography>
                  <Typography paragraph>
                    <b> Payer Name:</b> {order.payload.payer} <br />
                    <b> Payer Appproval ID:</b> {order.payload.payerDetails.payerApprovalNumber}
                  </Typography>
                  <Typography paragraph>
                    <b> Cryopreserved Leukapheresis Location:</b>{" "}
                    {order.payload.apheresisCenter.cryoPreservedLeukapheresisLocation}{" "}
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