import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import data from './data';


const useStyles = makeStyles({
    root: {
      maxWidth: 200,
    },
  });



const baseUrl = "https://image.tmdb.org/t/p/w185";

const { id, poster_path, original_title, overview, release_date, vote_average } = data;

console.log(`${baseUrl}${poster_path}`);

const MovieCard = () => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="poster"
          height="300"
          image={`${baseUrl}${poster_path}`}
          title="poster"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            {original_title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" color="textPrimiary" component="p">
              {`Release Data: ${release_date}`}
          </Typography>
          <Typography variant="subtitle2" color="textPrimiary" component="p">
              {`Rate: ${vote_average}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          ADD TO CART
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    )
}

export default MovieCard;