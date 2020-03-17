import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import moment from 'moment';

import SimpleDialog from '../../common/Dialog'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
  
});

export default function CardChar({name, status, species, gender, image, location, val, created,  time, origin, ...others}) {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
//   moment.locale('es')
  let day = moment(created).format('DD-MMM-YYYY');

  const handleClose = () => {
    setOpen(false)
  }
  // console.log(day)
  return (
    <>
        <Grow in={!val}
        style={{ transformOrigin: '0 0 0' }}
            {...(!val ? { timeout: 1000 } : {})}>
            <Card className={classes.root} elevation={4}>
                <CardActionArea onClick={(e) => {setOpen(true)}}>
                    <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {location}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grow>
        <SimpleDialog 
        open={open} 
        onClose={handleClose} 
        name={name}
        image={image}
        status={status}
        species={species}
        gender={gender}
        location={location}
        day={day}
        setOpen={setOpen}
        origin={origin}
        />
    </>
  );
}