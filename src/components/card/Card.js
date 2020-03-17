import React from 'react';
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  
});

export default function CardChar({name, status, species, gender, image, location, val, created,  time, ...others}) {
  const classes = useStyles();
  console.log(val)
//   moment.locale('es')
  let day = moment(created).format('DD-MMM-YYYY')
  // console.log(day)
  return (
    <>
        <Grow in={!val}
        style={{ transformOrigin: '0 0 0' }}
            {...(!val ? { timeout: 1000 } : {})}>
            <Card className={classes.root} elevation={4}>
                <CardActionArea onClick={(e) => {console.log(e)}}>
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
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grow>
    </>
  );
}