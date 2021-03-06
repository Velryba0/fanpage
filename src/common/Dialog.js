import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

import './dialog.styles.scss';

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
    },
    header: {
        position: 'absolute',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '3px'
    },
    media: {
        height: 500,
        width: 450
      },
    actions: {
        backgroundColor: 'black',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        color: 'white'
    },
    typography: {
        color: 'white',
        marginTop: '9px',
        fontSize: '25px'
    },
    icons: {
        color: 'white'
    }
});

export default function SimpleDialog(props) {
  const classes = useStyles();
  const { name, status, species, gender, image, location, setOpen, day,  time, open, origin } = props;

  const handleClose = () => {
    setOpen(false)
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <Card className={classes.root}>
        <CardHeader
            title={name}
            subheader={day}
            className={classes.header}
        />
        <CardMedia
            className={classes.media}
            image={image}
        />
        <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
            {`Status: ${status}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
            {`Species: ${species}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
            {`Origin: ${origin}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
            {`Gender: ${gender}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
            {`Location: ${location}`}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.actions}>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon className={classes.icons}/>
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon className={classes.icons} />
            </IconButton>
        </CardActions>
      </Card>
    </Dialog>
  );
}