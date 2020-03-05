import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../../components/Typography';

const styles = theme => ({
    root: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(4),
    },
    images: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexWrap: 'wrap',
    },
    imageWrapper: {
      position: 'relative',
      display: 'block',
      padding: 0,
      borderRadius: 0,
      height: '30vh',
      [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
      },
      '&:hover': {
        zIndex: 1,
      },
      '&:hover $imageBackdrop': {
        opacity: 0.15,
      },
      '&:hover $imageMarked': {
        opacity: 0,
      },
      '&:hover $imageTitle': {
        border: '4px solid currentColor',
      },
    },
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  });

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    
    {
      url: 'https://cdn.pixabay.com/photo/2016/01/19/15/05/doctor-1149149_1280.jpg',
      title: 'HCP',
      width: '33.33%',
      href: '/hcp',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg',
        title: 'CSC and Site',
        width: '33.33%',
        href: '/site',
    },
    
    {
        url: 'https://cdn.pixabay.com/photo/2019/06/22/19/58/cookie-jar-4292358_1280.jpg',
      title: 'Cryoport',
      width: '33.34%',
      href: '/dewar',
    },
    {
      url:  'https://cdn.pixabay.com/photo/2020/02/16/19/08/transport-4854538_1280.jpg',
      title: 'World Courier',
      width: '33.33%',
      href: '/courier',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2019/01/12/19/38/audit-3929140_1280.jpg',
       title: 'Audit ',
      width: '33.33%',
      href: 'audit',
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2015/05/10/21/28/accounting-761599_1280.jpg',
      title: 'Payer',
      width: '33.34%',
      href: '/audit',
    }
  ];

  return (
    <Container className={classes.root} component="section" maxWidth='lg'>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Kymriah Central Login Portal 
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            href = {image.href}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
