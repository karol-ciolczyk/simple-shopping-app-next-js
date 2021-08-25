import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: 260,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 140,
  },
  actionCard: {
    display: "flex",
    justifyContent: "space-around",
    margin: "15px 0px",
    alignItems: "center",
  },
}));

export const ProductCard = function (props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.actionCard}>
        <Typography variant="subtitle2">Price: {props.price}</Typography>
        <Button size="small" variant="contained" color="primary">
          add to basket
        </Button>
      </div>
    </Card>
  );
};
